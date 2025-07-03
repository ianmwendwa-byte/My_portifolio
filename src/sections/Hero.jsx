import HeroModel from "../components/heromodels/HeroModel";
import Navbar from "../components/Navbar";
import { HEROS, SITE } from "../Constants";

const Hero = () => {
  return (
    <section className="bg-conic-180 from-background  to-primary relative h-screen  overflow-hidden">

      {/* Navbar */}
      <Navbar/>
      <div className="flex justify-center  font-orbitron xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl m my-5 md:my-10  lg:my-20  line-clamp-none">
        <h1>{SITE.description}</h1>
      </div>
      {/* HERO PARAGRAPHS AND 3D MODEL */}
      <div className="flex flex-col lg:flex-row lg:justify-between m-8 h-[100vh]">
  {/* Hero Paragraphs */}
  <div className="flex flex-col text-center lg:text-left  lg:w-1/2">
   
    {HEROS.map((Hero, index) => (
      <p
        key={index}
        className="font-roboto text-base sm:text-lg md:text-xl lg:text-2xl text-white line-clamp-4 lg:line-clamp-3 pb-3"
      >
        {Hero.content}
      </p>
    ))}
 
  </div>

  {/* 3D Model */}
  <figure> 
  <div className="xl:w-[50%] w-full h-full min-h-[50vh] absolute xl:-top-10 top-14  right-0">
    <HeroModel/>
  </div>
  </figure>
</div>

  
      
     
    </section>
  );
};

export default Hero;
