import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




// Navigation links
export const NAV_LINKS = [
  { title: "Home", url: "#hero" },
  { title: "About", url: "#about" },
  { title: "Skills", url: "#skills" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" }
];

// Social links
export const SOCIAL_LINKS = [
  { icon: GitHubIcon, url: "https://github.com/ianmwendwa-byte" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/ian-mwendwa-4227b32bb"},
  { icon: EmailIcon, url: "mailto:ianmwendwa5@gmail.com" }
];

// Site metadata
export const SITE = {
  name: "IAN MWENDWA",
  description: "SOFTWARE ENGINEER",
};

export const HEROS =[
  {content:"I build high-performance, scalable, and resilient full-stack systems."},
  {content:"My approach involves meticulous engineering of every layer,from seamless UIs to robust APIs,ensuring instant responsiveness and unwavering stability."},
  {content:"Expect nothing less than purpose-built, optimized solutions designed for ultimate reliability."}
]



export const MobileHero = [
  {content: "I Build high-performance, scalable full-stack systems"},
  {content: "Engineer seamless UIs and robust APIs for instant responsiveness"},
  {content: "Deliver optimized, reliable solutions with meticulous design"}

];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const services = [
  {
    title: "Frontend Developer",
    icon: "/assets/web.png", 
  },
   {
    title: "Backend Developer",
    icon: "/assets/backend.png", 
  },
  {
    title: "UI/UX Designer",
    icon: "/assets/creator.png", 
  },
  {
    title: "Mobile Developer",
    icon: "/assets/mobile.png", 
  }
];


// skills

export const skills = [
  {
    skillName: "JAVASCRIPT",
    icon: "/assets/javascript.png",
    progressPercentage: 90,
    experienceLevel: "EXPERT",
    yearsOfExperience: "3+ YEARS"
  },
  {
    skillName: "REACTJS",
    icon: "/assets/reactjs.png", 
    progressPercentage: 98,
    experienceLevel: "EXPERT",
    yearsOfExperience: "3+ YEARS"
  },
  {
    skillName: "NODEJS",
    icon: "/assets/nodejs.png", 
    progressPercentage: 80,
    experienceLevel: "EXPERT",
    yearsOfExperience: "2 YEARS"
  },
  {
    skillName: "TAILWIND CSS",
    icon: "/assets/tailwind.png", 
    progressPercentage: 98,
    experienceLevel: "EXPERT",
    yearsOfExperience: "2+ YEARS"
  },

  {
    skillName: "CSS",
    icon: "/assets/css.png", 
    progressPercentage: 98,
    experienceLevel: "EXPERT",
    yearsOfExperience: "4+ YEARS"
  },
   {
    skillName: "SQL",
    icon: "/assets/my-sql.png", 
    progressPercentage: 90,
    experienceLevel: "ADVANCED",
    yearsOfExperience: "3+ YEARS"
  },
  {
    skillName: "MONGODB",
    icon: "/assets/mongodb.png", 
    progressPercentage: 90,
    experienceLevel: "EXPERT",
    yearsOfExperience: "1+ YEARS"
  },
  {
    skillName: "PHP",
    icon: "/assets/php.png",
    progressPercentage: 90,
    experienceLevel: "ADVANCED",
    yearsOfExperience: "3+ YEARS"
  },
  {
    skillName: "REACT NATIVE",
    icon: "/assets/react-native.png",
    progressPercentage: 60,
    experienceLevel: "intermediate",
    yearsOfExperience: "1 YEAR"
  },
  {
    skillName: "NEXT JS",
    icon: "/assets/next-js.png",
    progressPercentage: 70,
    experienceLevel: "INTERMEDIATE",
    yearsOfExperience: "1+ YEARS"
  },
  {
    skillName: "TypeScript",
    icon: "/assets/typescript.png", 
    progressPercentage: 80,
    experienceLevel: "INTERMEDIATE",
    yearsOfExperience: "1 YEAR"
  },
  {
    skillName: "REDUX",
    icon: "/assets/redux.png", 
    progressPercentage: 90,
    experienceLevel: "EXPERT",
    yearsOfExperience: "3+ YEARS"
  },
  {
    skillName: "Three.js",
    icon: "/assets/threejs.svg", 
    progressPercentage: 70,
    experienceLevel: "INTERMEDIATE",
    yearsOfExperience: "1 YEAR"
  },
  
];
//  tools
export const tools = [
  {
    name: "Blender",
    icon: "/assets/tech/Blender.png",
  },
  {
    name: "Cinema 4D",
    icon: "/assets/tech/Cinema4d.png",
  },
  {
    name: "Docker",
    icon: "/assets/tech/docker.png",
  },
  {
    name: "Figma",
    icon: "/assets/tech/figma.png",
  },
  {
    name: "Git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "Illustrator",
    icon: "/assets/tech/Illustrator.png",
  },
  {
    name: "Photoshop",
    icon: "/assets/tech/Photoshop.png",
  },
  {
    name: "Sublime Text",
    icon: "/assets/tech/Simlime Text.png",
  },
  {
    name: "Visual Studio",
    icon: "/assets/tech/Visual Studio.png",
  },
  {
    name: "VS Code",
    icon: "/assets/tech/VSCode.png",
  },
];

// projects
export const projects = [
  {
    imageSrc: "/assets/oral-literature-website.webp", 
    title: "Oral Literature Platform",
    description: "A modern web application designed to showcase and preserve African oral literature. It features a clean, intuitive interface for exploring traditional stories, poems, and folklore from various cultures. The platform is built with a focus on cultural preservation, accessibility, and engaging visual presentation, making rich heritage easily discoverable for a global audience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveSiteLink: "https://oral-literature-website.vercel.app/", 
    githubLink: "https://github.com/ianmwendwa-byte/Oral-literature-website.git" 
  },
  {
    imageSrc: "/assets/peponi-landing-page.webp",
    title: "Peponi School Landing Page",
    description: "The Peponi School Landing Page is a responsive, user-friendly website built with React and Tailwind CSS. It serves as a central hub for staff and pupils, offering seamless access to essential school websites and resources. The modern design ensures accessibility and ease of navigation, catering to the needs of the Peponi School community.",
    technologies: ["React", "Tailwindcss", "React-reveal",],
    liveSiteLink: "https://landingpage-peponi-school-sisy.vercel.app/",
    githubLink: "https://github.com/ianmwendwa-byte/landingpage-peponi-school.git"
  },
  {
    imageSrc: "/assets/school-timetabling-system.webp",
    title: "School Timetabling System",
    description: "The School Timetabling System is a robust fullstack application showcasing expertise in modern web development. Powered by a Node.js/Express.js REST API and a MongoDB/MySQL backend, it delivers scalable, real-time management of school schedules. The responsive React/Tailwind CSS frontend ensures an intuitive, device-agnostic user experience.This system is ideal for schools seeking an automated, user-friendly solution for streamlined timetable management.",
    technologies: ["React", "Tailwind CSS", "Nodejs", "Express.js", "MongoDB", "MaterialUI"],
    liveSiteLink: "https://sts-staff-portal-i3om.vercel.app/",
    githubLink: "https://github.com/ianmwendwa-byte/sts_staff_portal.git"
  },
  
];




