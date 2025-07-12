import { useRef, useEffect } from 'react';
import { gsap } from 'gsap'; 
import Button from "../components/Button";
import HeroModel from "../components/heromodels/HeroModel";
import Navbar from "../components/Navbar";
import { HEROS, SITE } from "../Constants";
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Hero = () => {
const dotRef = useRef();
const poleRef = useRef();
const heroModelRef = useRef();

  // Headline and bouncing scroll animations
  useEffect(() => {
    // Animate background gradient first
    const bgSection = document.getElementById('hero');
    if (bgSection) {
      gsap.fromTo(bgSection,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          onComplete: () => {
        // Animate pole sliding from top to bottom
        if (poleRef.current) {
          gsap.fromTo(poleRef.current,
            { y: -300, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease: 'bounce.inOut'
            }
          );
        }
        // Animate HeroModel section from right (disable on mobile)
        const isMobile = window.innerWidth < 768;
        if (heroModelRef.current) {
          if (!isMobile) {
            gsap.fromTo(heroModelRef.current,
              { y: -200, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 3,
                ease: 'back.inOut'
              }
            );
          } else {
            heroModelRef.current.style.display = 'none';
          }
        }
            // Wait for fonts to be loaded before running SplitText animation
            document.fonts.ready.then(() => {
              // Animate Navbar
              gsap.fromTo('.hero-navbar',
                { y: -60, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: 'circ.inOut'
                }
              );
              // animate headline from random positions
              const headlineEl = document.querySelector('.headline');
              if (headlineEl) headlineEl.style.opacity = 1;
              const headline = SplitText.create(".headline", {
                type: "chars"
              });
              gsap.fromTo(headline.chars,
                { yPercent: "random(-120, 120)", rotation: "random(-360,360)", autoAlpha: 0 },
                {
                  yPercent: 0,
                  rotation: 0,
                  autoAlpha: 1,
                  stagger: {
                    amount: 0.5,
                    from: "start",
                    ease: "power3.out"
                  }
                }
              );

              // Animate hero paragraphs from left
              gsap.fromTo('.hero-paragraph',
                { x: -40, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  stagger: 0.15,
                  duration: 1,
                  ease: "power4.inOut"
                }
              );

              // Animate hero buttons from left
              gsap.fromTo('.hero-btn',
                { x: -40, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  stagger: 0.5,
                  duration: 1,
                  ease: "power4.inOut"
                }
              );
            });

            // Bouncing scroll animation
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
          }
        }
      );
    }
  }, []);


  return (
    <section id='hero' className="bg-conic-180 from-background to-primary text-text relative min-h-screen flex flex-col">

      {/* Navbar*/}
      <Navbar className="hero-navbar" />

      {/* Headline*/}
      <div className="flex justify-center font-orbitron  text-2xl md:text-3xl lg:text-5xl  mt-15 md:my-10 lg:my-20 z-10 line-clamp-none">
        <h1 className='headline opacity-0'>{SITE.description}</h1> 
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between m-8 flex-grow ">
        {/* Hero Paragraphs and Buttons */}
        <div className="flex flex-col text-center lg:text-left lg:w-1/2 z-10">
        <div className='flex flex-row items-start gap-5'>
          <div className='flex flex-col justify-center items-center opacity-0' ref={poleRef}>
            <div className='w-5 h-5 rounded-full bg-primary' />
            <div
              
              className='w-1 h-24 lg:h-40'
              style={{
                background: 'linear-gradient(to bottom, var(--color-primary), var(--color-text))',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                left: '50%',
                bottom: '-8px',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '12px solid var(--color-text)'
              }} />
            </div>
          </div>
          <div>
            {HEROS.map((Hero, index) => (
              <p
                key={index}
                className="font-roboto text-base sm:text-lg md:text-xl lg:text-2xl text-white text-balance pb-3 hero-paragraph opacity-0"
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
            className="hero-btn opacity-0"
          />
          <Button
            text={"My Work"}
            Icon={WorkIcon}
            className="hero-btn opacity-0"
          />
          <Button
            text={"Contact Me"}
            Icon={CallIcon}
            className="hero-btn opacity-0"
          />
        </div>

        {/* 3D Model Container */}
        <figure>
          <div
            ref={heroModelRef}
            className="w-full lg:w-1/2 h-full min-h-[50vh] absolute bottom-0 top-40 right-0 lg:top-auto opacity-0"
            style={{ display: window.innerWidth < 768 ? 'none' : undefined }}
          >
            {window.innerWidth >= 768 && <HeroModel/>}
          </div>
        </figure>
      </div>

    </div>
    
      <div className='absolute bottom-1 w-full flex justify-center items-center z-30'>
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
