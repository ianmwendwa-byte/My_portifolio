import React from 'react'
import { services } from '../Constants'
import Services from '../components/Services'


const About = () => {
  return (
    <section id='about' className='bg-conic-120 from-primary  to-background w-full lg:h-screen p-4'>
      <div>
           <h1 className='font-bold text-center text-4xl  p-4'>ABOUT ME</h1>
           <div className='flex flex-col lg:flex-row gap-6 items-center sm:w-full lg:max-w-4xl mx-auto' > 
            <div className='flex justify-center'>
              <img src='./img/my-profile.webp' alt='my profile' className='rounded-b-full border  object-cover '/>
            </div>
        
            <p className='text-balance text-base md:text-xl'>
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
          <Services key={service.title} index={index} {...service} />
        ))}
      </div>
   
      
    </section>
  )
}

export default About
