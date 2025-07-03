import React from 'react'
import Particles from './heromodels/Particles'
import { Canvas } from '@react-three/fiber'

const BackgroundParticles = () => {
  return (
 
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} flat>
        {/* Basic ambient light to ensure particles are visible */}
        <ambientLight intensity={0.2} color="#1a1a40" />
        {/* Render the Particles component inside the Canvas */}
        <Particles count={100} /> 
      </Canvas>
  )
}

export default BackgroundParticles
