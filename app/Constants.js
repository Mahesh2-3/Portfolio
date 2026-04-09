import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const TECH = [
  { name: "HTML", color: "#e34c26", src: "/tech/html.png" },
  { name: "CSS", color: "#264de4", src: "/tech/css.png" },
  { name: "TAILWINDCSS", color: "#00afcd", src: "/tech/tailwind.png" },
  { name: "JAVASCRIPT", color: "#f7df1e", src: "/tech/javascript.png" },
  { name: "REACT", color: "#61dafb", src: "/tech/reactjs.png" },
  { name: "NEXTJS", color: "#7d8591", src: "/tech/nextjs.png" },
  { name: "NODEJS", color: "#8CC84B", src: "/tech/nodejs.png" },
  { name: "EXPRESSJS", color: "#c9c9c9", src: "/tech/express.png" },
  { name: "MONGODB", color: "#81c784", src: "/tech/mongodb.png" },
  { name: "FIREBASE", color: "#ffcc37", src: "/tech/firebase.png" },
  { name: "GITHUB", color: "#7d8591", src: "/tech/github.png" },
];

export const navLinks = [
  { name: "ABOUT ME", src: "#about-me" },
  { name: "SKILLS", src: "#skills" },
  { name: "PROJECTS", src: "#projects" },
  { name: "EXPERIENCE", src: "#experience" },
  { name: "GET IN TOUCH", src: "#get-in-touch" },
];

export const SocialLinks = [
  {
    name: "LinkedIn",
    src: "https://www.linkedin.com/in/karna-mahesh-babu",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    name: "Github",
    src: "https://github.com/Mahesh2-3",
    icon: FaGithub,
    color: "#fff",
  },
];

