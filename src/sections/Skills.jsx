import React, { useState } from 'react';
import SkillsCard from '../components/SkillsCard';
// Assuming 'skills' from '../Constants' is the correct data source
// and it has the structure: array of objects with skillName, icon, etc.
import { skills, tools } from '../Constants';
import BallCanvas from '../components/canvas/Ball';
import TitleHeader from '../components/TitleHeader';

const Skills = () => {
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

  return (
    <section id='skills' className='bg-conic-60 from-primary to-background w-full p-4 min-h-screen '>
       <div className='mb-2' >
           <TitleHeader
           sub={"My arsenals"}
           title={"SKILLS AND TOOL"}
           />
           </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center flex-grow">
        {currentSkills.map((skill, index) => (
          <SkillsCard
            key={index}
            skillName={skill.skillName}
            icon={skill.icon}
            progressPercentage={skill.progressPercentage}
            experienceLevel={skill.experienceLevel}
            yearsOfExperience={skill.yearsOfExperience}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4 ">
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
        <h2 className='text-center text-2xl p-4'>TOOLS I USE</h2>
     <div className='flex flex-row flex-wrap justify-center gap-10'>
      {tools.map((tool) => (
        <div className='w-20 h-20' key={tool.name}>
          <BallCanvas icon={tool.icon} />
        </div>
      ))}
    </div>
    </div>


    </section>
  );
};

export default Skills;
