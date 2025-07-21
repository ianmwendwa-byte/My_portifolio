import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText, ScrollTrigger);
import SkillsCard from '../components/SkillsCard';
import { skills, tools,} from '../Constants';
import TitleHeader from '../components/TitleHeader';
import Tools from '../components/canvas/Tools';

const Skills = () => {
  const sectionRef = useRef();
  const headlineRef = useRef();
  const toolsHeadlineRef = useRef();
  const paginationRef = useRef();
  const gradientProps = useRef({ angle: 120 });
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const totalPages = Math.ceil(skills.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentSkills = skills.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Logic to determine which page numbers to display
  const getDisplayedPageNumbers = () => {
    const displayed = [];
    const maxVisible = 3; // Max 3 page numbers visible at a time

    if (totalPages <= maxVisible) {
      // If total pages are 3 or less, show all of them
      for (let i = 1; i <= totalPages; i++) {
        displayed.push(i);
      }
    } else {
      // If more than 3 pages, implement sliding window
      if (currentPage === 1) {
        displayed.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        displayed.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Current page is in the middle
        displayed.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return displayed;
  };

  const displayedPageNumbers = getDisplayedPageNumbers();

  useEffect(() => {
    if (!sectionRef.current) return;
    // Animate gradient background on scroll
    const updateGradient = () => {
      sectionRef.current.style.backgroundImage = `conic-gradient(from ${gradientProps.current.angle}deg at center, var(--color-primary), var(--color-background))`;
    };
    // Set initial gradient
    updateGradient();
    let splitHeadline = null;
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      onEnter: () => {
        // Animate gradient angle
        gsap.to(gradientProps.current, {
          angle: 60,
          duration: 2,
          ease: 'power2.out',
          onUpdate: updateGradient
        });
        // Animate headline
        if (headlineRef.current) {
          if (splitHeadline) splitHeadline.revert();
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
        // Animate skill cards from right
        gsap.fromTo('.skills-card',
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
        // Animate tool icons
        gsap.fromTo('.tool-ball',
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.5
          }
        );
        // Animate tools headline
        if (toolsHeadlineRef.current) {
          gsap.fromTo(toolsHeadlineRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.7 }
          );
        }
        // Animate pagination controls
        if (paginationRef.current) {
          gsap.fromTo(paginationRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.8 }
          );
        }
      },
      onLeaveBack: () => {

        gsap.to(gradientProps.current, {
          angle: 120,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: updateGradient
        });
        // Revert headline
        if (splitHeadline) {
          splitHeadline.revert();
          splitHeadline = null;
        }
        // Hide skill cards
        gsap.to('.skills-card', {
          opacity: 0,
          y: 40,
          duration: 0.5,
          overwrite: 'auto'
        });
        // Hide tool icons
        gsap.to('.tool-ball', {
          scale: 0.7,
          opacity: 0,
          duration: 0.5,
          overwrite: 'auto'
        });
        // Hide tools headline
        if (toolsHeadlineRef.current) {
          gsap.to(toolsHeadlineRef.current,
            { y: 40, opacity: 0, duration: 0.5, ease: 'power2.inOut' }
          );
        }
        // Hide pagination controls
        if (paginationRef.current) {
          gsap.to(paginationRef.current,
            { y: 40, opacity: 0, duration: 0.5, ease: 'power2.inOut' }
          );
        }
      }
    });
  }, []);

  return (
    <section id='skills' className='bg-conic-60 from-primary to-background w-full p-4 min-h-screen ' ref={sectionRef}>
      <div className='mb-2'>
        <TitleHeader
          sub={"My arsenals"}
          title={"SKILLS AND TOOL"}
          headlineRef={headlineRef}
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center flex-grow mt-8">
        {currentSkills.map((skill, index) => (

          <SkillsCard
            key={index}
            skillName={skill.skillName}
            icon={skill.icon}
            progressPercentage={skill.progressPercentage}
            experienceLevel={skill.experienceLevel}
            yearsOfExperience={skill.yearsOfExperience}
            className="skills-card"
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4 " ref={paginationRef}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`
            px-4 py-2 rounded-lg font-semibold
            ${currentPage === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-primary/25 text-text hover:bg-primary'}
            transition-colors duration-200
          `}
        >
          Previous
        </button>

        {/* Dynamic Page Numbers */}
        <div className="flex space-x-2">
          {displayedPageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`
                px-3 py-1 rounded-full text-sm font-medium
                ${
                  currentPage === pageNumber
                    ? 'bg-white/10 backdrop-blur-md border border-primary/50 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md border border-primary/50 text-text hover:bg-primary' // Default for inactive
                }
                transition-all duration-200
              `}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`
            px-4 py-2 rounded-lg font-semibold
            ${currentPage === totalPages ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-primary/20 text-white hover:bg-primary'}
            transition-colors duration-200
          `}
        >
          Next
        </button>
      </div>
      <div>
        <h2 ref={toolsHeadlineRef} className='text-center text-2xl p-4'>TOOLS I USE</h2>
        <div className="flex justify-center items-center w-full my-8">
          <div className=" w-full lg:w-1/2 tool-ball">
            <Tools icons={tools.map(tool => tool.icon)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
