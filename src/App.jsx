import About from "./sections/About"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import gsap from "gsap"
import Navbar from "./components/Navbar"



function App() {

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
