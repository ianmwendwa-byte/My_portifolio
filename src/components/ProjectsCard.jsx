import React, { useState } from 'react';
import Button from './Button'; 


const ProjectsCard = ({ imageSrc, title, description, technologies, liveSiteLink, githubLink }) => {
  const [showModal, setShowModal] = useState(false);
  const maxDescriptionLength = 100; 

  const truncatedDescription = description.length > maxDescriptionLength
    ? description.substring(0, maxDescriptionLength) + '...'
    : description;

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className='
      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
      rounded-2xl h-auto w-80 flex flex-col p-4 items-center justify-between
    '>
      {/* Image */}
      <div className='w-full h-48 rounded-lg overflow-hidden mb-4'>
        <img
          src={imageSrc}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col items-center text-center flex-grow w-full'>
        <h1 className='text-white text-2xl font-bold mb-2'>{title}</h1>
        
        <p className='text-white text-base text-balance mb-4'>
          {truncatedDescription}
          {description.length > maxDescriptionLength && (
            <button
              onClick={openModal}
              className='text-blue-400 cursor-pointer hover:underline ml-1 focus:outline-none'
            >
              Read More
            </button>
          )}
        </p>
        
        <div className='flex flex-wrap justify-center gap-2 mb-4'>
          {technologies.map((tech, index) => (
            <span key={index} className='bg-primary/20 text-white text-xs font-semibold px-2 py-1 rounded-full'>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-row justify-between gap-4 w-full mt-auto'>
        <Button text={"LIVE SITE"} link={liveSiteLink} />
        <Button text={"GITHUB LINK"} link={githubLink} />
      </div>

      {/* Project Details Modal */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 backdrop-blur-sm'>
          <div className='
            bg-white/15 backdrop-blur-lg border border-white/30 shadow-2xl
            rounded-2xl p-6 w-full max-w-2xl h-full 
            max-h-[90vh] overflow-y-auto
            flex flex-col
          '>
            <div className='flex justify-end'>
              <button
                onClick={closeModal}
                className='text-white text-2xl font-bold focus:outline-none hover:text-gray-300'
              >
                &times; {/* Close icon */}
              </button>
            </div>
            <p className='text-white text-base mb-4'>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
