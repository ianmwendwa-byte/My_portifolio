const HeroLights = () => (
  <>
    <spotLight
      position={[2, 5, 3]}
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

   
   
   </>
);

export default HeroLights;
