import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const TECH = [
  { name: "CSS", color: "#264de4", src: "/tech/css.png" },
  { name: "HTML", color: "#e34c26", src: "/tech/html.png" },
  { name: "JAVASCRIPT", color: "#f7df1e", src: "/tech/javascript.png" },
  { name: "REACT", color: "#61dafb", src: "/tech/reactjs.png" },
  { name: "NEXTJS", color: "#7d8591", src: "/tech/nextjs.png" },
  { name: "NODEJS", color: "#8CC84B", src: "/tech/nodejs.png" },
  { name: "EXPRESSJS", color: "#c9c9c9", src: "/tech/express.png" },
  { name: "TAILWINDCSS", color: "#00afcd", src: "/tech/tailwind.png" },
  { name: "MONGODB", color: "#81c784", src: "/tech/mongodb.png" },
  { name: "GITHUB", color: "#7d8591", src: "/tech/github.png" },
];

export const navLinks = [
  { name: "ABOUT ME", src: "#about-me" },
  { name: "SKILLS", src: "#skills" },
  { name: "PROJECTS", src: "#projects" },
  { name: "EXPERIENCE", src: "#experience" },
  { name: "GET IN TOUCH", src: "#get-in-touch" },
];

export const Templates = ["template1", "template2", "template3"];

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

export const StepsToProceed = [
  "Pick the template you like by previewing the templates.",
  "Scroll down and select that template.",
  "Enter the necessary data for your portfolio.",
  "Before Paying, First read Faq's down below ↓",
  "Pay the required amount to place an order.",
  "Within five days, you will receive the website link through your email.",
];

export const requiredData = {
  template1: [
    "hero.name",
    "hero.quote",
    "hero.role",
    "hero.currentlyWorking",
    "hero.about",
    "works",
    "skills",
    "projects",
    "contact.line",
    "contact.email",
    "contact.links",
  ],
  template2: [
    "hero.profile", // if exists
    "hero.name",
    "hero.role",
    "hero.about",
    "works",
    "skills",
    "projects",
    "contact.line",
    "contact.email",
    "contact.links",
  ],
  template3: [
    "hero.currentlyWorking",
    "hero.name",
    "hero.role",
    "hero.about",
    "works",
    "skills",
    "projects",
    "contact.line",
    "contact.email",
    "contact.links",
  ],
};

export const FAQs = [
  {
    q: "How do I get the website?",
    a: "You will get the website link through your email after placing an order.",
  },
  {
    q: "Duration of receiving the order?",
    a: "You will receive the order within 5 days after placing an order.",
  },
  {
    q: "Can I customize templates?",
    a: "Yes! You can tell your customizations in the suggestion box in the above form.",
  },
  {
    q: "How do I choose between templates?",
    a: "Just click the template you like in the form.",
  },
  {
    q: "How can I request a refund after placing an order?",
    a: "You can go to your orders and cancel within 24 hours of placing it.",
  },
  {
    q: "Can I add unlimited skills and projects?",
    a: "Adding too many is not professional and also increases the website's load, which can make it slower. We recommend about 20 skills and 5 projects.",
  },
  {
    q: "Why do we have to pay?",
    a: "To avoid misuse and unnecessary orders, ensuring that the service remains reliable, high-quality, and available for those who genuinely need it.",
  },
];

export const projects = [
  {
    title: "Bloggin'",
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
    title: "Free Templates",
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
    title: "Todo2.0",
    link: "https://todo2-0new.vercel.app/",
    desc: "This is the latest version of our To-Do platform, designed to help you stay organized. You can manage tasks, schedule activities, and maintain a diary — all in one place. The platform is secured with a reliable login system, and you can report issues for quick support.",
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
    title: "AOT - Game",
    link: "https://aot-game32.vercel.app",
    desc: "An Advanced JavaScript-based fan game inspired by the Attack on Titan anime, where you can shoot enemies with a cannonball to protect your base. The game features multiple difficulty modes, score tracking, pause and exit controls, and ends when an enemy successfully breaches your border.",
    github: "https://github.com/Mahesh2-3/AOT-Game",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1756482773/blog_images/dulw9jh2wxmbvfzyoumt.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Netflix Clone",
    link: "https://netflix-clone-32.vercel.app",
    desc: "A responsive Netflix Clone built using HTML and Tailwind CSS. This project replicates the sleek UI of Netflix with modern design, including a homepage, sections, and hover effects. The layout is responsive, ensuring a smooth experience across devices. I created this project early in my journey to improve UI skills, focusing on design and responsiveness using Tailwind CSS.",
    github: "https://github.com/Mahesh2-3/NetflixClone",
    img: "https://res.cloudinary.com/dhiluevpk/image/upload/w_400,q_auto,f_auto/v1756482725/blog_images/zvwa4whnkwbe3yscxhrf.png",
    tech: ["HTML", "TailwindCSS"],
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
    "HI there, I'm MAHESH, I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
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
    "Following projects showcase my skills and experience through real-world examples of my work. \n Scroll on the projects to view more..",
  liveText: "Live",
  techUsedBtn: "Tech Used →",
  techModalTitle: "Technologies Used",
};

export const EXPERIENCE_CONTENT = {
  heading: "Experience",
  subHeading: "What i have done so far",
};
