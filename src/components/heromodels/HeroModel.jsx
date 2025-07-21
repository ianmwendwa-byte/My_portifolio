import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights';
import Particles from './Particles';
import CanvasLoader from '../Loader';


// Define your tech stack icons data
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.5,
    baseRotationSpeed: 0.01,
    isOrbiting: true,
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 2.50,
    baseRotationSpeed: 0.012,
    isOrbiting: true,
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.025,
    baseRotationSpeed: 0.009,
    isOrbiting: true,
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.025,
    baseRotationSpeed: 0.007,
    isOrbiting: false,
  },
];

// Component for a single rotating and interactive icon
const RotatingIcon = ({ modelPath, scale, position, baseRotationSpeed, ...props }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef();
  const [currentRotationSpeed, setCurrentRotationSpeed] = useState(baseRotationSpeed);
  const [currentScale, setCurrentScale] = useState(scale);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += currentRotationSpeed;
    }
  });

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const handleClick = () => {
    setCurrentRotationSpeed(baseRotationSpeed * 3);
    setCurrentScale(scale * 1.2);

    setTimeout(() => {
      setCurrentRotationSpeed(baseRotationSpeed);
      setCurrentScale(scale);
    }, 500);
  };

  return (
    <primitive
      object={clonedScene}
      ref={meshRef}
      scale={currentScale}
      position={position}
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      {...props}
    />
  );
};

// Preload all tech stack models for faster loading
techStackIcons.forEach(icon => useGLTF.preload(icon.modelPath));

// Helper component to manage the orbiting group's animation
const OrbitingGroupAnimator = ({ children, orbitSpeed }) => {
  const orbitingGroupRef = useRef();

  useFrame(() => {
    if (orbitingGroupRef.current) {
      orbitingGroupRef.current.rotation.y += orbitSpeed;
    }
  });

  return <group ref={orbitingGroupRef}>{children}</group>;
};

const HeroModel = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  // Responsive Parameters for the circular arrangement and camera
  let orbitRadius;
  let orbitSpeed;
  let cameraZPosition;
  let cameraFOV;
  let orbitControlsMinDistance;
  let orbitControlsMaxDistance;
  let ambientLightIntensity;
  let enableShadows;

  if (isMobile) {
    orbitRadius = 2;
    orbitSpeed = 0.008;
    cameraZPosition = 8;
    cameraFOV = 70;
    orbitControlsMinDistance = 2;
    orbitControlsMaxDistance = 15;
    ambientLightIntensity = 0.8; // Lower intensity for mobile
    enableShadows = false; // Disable shadows for mobile
  } else if (isTablet) {
    orbitRadius = 2.5;
    orbitSpeed = 0.006;
    cameraZPosition = 9;
    cameraFOV = 65;
    orbitControlsMinDistance = 3;
    orbitControlsMaxDistance = 18;
    ambientLightIntensity = 1.2;
    enableShadows = true;
  } else {
    orbitRadius = 4;
    orbitSpeed = 0.005;
    cameraZPosition = 10;
    cameraFOV = 50;
    orbitControlsMinDistance = 5;
    orbitControlsMaxDistance = 20;
    ambientLightIntensity = 1.5;
    enableShadows = true;
  }

  // Lazy loading state for orbiting icons
  const [showOrbitingIcons, setShowOrbitingIcons] = useState(false);

  // Show orbiting icons after a short delay (e.g., 800ms)
  useEffect(() => {
    const timer = setTimeout(() => setShowOrbitingIcons(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // For mobile, only show central icon, no orbiting icons or particles
  return (
    <Canvas camera={{ position: [5, 10, cameraZPosition], fov: cameraFOV }} shadows={enableShadows}>
      <ambientLight intensity={ambientLightIntensity} color="#ffffff" />
      <HeroLights />
      {!isMobile && <Particles />}

      {/* Disable OrbitControls on mobile for performance */}
      {!isMobile && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={orbitControlsMaxDistance}
          minDistance={orbitControlsMinDistance}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      )}

      <Suspense fallback={<CanvasLoader />}>
        {/* Central Git icon (not orbiting) loads immediately */}
        {techStackIcons.find(icon => !icon.isOrbiting) && (
          <RotatingIcon
            modelPath={techStackIcons.find(icon => !icon.isOrbiting).modelPath}
            scale={techStackIcons.find(icon => !icon.isOrbiting).scale}
            position={[0, 0, 0]}
            baseRotationSpeed={techStackIcons.find(icon => !icon.isOrbiting).baseRotationSpeed}
          />
        )}

        {/* Orbiting icons are lazy loaded after delay, but only for tablet/desktop */}
        {!isMobile && showOrbitingIcons ? (
          <OrbitingGroupAnimator orbitSpeed={orbitSpeed}>
            {techStackIcons.filter(icon => icon.isOrbiting).map((icon, index, arr) => {
              const angle = (index / arr.length) * Math.PI * 2;
              const x = orbitRadius * Math.sin(angle);
              const z = orbitRadius * Math.cos(angle);
              const y = 0;
              return (
                <RotatingIcon
                  key={index}
                  modelPath={icon.modelPath}
                  scale={icon.scale}
                  position={[x, y, z]}
                  baseRotationSpeed={icon.baseRotationSpeed}
                />
              );
            })}
          </OrbitingGroupAnimator>
        ) : (
          // Loader for orbiting icons
          !isMobile && <group position={[0, 0, 0]}>
            <CanvasLoader />
          </group>
        )}
      </Suspense>
    </Canvas>
  );
};

export default HeroModel;
