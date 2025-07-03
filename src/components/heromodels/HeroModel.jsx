import {Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {useMediaQuery } from 'react-responsive'
import { SpaceStation } from './SpaceStation';
import HeroLights from './HeroLights';
import { Suspense } from 'react';



const HeroModel = () => {
   const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
   
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 100 }}>
     
      <ambientLight intensity={1} color="#EEEEEE" />
      
      <OrbitControls
        enablePan={false} 
        enableZoom={!isTablet} 
        maxDistance={20} 
        minDistance={12} 
        minPolarAngle={Math.PI / 5} 
        maxPolarAngle={Math.PI / 2} 
      />

      <Suspense fallback={null}>
        <HeroLights />
       
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <SpaceStation scale={2}/>
        </group>
      </Suspense>
    </Canvas>
  )
}

export default HeroModel