export const projects = [
  {
    title: "Cura Ai",
    isGold: true,
    link: "https://cura-ai-32.vercel.app",
    desc: "Cura AI is an intelligent, AI-powered health companion built to deliver deeply personalized and context-aware wellness support. Unlike traditional chatbots, Cura AI adapts its responses based on a user’s health history, tracked conditions, and prior conversations creating a truly dynamic and human-like interaction experience.The platform provides structured weekly, monthly, and overall health analyses, transforming raw health data into meaningful insights through interactive visual graphs and trend monitoring. Users can add and track specific diseases individually and receive AI-driven recommendations to better understand their progress over time.Cura AI also features secure profile management and location-based hospital discovery, allowing users to quickly find nearby care facilities when needed. Powered by Firebase for authentication and real-time data handling, the application ensures both responsiveness and data integrity.",
    github: "https://github.com/Mahesh2-3/CuraAi-web",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1772440970/fc44vivg5x6qyc1hmfee.png",
    tech: {
      frontend: {
        framework: ["react", "react-dom", "react-router-dom"],
        uiLibraries: [
          "lucide-react",
          "sonner",
          "chart.js",
          "react-chartjs-2",
          "react-markdown",
          "remark-gfm",
        ],
        styling: [
          "tailwindcss",
          "@tailwindcss/typography",
          "tailwind-merge",
          "clsx",
          "postcss",
          "autoprefixer",
        ],
        baas: ["firebase"],
      },
      backend: {
        framework: ["express"],
        database: ["firebase-admin"],
        fileHandling: ["cloudinary"],
        email: ["nodemailer"],
        security: ["cors", "dotenv", "express-rate-limit"],
        httpRequests: ["axios"],
        utilities: ["crypto"],
      },
      devTools: {
        frontend: ["vite", "@vitejs/plugin-react"],
        eslint: [
          "eslint",
          "@eslint/js",
          "eslint-plugin-react-hooks",
          "eslint-plugin-react-refresh",
          "globals",
        ],
        typescriptSupport: ["typescript", "@types/react", "@types/react-dom"],
        backendRunners: ["nodemon"],
      },
    },
  },

  {
    title: "Free PortfolioTemplates",
    isGold: true,
    link: "https://mahesh-templates.vercel.app",
    desc: "I have created a platform where you can get free portfolio websites for your need just follow the instructions mentions in the website and you can get your own website. and why? i created this platform because many people need the porfolios and they can't afford the paid ones. so i thought to create a platform where they can get free portfolio websites.",
    github: "https://github.com/Mahesh2-3?tab=repositories",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1771554113/tp60rwvebqyjl43i6lbq.png",
    tech: {
      frontend: {
        framework: ["next", "react", "react-dom"],
        uiLibraries: ["react-icons", "react-hot-toast"],
        styling: ["tailwindcss", "@tailwindcss/postcss"],
        animations: ["framer-motion", "gsap", "@gsap/react"],
      },
      devTools: {
        eslint: ["eslint", "eslint-config-next", "@eslint/eslintrc"],
      },
    },
  },
  {
    title: "Task-Manager 2.0",
    isGold: true,
    link: "https://todo2-0new.vercel.app/",
    desc: "I developed a full stack Task Managing platform.This is the latest version of our Task Manager, designed to help you stay organized. You can manage tasks, schedule activities, and maintain a diary all in one place.This application maintains user streak and his progress. Here you can see the dashboard with graph and calendar heat map view. The platform is secured with a reliable login system, and you can report issues for quick support.This platform is built with the latest technologies and it is fully responsive.",
    github: "https://github.com/Mahesh2-3/Todo2.0",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1756482687/blog_images/jxxfqgs6zpanyobujvke.png",
    tech: {
      frontend: {
        framework: ["next", "react", "react-dom", "react-router-dom"],
        uiLibraries: [
          "@mui/material",
          "react-icons",
          "react-responsive",
          "react-toastify",
          "react-circular-menu",
          "react-circular-progressbar",
          "react-datepicker",
        ],
        styling: ["tailwindcss", "@tailwindcss/vite"],
        formHandling: ["react-hook-form"],
        animations: ["framer-motion"],
        "3dGraphics": ["three", "@react-three/fiber"],
        httpRequests: ["axios", "node-fetch"],
      },
      backend: {
        database: ["mongoose"],
        authentication: ["jsonwebtoken", "bcryptjs"],
        email: ["emailjs-com"],
      },
      devTools: {
        buildTools: ["vite", "@vitejs/plugin-react"],
        linting: [
          "eslint",
          "eslint-config-next",
          "@eslint/js",
          "@eslint/eslintrc",
          "eslint-plugin-react-hooks",
          "eslint-plugin-react-refresh",
          "globals",
        ],
        stylingTools: ["tailwind", "@tailwindcss/postcss"],
        typescriptSupport: ["@types/react", "@types/react-dom"],
      },
    },
  },
  {
    title: "Bloggin'",
    isGold: false,
    link: "https://bloggin32.vercel.app",
    desc: "Bloggin' is a modern, feature-rich platform that empowers users to create, share, and explore stories. Whether publishing journals, insightful articles, or creative content, Bloggin’ provides a seamless and engaging experience. With secure authentication, a sleek UI, and community features, Bloggin’ ensures your voice reaches the right audience while keeping accounts safe.",
    github: "https://github.com/Mahesh2-3/Bloggin",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1756482751/blog_images/jebazhqggakufz1ot0ev.png",
    tech: {
      frontend: {
        framework: ["react", "react-dom", "react-router-dom"],
        stateManagement: ["@reduxjs/toolkit", "react-redux"],
        uiLibraries: [
          "@mui/material",
          "@heroicons/react",
          "lucide-react",
          "react-icons",
        ],
        styling: [
          "tailwindcss",
          "@tailwindcss/typography",
          "@tailwindcss/vite",
          "@emotion/react",
          "@emotion/styled",
        ],
        formHandling: ["react-hook-form", "react-quill"],
        animations: ["gsap", "gasp", "ogl"],
        httpRequests: ["axios"],
      },
      backend: {
        framework: ["express"],
        authentication: [
          "jsonwebtoken",
          "passport",
          "passport-google-oauth20",
          "bcrypt",
          "bcryptjs",
          "express-session",
          "cookie-parser",
        ],
        database: [
          "mongoose",
          "@prisma/client",
          "sequelize",
          "pg",
          "pg-hstore",
        ],
        fileHandling: ["multer", "cloudinary"],
        email: ["nodemailer"],
        security: ["cors", "dotenv"],
      },
      devTools: {
        frontend: ["vite", "@vitejs/plugin-react"],
        eslint: [
          "eslint",
          "@eslint/js",
          "eslint-plugin-react-hooks",
          "eslint-plugin-react-refresh",
          "globals",
        ],
        typescriptSupport: ["@types/react", "@types/react-dom"],
        ormTools: ["prisma"],
      },
    },
  },
  {
    title: "AOT - Game",
    isGold: false,
    link: "https://aot-game32.vercel.app",
    desc: "An Advanced JavaScript-based fan game inspired by the Attack on Titan anime, where you can shoot enemies with a cannonball to protect your base. The game features multiple difficulty modes, score tracking, pause and exit controls, and ends when an enemy successfully breaches your border.",
    github: "https://github.com/Mahesh2-3/AOT-Game",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1756482773/blog_images/dulw9jh2wxmbvfzyoumt.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const Experiences = [
  {
    role: "Frontend Developer - Intern",
    company: "Digital Guruji",
    img: "/digitalGuruji.png",
    duration: "MAY 2025 - OCT 2025",
    points: [
      "Developed and maintained code for in-house and client websites using HTML, CSS, and JavaScript.",
      "Built responsive and visually appealing user interfaces.",
      "Created coding tools such as a CSS Clip-Path Generator, Glassmorphism Generator, and JavaScript Obfuscator.",
      "Improved tools iteratively based on user testing.",
      "Handled entire frontend architecture and code quality.",
    ],
  },
];

export const HERO_CONTENT = {
  name: "MAHESH",
  role: "FULL STACK WEB DEVELOPER",
  resumeLink: "/resume.pdf",
  resumeText: "Resume",
};

export const ABOUT_CONTENT = {
  heading: "About Me",
  description:
    "HI there, I'm MAHESH, I'm a skilled Full Stack Developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and I love building cool projects, Currently i am trying to expand my knowledge in AI and ML. Let's work together to bring your ideas to life!",
  roles: {
    frontend: "FRONTEND DEVELOPER",
    backend: "BACKEND DEVELOPER",
  },
};

export const SKILLS_CONTENT = {
  heading: "Skills",
};

export const CONTACT_CONTENT = {
  heading: "Get In Touch",
  formTitle: "Contact Me",
  placeholders: {
    name: "Your Good Name",
    email: "Your Email",
    message: "Your Message",
  },
  validation: {
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailPattern: "Enter a valid email",
    messageRequired: "Message is required",
  },
  btnDefault: "Send Message",
  btnSending: "Sending...",
  btnSent: "Sent",
  alerts: {
    success: "✅ Thank you! I’ll get back to you as soon as possible.",
    error: "❌ Something went wrong. Please try again.",
  },
};

export const PROJECTS_CONTENT = {
  heading: "Projects",
  subHeading: "My Work",
  description:
    "Following projects showcase my skills and experience through real-world examples of my work. \n Click on the projects to view the full description.",
  liveText: "Live",
  techUsedBtn: "Tech Used →",
  techModalTitle: "Technologies Used",
};

export const EXPERIENCE_CONTENT = {
  heading: "Experience",
  subHeading: "What i have done so far",
};

export const CERTIFICATES = [
  {
    title: "Full Stack Intern - Certificate",
    source: "Digital Guruji Company",
    link: "https://res.cloudinary.com/dhiluevpk/image/upload/v1775730400/xo1tphb4q8b4ajzv0sjw.png",
  },
  {
    title: "Responsive Web Design - Certificate",
    source: "FreeCodeCamp.org",
    link: "https://res.cloudinary.com/dhiluevpk/image/upload/v1775730417/vasdkjqaowmvtolu7087.png",
  },
  {
    title: "Backend Development & API's - Certificate",
    source: "FreeCodeCamp.org",
    link: "https://res.cloudinary.com/dhiluevpk/image/upload/v1775730431/ukx7odtjenytwrcrvndg.png",
  },
  {
    title: "JavaScript Algorithms & Data Structures - Certificate",
    source: "FreeCodeCamp.org",
    link: "https://res.cloudinary.com/dhiluevpk/image/upload/v1775730410/t61midbfhzupublyissu.png",
  },
  {
    title: "Java Basic",
    source: "HackerRank",
    link: "https://res.cloudinary.com/dhiluevpk/image/upload/v1775730425/l9vcaljx9opnmy2odmph.png",
  },
];
