import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'; 
import Button from "../components/Button";
import HeroModel from "../components/heromodels/HeroModel";
import Navbar from "../components/Navbar";
import { HEROS, SITE } from "../Constants";
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

const Hero = () => {
const dotRef = useRef();

// Aniamtion of bouncing scroll
  useEffect(() => {
    if (dotRef.current) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: {
          duration: 1,
          ease: "bounce", 
        }
      });

      
      tl.to(dotRef.current, {
        y: 24,
      });

      return () => {
        tl.kill(); 
      };
    }
  }, []);


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
        <div className='flex flex-row items-start gap-5'>

           <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-primary' />
          <div className='w-1 h-30 lg:h-50 bg-linear-to-b from-primary to-text' />
        </div>
          <div>
          {HEROS.map((Hero, index) => (
            <p
              key={index}
              className="font-roboto text-base sm:text-lg md:text-xl lg:text-2xl text-white text-balance pb-3"
            >
              {Hero.content}
            </p>
          ))}
          </div>
          </div>
          {/* Buttons Div */}
          <div className="mt-4 lg:mt-10 flex justify-center gap-4 w-full lg:justify-between lg:pr-4">
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

      

      <div className='absolute bottom-1 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px]  h-[64px] rounded-3xl border-2 border-text flex justify-center items-start p-2'>
          <div
            ref={dotRef}
            className='w-3 h-3 rounded-full bg-text mb-1'
          />
        </div>
      </a>
    </div>

    </section>
  );
};

export default Hero;
