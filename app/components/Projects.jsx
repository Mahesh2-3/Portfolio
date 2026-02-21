import { useState } from "react";
import { projects, PROJECTS_CONTENT } from "../Constants";
import { IoMdClose } from "react-icons/io";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";

const ProjectCard = ({ project, onShowTech }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="project-card fade-in group w-[350px] h-[28rem] font-normal [perspective:1000px]">
      <div
        className={`relative w-full hover:translate-y-[-15px] cursor-pointer h-full duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div
          title="Click Me to Flip!"
          className="absolute inset-0 shadow-lg border bg-violet9/80 border-violet3/20 rounded-2xl flex flex-col items-start justify-between p-6 overflow-hidden [backface-visibility:hidden]"
        >
          <a
            href={project.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="absolute w-12 h-12 cursor-pointer p-3 top-3 right-3 bg-gradient-to-tr from-[#6b6868] via-[#302d2d] to-black rounded-full z-10"
          >
            <Image
              width={48}
              height={48}
              src="/tech/github.png"
              className="w-full h-full object-cover"
              alt="github"
            />
          </a>
          <Image
            width={400}
            height={250}
            src={project.img}
            alt="project preview"
            className="w-full h-52 object-cover rounded-xl mb-4"
          />
          <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-xs text-white/50 font-normal line-clamp-6 overflow-ellipsis text-start">
            {project.desc}
          </p>
          <div className="w-full text-sm mt-3 flex gap-4 items-center justify-between z-10">
            <a
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-blue-400 flex items-center gap-2 hover:text-blue-300"
            >
              {PROJECTS_CONTENT.liveText} <FaRegEye />
            </a>
            <button
              className="text-xs cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                onShowTech(project.tech);
              }}
            >
              {PROJECTS_CONTENT.techUsedBtn}
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 shadow-lg border bg-[#05000f] border-violet3/20 rounded-2xl flex flex-col items-start p-6 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2 w-full">
            {project.title}
          </h2>
          <div className="overflow-y-auto hide-scrollbar text-sm text-white/80 font-normal text-start leading-relaxed h-[85%] pr-2">
            {project.desc}
          </div>
          <p className="text-xs text-white/40 mt-auto pt-4 text-center w-full italic">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  );
};

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
          {PROJECTS_CONTENT.subHeading}
        </span>
        <h1 className="heading font-extrabold w-full text-start mb-3">
          {PROJECTS_CONTENT.heading}
        </h1>
        <p className="text-primary mb-10 sm:w-[60%] w-full">
          {PROJECTS_CONTENT.description}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-10 mt-10 pb-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onShowTech={handleShowTech}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed w-full inset-0 flex items-center justify-center bg-black/60 z-[999]">
          <div className="bg-white/10 border backdrop-blur-md border-white/20 p-4 rounded-xl sm:w-[600px] h-[90vh] w-[100vw] max-h-[80vh] shadow-2xl">
            <h2 className="text-xl font-bold mb-4 pl-4">
              {PROJECTS_CONTENT.techModalTitle}
            </h2>
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
