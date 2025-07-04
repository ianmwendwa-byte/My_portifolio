import { useRef, useMemo, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights';
import Particles from './Particles';


// Define your tech stack icons data
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.25,
    baseRotationSpeed: 0.01,
    isOrbiting: true,
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 1.25,
    baseRotationSpeed: 0.012,
    isOrbiting: true,
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.0125,
    baseRotationSpeed: 0.009,
    isOrbiting: true,
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.0125,
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
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' }); // Explicit desktop check

  // Responsive Parameters for the circular arrangement and camera
  let orbitRadius;
  let orbitSpeed;
  let cameraZPosition;
  let cameraFOV;
  let orbitControlsMinDistance;
  let orbitControlsMaxDistance;

  if (isMobile) {
    orbitRadius = 2; // Smaller orbit for mobile
    orbitSpeed = 0.008; // Slightly faster orbit on mobile
    cameraZPosition = 8; // Closer camera for mobile
    cameraFOV = 70; // Wider FOV for mobile
    orbitControlsMinDistance = 2;
    orbitControlsMaxDistance = 15;
  } else if (isTablet) {
    orbitRadius = 2.5; // Medium orbit for tablet
    orbitSpeed = 0.006;
    cameraZPosition = 9; // Medium camera distance
    cameraFOV = 65; // Medium FOV
    orbitControlsMinDistance = 3;
    orbitControlsMaxDistance = 18;
  } else { // Desktop
    orbitRadius = 3; // Original orbit radius
    orbitSpeed = 0.005; // Original orbit speed
    cameraZPosition = 10; // Original camera distance
    cameraFOV = 60; // Original FOV
    orbitControlsMinDistance = 5;
    orbitControlsMaxDistance = 20;
  }

  return (
    <Canvas camera={{ position: [0, 0, cameraZPosition], fov: cameraFOV }} shadows>
      <ambientLight intensity={1.5} color="#ffffff" />
      <HeroLights /> {/* Your lighting component */}
      <Particles />   {/* Your particles component */}

      <OrbitControls
        enablePan={false}
        enableZoom={true} // Enable zoom always, but control min/max distance
        maxDistance={orbitControlsMaxDistance} // Responsive maxDistance
        minDistance={orbitControlsMinDistance} // Responsive minDistance
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}> {/* Fallback can be null or a loading indicator */}
        {/* Central Git icon (not orbiting) */}
        {techStackIcons.find(icon => !icon.isOrbiting) && (
          <RotatingIcon
            modelPath={techStackIcons.find(icon => !icon.isOrbiting).modelPath}
            scale={techStackIcons.find(icon => !icon.isOrbiting).scale}
            position={[0, 0, 0]} // Stays at the center
            baseRotationSpeed={techStackIcons.find(icon => !icon.isOrbiting).baseRotationSpeed}
          />
        )}

        {/* Group for the orbiting icons, now wrapped in OrbitingGroupAnimator */}
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
      </Suspense>
    </Canvas>
  );
};

export default HeroModel;
