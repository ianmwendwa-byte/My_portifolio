import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




// Navigation links
export const NAV_LINKS = [
  { title: "Home", url: "#hero" },
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" }
];

// Social links
export const SOCIAL_LINKS = [
  { icon: GitHubIcon, url: "https://github.com/ianmwendwa-byte" },
  { icon: LinkedInIcon, url: "https://linkedin.com/in/mwendwaian" },
  { icon: EmailIcon, url: "mailto:ianmwendwa5@gmail.com" }
];

// Site metadata
export const SITE = {
  name: "IAN MWENDWA",
  description: "FULLSTACK DEVELOPER",
};

export const HEROS =[
  {content:"I build high-performance, scalable, and resilient full-stack systems."},
  {content:"My approach involves meticulous engineering of every layer,from seamless UIs to robust APIs,ensuring instant responsiveness and unwavering stability."},
  {content:"Expect nothing less than purpose-built, optimized solutions designed for ultimate reliability."}
]

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
    skillName: "TypeScript",
    icon: "/assets/typescript.png", 
    progressPercentage: 80,
    experienceLevel: "INTERMEDIATE",
    yearsOfExperience: "1 YEAR"
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
    skillName: "TAILWIND CSS",
    icon: "/assets/tailwind.png", 
    progressPercentage: 98,
    experienceLevel: "EXPERT",
    yearsOfExperience: "2+ YEARS"
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
    imageSrc: "/assets/oral-literature-project.png", 
    title: "Oral Literature Platform",
    description: "A modern web application designed to showcase and preserve African oral literature. It features a clean, intuitive interface for exploring traditional stories, poems, and folklore from various cultures. The platform is built with a focus on cultural preservation, accessibility, and engaging visual presentation, making rich heritage easily discoverable for a global audience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveSiteLink: "https://oral-literature-demo.vercel.app", 
    githubLink: "https://github.com/yourusername/oral-literature-repo" 
  },
  {
    imageSrc: "/assets/e-commerce-dashboard.png",
    title: "E-commerce Admin Dashboard",
    description: "A comprehensive administrative dashboard for managing an e-commerce platform. This robust system allows for product management, order tracking, user administration, and sales analytics. It provides a centralized, user-friendly interface for store owners to efficiently oversee their online business operations and make data-driven decisions.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Redux"],
    liveSiteLink: "https://ecommerce-dashboard-demo.netlify.app",
    githubLink: "https://github.com/yourusername/ecommerce-dashboard-repo"
  },
  {
    imageSrc: "/assets/task-manager-app.png",
    title: "Collaborative Task Manager",
    description: "A real-time, collaborative task management application designed for teams. Users can create, assign, and track tasks, set deadlines, and receive notifications. Features include drag-and-drop task reordering, user authentication, and real-time updates across all connected clients, fostering efficient teamwork and project completion.",
    technologies: ["React", "Firebase", "Zustand", "GSAP", "CSS"],
    liveSiteLink: "https://task-manager-app-demo.web.app",
    githubLink: "https://github.com/yourusername/task-manager-repo"
  },
  {
    imageSrc: "/assets/portfolio-website.png",
    title: "Personal Portfolio Website",
    description: "A dynamic and interactive personal portfolio website showcasing full-stack development skills and projects. It features modern UI/UX design, smooth animations powered by GSAP, and responsive layouts for optimal viewing on all devices. The site serves as a professional showcase of capabilities and a platform for client engagement.",
    technologies: ["React", "Tailwind CSS", "GSAP", "Vite"],
    liveSiteLink: "https://your-portfolio-live-link.com",
    githubLink: "https://github.com/yourusername/your-portfolio-repo"
  },
  {
    imageSrc: "/assets/weather-app.png",
    title: "Modern Weather App",
    description: "A sleek and responsive weather application providing real-time weather data, forecasts, and interactive maps. Users can search for locations worldwide and get detailed information including temperature, humidity, wind speed, and precipitation. The app features a clean design and leverages a third-party weather API for accurate data.",
    technologies: ["React", "API Integration", "CSS Modules"],
    liveSiteLink: "https://weather-app-demo.vercel.app",
    githubLink: "https://github.com/yourusername/weather-app-repo"
  }
];




