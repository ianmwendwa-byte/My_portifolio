import { useRef, useEffect } from 'react';
import { gsap } from 'gsap'; 
import Button from "../components/Button";
import HeroModel from "../components/heromodels/HeroModel";
import { HEROS, MobileHero, SITE } from "../Constants";
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
const dotRef = useRef();
const poleRef = useRef();
const heroModelRef = useRef();
const heroRef = useRef();

 
  useEffect(() => {
    // Animate background gradient rotation from 540deg to 180deg on load
    if (heroRef.current) {
      // Set initial gradient before animation
      const initialAngle = 540;
      const fromColor = getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim() || '#000000';
      const toColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#3A5E1B';
      heroRef.current.style.backgroundImage = `conic-gradient(from ${initialAngle}deg at center, ${fromColor}, ${toColor})`;

      // Animate gradient
      const gradientProps = {
        angle: initialAngle,
        fromColor,
        toColor
      };
      const updateGradient = () => {
        heroRef.current.style.backgroundImage = `conic-gradient(from ${gradientProps.angle}deg at center, ${fromColor}, ${toColor})`;
      };
      gsap.to(gradientProps, {
        angle: 180, // Animate to 180deg
        duration: 2,
        ease: 'power2.out',
        onUpdate: updateGradient,
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
        // Only animate 3D model on non-mobile devices
        const isMobile = window.innerWidth < 768;
        if (heroModelRef.current && !isMobile) {
            gsap.fromTo(heroModelRef.current,
              {  opacity: 0 },
              {
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              }
            );
        } else if (heroModelRef.current && isMobile) {
            // Instantly show model on mobile, no animation
            heroModelRef.current.style.opacity = 1;
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

            // Fade in dotRef container
            if (dotRef.current) {
              gsap.to(dotRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' });
              // Bouncing scroll animation
              const tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                defaults: {
                  duration: 1,
                  ease: "bounce",
                }
              });
              tl.to(dotRef.current.querySelector('.w-3'), {
                y: 24,
              });
            }
          }
        }
      );

      // Animate gradient angle and wipe hero contents on scroll to about section
      ScrollTrigger.create({
        trigger: '#about',
        start: 'top center',
        onEnter: () => {
          // Wipe hero contents as gradient rotates
          gsap.to(gradientProps, {
            angle: 120,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: updateGradient
          });
          // Fancy exit: fade out, scale down, blur, and rotate hero contents
          gsap.to(heroRef.current.children, {
            opacity: 0,
            duration: 2,
            stagger: 0.12,
            ease: 'power4.inOut'
          });
        
        },
        onLeaveBack: () => {
          // Animate gradient back
          gsap.to(gradientProps, {
            angle: 180,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: updateGradient
          });
          // Fancy entrance: fade in, scale up, unblur, and rotate back hero contents
          gsap.to(heroRef.current.children, {
            opacity: 1,
            duration: 2,
            stagger: 0.12,
            ease: 'power4.inOut'
          });
        }
      });
    }
  }, []);


  return (
    <section id='hero' className="bg-conic-180 from-background to-primary text-text relative h-svh lg:min-h-screen flex flex-col" ref={heroRef}>

      {/* Headline*/}
      <div className="flex justify-center font-orbitron text-2xl md:text-3xl lg:text-5xl  mt-30 md:my-10 lg:my-20 z-10 line-clamp-none">
        <h1 className='headline opacity-0'>{SITE.description}</h1> 
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between m-8 flex-grow ">
        {/* Hero Paragraphs and Buttons */}
        <div className="flex flex-col text-wrap lg:text-left lg:w-1/2 z-10">
        <div className='flex flex-row items-start gap-3 md:gap-5'>
          <div className='flex flex-col justify-center items-center opacity-0' ref={poleRef}>
            <div className='w-5 h-5 rounded-full bg-primary' />
            <div
              
              className='w-1 h-30 lg:h-40'
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
  {/* Mobile and tablets */}

  <div>
    {/* Mobile only */}
    <div className="block sm:hidden">
      {MobileHero.map((Hero, index) => (
        <p
          key={index}
          className="font-roboto text-base text-text text-balance pb-3 hero-paragraph opacity-0"
        >
          {Hero.content}
        </p>
      ))}
    </div>
    {/* Tablet and up */}
    <div className="hidden sm:block">
      {HEROS.map((Hero, index) => (
        <p
          key={index}
          className="font-roboto text-lg md:text-xl lg:text-2xl text-text text-balance pb-3 hero-paragraph opacity-0"
        >
          {Hero.content}
        </p>
      ))}
    </div>
  </div>
</div>
        </div>
        {/* Buttons Div */}
        <div className="mt-4 lg:mt-10 flex justify-center gap-4 w-full lg:justify-between lg:pr-4 z-30">
          <Button
            text={"My Resume"}
            Icon={DownloadIcon}
            className="hero-btn opacity-0"
            link={"/assets/ian-mwendwa.pdf"}
          />
          <Button
            text={"Projects"}
            Icon={WorkIcon}
            className="hero-btn opacity-0"
            link={"#projects"}
          />
          <Button
            text={"Hire Me"}
            Icon={CallIcon}
            link={"#contact"}
            className="hero-btn opacity-0"
          />
        </div>

        {/* 3D Model Container */}
        <figure>
          <div
            ref={heroModelRef}
            className="w-full lg:w-1/2 h-full min-h-[50vh] absolute bottom-0 top-40 right-0 lg:top-auto opacity-0"
          >
           <HeroModel/>
          </div>
        </figure>
      </div>

    </div>
    
      <div className='absolute bottom-1 w-full flex justify-center items-center z-30 opacity-0'  ref={dotRef}>
        <a href='#about'>
          <div className='w-[35px]  h-[64px] rounded-3xl border-2 border-text flex justify-center items-start p-2'>
            <div
              className='w-3 h-3 rounded-full bg-text mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
