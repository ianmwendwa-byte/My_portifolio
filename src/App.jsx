import About from "./sections/About"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

function App() {

const projectId = "slz5rtrmxw";
useEffect(() => {
  Clarity.init(projectId);
}, []);

  return (
    < >
     {/* Navbar*/}
      <Navbar className="hero-navbar" />
      <Hero/>
      <About/> 
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
     
   
    
    
    </>
  )
}

export default App
