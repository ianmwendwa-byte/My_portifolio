import React from 'react'; // Ensure React is imported
import Button from "../components/Button";
import HeroModel from "../components/heromodels/HeroModel";
import Navbar from "../components/Navbar";
import { HEROS, SITE } from "../Constants";
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

const Hero = () => {
  return (
    <section className="bg-conic-180 from-background to-primary text-text relative min-h-screen flex flex-col">

      {/* Navbar*/}
      <Navbar/>

      {/* Headline*/}
      <div className="flex justify-center font-orbitron xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl m my-5 md:my-10 lg:my-20 z-10 line-clamp-none">
        <h1>{SITE.description}</h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between m-8 flex-grow ">
        {/* Hero Paragraphs and Buttons */}
        <div className="flex flex-col text-center lg:text-left lg:w-1/2 z-10">
          {HEROS.map((Hero, index) => (
            <p
              key={index}
              className="font-roboto text-base sm:text-lg md:text-xl lg:text-2xl text-white line-clamp-4 lg:line-clamp-3 pb-3"
            >
              {Hero.content}
            </p>
          ))}
          {/* Buttons Div */}
          <div className="mt-4 lg:mt-10 flex justify-between gap-4 w-full lg:justify-center"> {/* Added w-full */}
            <Button
              text={"Download Resume"}
              Icon={DownloadIcon}
            />
            <Button
              text={"My Work"}
              Icon={WorkIcon}
            />
            <Button
              text={"Contact Me"}
              Icon={CallIcon}
            />
          </div>
        </div>

        {/* 3D Model Container */}
        <figure>
          <div className="w-full  lg:w-1/2  h-full min-h-[50vh] absolute bottom-0 top-0 right-0 lg:top-auto">
            <HeroModel/>
          </div>
        </figure>
      </div>

      

      <div className="w-full flex justify-center py-4 z-20">
        <p className="text-white">icon</p> 
      </div>

    </section>
  );
};

export default Hero;
