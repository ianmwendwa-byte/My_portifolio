const HeroLights = () => (
  <>
    <spotLight
      position={[2, 3, 3]}
      intensity={50} // Adjusted intensity for balance
      color="white"
      angle={Math.PI / 6} // Narrower cone
      penumbra={0.5}      // Softer edges
      decay={1}           // How quickly light fades with distance
      castShadow          // Enable shadow casting
    />
   <directionalLight
      position={[10, 10, 10]} // Coming from top-right-front
      intensity={1.5}        // Fairly strong
      castShadow             // Enable shadow casting
    />
  <hemisphereLight
      skyColor="#0000FF"   // Blue sky color (space-like)
      groundColor="#000000" // Dark ground color (black for space)
      intensity={0.6}      // Moderate intensity
    />

    <spotLight
      position={[-5, 5, -5]} // From a different angle
      intensity={30}
      color="lightblue"      // A cooler light color
      angle={Math.PI / 7}
      penumbra={0.7}
      decay={1}
      castShadow
    />
 <pointLight
      position={[0, 0, 15]} // In front of the station
      intensity={5}         // Moderate intensity
      distance={30}         // Light travels up to 30 units
      decay={2}             // Light fades quickly
      color="orange"        // Warm glow
    />
   
   </>
);

export default HeroLights;
