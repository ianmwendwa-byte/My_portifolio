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
