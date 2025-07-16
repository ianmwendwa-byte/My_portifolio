import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../Constants';
import ProjectsCard from '../components/ProjectsCard';
import TitleHeader from '../components/TitleHeader';

 gsap.registerPlugin(SplitText, ScrollTrigger);
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentProjects = projects.slice(indexOfFirstCard, indexOfLastCard);
  const sectionRef = useRef();
  const headlineRef = useRef();
  const paginationRef = useRef();
  const gradientProps = useRef({ angle: 60 });

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
  // Optimized Logic to determine which page numbers to display (max 3 visible)
  const getDisplayedPageNumbers = () => {
    const displayed = [];
    const maxVisible = 3;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        displayed.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let endPage = Math.min(totalPages, startPage + maxVisible - 1);
      if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxVisible + 1);
      }
      for (let i = startPage; i <= endPage; i++) {
        displayed.push(i);
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
    updateGradient();
    let splitHeadline = null;
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      onEnter: () => {
        gsap.to(gradientProps.current, {
          angle: 0,
          duration: 2,
          ease: 'power2.out',
          onUpdate: updateGradient,
          onComplete: () => {
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
            // Animate project cards
            gsap.fromTo('.projects-card',
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 2,
                ease: 'power4.inOut',
                delay: 0.2
              }
            );
            // Animate pagination controls
            if (paginationRef.current) {
              gsap.fromTo(paginationRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
              );
            }
          }
        });
      },
      onLeaveBack: () => {
        gsap.to(gradientProps.current, {
          angle: 60,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: updateGradient
        });
        // Revert headline
        if (splitHeadline) {
          splitHeadline.revert();
          splitHeadline = null;
        }
        // Hide project cards
        gsap.to('.projects-card', {
          opacity: 0,
          y: 40,
          duration: 0.5,
          overwrite: 'auto'
        });
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
    <section id='projects' className='bg-conic-0 from-primary to-background w-full p-4 min-h-screen flex flex-col justify-between' ref={sectionRef}>
      <div className='mb-2'>
        <TitleHeader
          sub={"Selected work"}
          title={"PROJECTS"}
          headlineRef={headlineRef}
        />
      </div>

      {/* Projects Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center flex-grow projects-card'>
        {currentProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveSiteLink={project.liveSiteLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4" ref={paginationRef}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`
            px-4 py-2 rounded-lg font-semibold
            ${currentPage === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-primary/25 text-white hover:bg-primary'}
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
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
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
    </section>
  );
};

export default Projects;
