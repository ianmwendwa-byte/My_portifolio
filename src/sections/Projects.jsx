import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import { projects } from '../Constants'

const Projects = () => {
  return (
    <section id='projects' className='bg-conic-0 from-primary to-background w-full p-4 min-h-screen'>
       <h2 className='text-text text-4xl font-bold text-center p-4'>PROJECTS</h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {projects.map((project, index) => (
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
    </section>
  )
}

export default Projects
