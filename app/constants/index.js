

const technologies = [
  {
    name: "HTML 5",
    icon: "/html.png",
  },
  {
    name: "CSS 3",
    icon: "/css.png",
  },
  {
    name: "JavaScript",
    icon: "/javascript.png",
  },
  {
    name: "React JS",
    icon: "/reactjs.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "/threejs.svg",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
  {
    name: "Expressjs",
    icon: "/expressjs.jpg",
  },
];

const experience = [
  {
    role: "Full stack web Developer",
    company: "Zidio Development",
    duration: "May 2025 - July 2025",
    icon: "/Zidio.jpg",
    points: [
      "Built an Excel-driven analytical platform using the MERN stack.",
      "Developed full-stack features with React, Node.js, and MongoDB.",
      "Integrated dynamic Excel handling and data visualization tools.",
      "Collaborated with stakeholders to align features with data needs.",
      "Debugged and optimized frontend and backend codebases.",
      "Enhanced usability based on ongoing feedback and testing."
    ]

  },
  {
    role: "Frontend web Developer",
    company: "Digital Guruji",
    duration: "May 2025 - Oct 2025",
    icon: "/DigitalGuruji.jpg",
    points: [
      "Created 10+ frontend coding tools using HTML, CSS, and JavaScript.",
      "Built interactive UIs for improved developer experience.",
      "Ensured responsive and accessible design across devices.",
      "Added real-time previews and copy/download features.",
      "Improved tools iteratively based on user testing.",
      "Handled entire frontend architecture and code quality."
    ]

  }

]

const Projects = [
  // {
  //   image: "/mountains.jpg",
  //   description: "A platform that processes and visualizes Excel data for better insights using an intuitive UI.",
  //   name: "Excel Analytical Platform",
  //   tags: [
  //     { name: "react", color: "text-blue-400" },
  //     { name: "expressjs", color: "text-green-400" },
  //     { name: "mongodb", color: "text-emerald-400" },
  //     { name: "nodejs", color: "text-lime-400" }
  //   ].sort(() => 0.5 - Math.random()),
  //   source_code_link: "https://github.com"
  // },
  {
    image: "/resumecraft.png",
    description: "An online resume builder with customizable templates, live preview, and PDF export.",
    name: "ResumeCraft",
    tags: [
      { name: "mongodb", color: "text-emerald-400" },
      { name: "nodejs", color: "text-lime-400" },
      { name: "nextjs", color: "text-yellow-400" },
      { name: "react", color: "text-blue-400" }
    ].sort(() => 0.5 - Math.random()),
    source_code_link: "https://github.com/Mahesh2-3/ResumeCraft"
  },
  {
    image: "/passop.png",
    description: "Securely store and manage your passwords with encryption and multi-device sync support.",
    name: "Password Manager",
    tags: [
      { name: "nodejs", color: "text-lime-400" },
      { name: "expressjs", color: "text-green-400" },
      { name: "mongodb", color: "text-emerald-400" },
      { name: "react", color: "text-blue-400" }
    ].sort(() => 0.5 - Math.random()),
    source_code_link: "https://github.com/Mahesh2-3/Password-Manager"
  },
  {
    image: "/aot.jpg",
    description: "A browser-based fan game inspired by Attack on Titan, featuring ODM gear mechanics.",
    name: "AOT Game",
    tags: [
      { name: "CSS", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "HTML", color: "text-orange-400" }
    ].sort(() => 0.5 - Math.random()),
    source_code_link: "https://github.com/Mahesh2-3/AOT-Game"
  },
  {
    image: "/itask.png",
    description: "A fully functional To-Do List app with task creation, deletion, and persistence using local storage.",
    name: "To-Do List",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "HTML", color: "text-orange-400" },
      { name: "CSS", color: "text-blue-400" }
    ].sort(() => 0.5 - Math.random()),
    source_code_link: "https://github.com/Mahesh2-3/To-do-List"
  },
  {
    image: "/spotify.png",
    description: "A mini Spotify clone music player with play/pause, song list, and basic audio controls.",
    name: "Spotify Clone",
    tags: [
      { name: "React", color: "text-cyan-400" },
      { name: "Tailwind CSS", color: "text-teal-400" },
      { name: "JavaScript", color: "text-yellow-400" }
    ].sort(() => 0.5 - Math.random()),
    source_code_link: "https://github.com/Mahesh2-3/Spotify-Clone"
  }
];
const labels = [
  'Mahesh Babu',
  '10+ Projects Built',
  '18 Years Old',
  'GVP College Of Engineering',
  '2 Internships',
  'BTech 1st Year'
];


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export { technologies, experience, Projects, labels };