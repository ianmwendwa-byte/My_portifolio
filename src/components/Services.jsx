import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Services = ({ index, title, icon }) => {
  const cardRef = useRef();
  const innerCardRef = useRef();

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { x: 100, opacity: 0 }, 
        {
          x: 0,
          opacity: 1, 
          ease: "back.out(1.7)",
          duration: 1,
          delay: index * 0.5,
        }
      );
    }

    return () => {
      gsap.killTweensOf(cardRef.current);
    };
  }, [index]);

  const handlePointerMove = (e) => {
    if (!innerCardRef.current) return;

    const card = innerCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const rotateX = (y / rect.height) * 45;
    const rotateY = -(x / rect.width) * 45;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = () => {
    if (!innerCardRef.current) return;

    gsap.to(innerCardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={cardRef}
      className='p-1 rounded-2xl'
    >
      <div
        ref={innerCardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className='
          rounded-2xl py-5 px-12 min-h-60
          flex justify-evenly items-center flex-col
          relative z-10 transform-gpu

          bg-white/10
          backdrop-blur-md
          border border-white/20
          shadow-lg
        '
        style={{ perspective: '1000px' }}
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-xl font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Services;
