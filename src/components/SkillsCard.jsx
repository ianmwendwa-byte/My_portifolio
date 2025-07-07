import React from 'react';

const SkillsCard = ({ skillName, icon, progressPercentage, experienceLevel, yearsOfExperience }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className='
      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
      rounded-2xl h-60 w-60 flex flex-col p-2 items-center justify-between
    '>
      <div>
        <h1 className='text-text text-xl  mb-4 text-center'>{skillName}</h1> 
        <div className='relative w-32 h-32'>
          <svg className='w-full h-full' viewBox='0 0 100 100'>
            <circle
              cx='50'
              cy='50'
              r={radius}
              fill='none'
              stroke='#333'
              strokeWidth='2'
            />
            <circle
              cx='50'
              cy='50'
              r={radius}
              fill='none'
              stroke='#A1C181'
              strokeWidth='2'
              strokeLinecap='round'
              transform='rotate(-90 50 50)'
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 1s ease-out' }}
            />
          </svg>
          {/* This div now correctly centers its content */}
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <img src={icon} alt={skillName} className='w-12 h-12 object-contain mb-1' />
            
            <div className='w-15 h-[2px] bg-white/50 my-1 rounded-full'></div>
            
            <p className='text-text text-lg font-semibold'>{progressPercentage}%</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between gap-4 bg-white/10 w-full p-2 rounded-md'>
        <p className='text-text text-sm font-medium'>{experienceLevel}</p>
        <p className='text-text text-sm font-medium'>{yearsOfExperience}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
