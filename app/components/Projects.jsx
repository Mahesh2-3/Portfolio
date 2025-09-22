import { useState } from "react";
import { projects } from "../Constants";
import { IoMdClose } from "react-icons/io";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegEye } from "react-icons/fa";

const ProjectCard = ({ project, onShowTech, index }) => {
  return (
    <div className="parent lg:w-[850px] sm:w-[690px] w-full sm:h-[400px] h-[680px] sticky top-2 bg-violet9">
      <div className="div1 flex items-center px-5 bg-violet8 border rounded-md border-white/20  xl:text-5xl text-3xl font-bold text-white mb-2">
        {project.title}
      </div>
      <div className="div2 bg-violet8 border rounded-md border-white/20  flex items-center xl:text-base text-sm px-5 text-white/50 font-normal text-start">
        {project.desc}
      </div>
      <img
        src={project.img}
        alt="project preview"
        className="div3 h-[260px] border border-white/20 rounded-md w-full object-contain "
      />
      <div className="div4 flex items-center justify-evenly bg-violet8 border rounded-md border-white/20 ">
        <a
          href={project.github}
          target="_blank"
          className="w-8 h-8 cursor-pointer p-3 bg-gradient-to-tr from-violet2 via-violet4 to-violet9 rounded-full"
        >
          <img
            src="/tech/github.png"
            className="object-cover scale-[2]"
            alt="github"
          />
        </a>
        <a
          href={project.link}
          target="_blank"
          className="text-violet2 flex items-center gap-2 hover:text-blue-300"
        >
          Live <FaRegEye />
        </a>
        <button
          className="text-xs text-violet2 cursor-pointer"
          onClick={() => onShowTech(project.tech)}
        >
          Tech Used →
        </button>
      </div>
    </div>
  );
};
// <div
//   className={`sticky top-0 flex justify-center items-center`}
//   style={{ zIndex: index + 10 }}
// >
//   <div className="project-card w-[350px] h-[28rem] font-normal">
//     <div className="relative w-full cursor-pointer h-full duration-700 glass-bg rounded-2xl shadow-lg flex flex-col items-start justify-between p-6 overflow-hidden">
//       {/* Github Link */}
//       <a
//         href={project.github}
//         target="_blank"
//         className="absolute w-12 h-12 cursor-pointer p-3 top-3 right-3 bg-gradient-to-tr from-[#6b6868] via-[#302d2d] to-black rounded-full"
//       >
//         <img src="/tech/github.png" className="object-cover" alt="github" />
//       </a>

//       {/* Preview Image */}
//       <img
//         src={project.img}
//         alt="project preview"
//         className="w-full h-52 object-cover rounded-xl mb-4"
//       />

//       {/* Title & Desc */}
//       <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
//       <p className="text-xs text-white/50 font-normal line-clamp-6 text-start">
//         {project.desc}
//       </p>

//       {/* Links */}
//       <div className="w-full text-sm mt-3 flex gap-4 items-center justify-between">
//         <a
//           href={project.link}
//           target="_blank"
//           className="text-blue-400 flex items-center gap-2 hover:text-blue-300"
//         >
//           Live <FaRegEye />
//         </a>
//         <button
//           className="text-xs cursor-pointer"
//           onClick={() => onShowTech(project.tech)}
//         >
//           Tech Used →
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [techData, setTechData] = useState([]);

  const handleShowTech = (tech) => {
    setTechData(tech);
    setShowModal(true);
  };

  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="sm:px-15 px-7">
        <span className="text-lg text-primary w-full text-start font-normal mt-20 block">
          My Work
        </span>
        <h1 className="heading font-extrabold w-full text-start mb-3">
          Projects
        </h1>
        <p className="text-primary mb-10 sm:w-[60%] w-full">
          Following projects showcase my skills and experience through
          real-world examples of my work.
        </p>
      </div>

      {/* Stack Effect */}
      <div className="flex mx-auto max-sm:w-full flex-col px-5 items-center gap-40 hide-scrollbar relative sm:h-[420px] h-[700px] overflow-y-scroll">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
            onShowTech={handleShowTech}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed w-full inset-0 flex items-center justify-center bg-black/60 z-[999]">
          <div className="bg-white/10 border backdrop-blur-md border-white/20 p-4 rounded-xl sm:w-[600px] h-[90vh] w-[100vw] max-h-[80vh] shadow-2xl">
            <h2 className="text-xl font-bold mb-4 pl-4">Technologies Used</h2>
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              className="rounded-md text-sm h-[90%] p-4 hide-scrollbar overflow-x-auto overflow-y-auto"
            >
              {JSON.stringify(techData, null, 2)}
            </SyntaxHighlighter>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 fixed top-0 right-4 cursor-pointer"
            >
              <IoMdClose size={25} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
