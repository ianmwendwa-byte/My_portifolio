import React, { useEffect, useRef } from 'react'
import { services } from '../Constants'
import Services from '../components/Services'
import TitleHeader from '../components/TitleHeader'
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const imgRef = useRef();
  const headlineRef = useRef();
  const paragraphRef = useRef();
  const gradientProps = useRef({ angle: 180 });

  useEffect(() => {
    if (aboutRef.current) {
      // Animate gradient background on scroll
      const updateGradient = () => {
        aboutRef.current.style.backgroundImage = `conic-gradient(from ${gradientProps.current.angle}deg at center, var(--color-primary), var(--color-background))`;
      };
      // Set initial gradient
      updateGradient();
      let splitHeadline = null;
      ScrollTrigger.create({
        trigger: '#about',
        start: 'top center',
        onEnter: () => {
          gsap.to(gradientProps.current, {
            angle: 120,
            duration:2,
            ease: 'power2.out',
            onUpdate: updateGradient
          });
          if (headlineRef.current) {
            // Clean up previous SplitText instance if exists
            if (splitHeadline) {
              splitHeadline.revert();
            }
            splitHeadline = SplitText.create(headlineRef.current, { type: 'chars' });
            gsap.fromTo(splitHeadline.chars,
              { yPercent: "random(-120, 120)", rotation: "random(-360,360)", autoAlpha: 0 },
              {
                yPercent: 0,
                rotation: 0,
                autoAlpha: 1,
                stagger: { amount: 0.5, from: "start", ease: "power3.out" }
              }
            );
          }
          if (imgRef.current) {
            gsap.fromTo(imgRef.current,
              { x: -80, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
            );
          }
          if (paragraphRef.current) {
            gsap.fromTo(paragraphRef.current,
              { x: 80, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
            );
          }
          gsap.fromTo('.about-service-card',
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 1,
              ease: 'power4.inOut',
              delay: 0.5
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(gradientProps.current, {
            angle: 180,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: updateGradient
          });
          // Revert SplitText and reset headline so animation can replay and prevent memory leak
          if (splitHeadline) {
            splitHeadline.revert();
            splitHeadline = null;
          }
          gsap.to([imgRef.current, paragraphRef.current, '.about-service-card'], {
            opacity: 0,
            duration: 0.5,
            overwrite: 'auto'
          });
        }
      });
    }
  }, []);

  return (
    <section id='about' className='bg-conic-120 from-primary  to-background w-full lg:h-screen p-4' ref={aboutRef}>
      <div>
        <div className='mb-2' >
          <TitleHeader
            sub={"Know your Developer"}
            title={"ABOUT ME"}
            headlineRef={headlineRef}
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-6 items-center sm:w-full lg:max-w-4xl mx-auto' > 
          <div className='flex justify-center'>
            <img
              ref={imgRef}
              src='./img/my-profile.webp'
              alt='my profile'
              className='rounded-b-full border object-cover aspect-square w-40 h-40 sm:w-56 sm:h-56 lg:w-50 lg:h-50 max-w-xs lg:max-w-none mx-auto'
            />
          </div>
          <p ref={paragraphRef} className='text-balance text-base md:text-xl text-justify p-2'>
            I'm Ian Mwendwa, a Fullstack Developer who thrives on solving problems through code to deliver simple, 
            efficient, and impactful digital products. My Computer Science foundation enables a holistic approach to development,
            encompassing everything from robust backend logic to intuitive frontend design. I believe in creating seamless, 
            scalable systems that prioritize user experience and drive real value, 
            constantly exploring new technologies and UI/UX trends to sharpen my craft.
          </p>
        </div>
      </div>
      <div className='mt-20 flex flex-row justify-evenly flex-wrap gap-10'>
        {services.map((service, index) => (
          <div key={service.title} className='about-service-card'>
            <Services index={index} {...service} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
