import React, { useState } from 'react';
import { projects } from '../Constants';
import ProjectsCard from '../components/ProjectsCard';


const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Changed to display 3 cards per page

  const totalPages = Math.ceil(projects.length / cardsPerPage);

  // Calculate the projects to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentProjects = projects.slice(indexOfFirstCard, indexOfLastCard);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle next and previous page
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
      // If total pages are 3 or less, show all of them
      for (let i = 1; i <= totalPages; i++) {
        displayed.push(i);
      }
    } else {
      // Calculate start and end pages for the sliding window
      let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let endPage = Math.min(totalPages, startPage + maxVisible - 1);

      // Adjust startPage if hitting the end boundary
      if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxVisible + 1);
      }
      
      // Populate the displayed array
      for (let i = startPage; i <= endPage; i++) {
        displayed.push(i);
      }
    }
    return displayed;
  };

  const displayedPageNumbers = getDisplayedPageNumbers();
  return (
    <section id='projects' className='bg-conic-0 from-primary to-background w-full p-4 min-h-screen flex flex-col justify-between'>
      <h2 className='text-text text-4xl font-bold text-center p-4'>PROJECTS</h2>

      {/* Projects Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center flex-grow'>
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
      <div className="flex justify-center items-center mt-8 space-x-4">
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
