import React, { useState } from "react";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";

const Project = ({ project, index, onClick }) => {
  return (
    <div
      title="Click Me"
      className="cursor-pointer overflow-hidden"
      onClick={() => onClick(project)}
    >
      <img
        src={project.link}
        alt={project.title}
        className="w-full h-56 object-contain"
      />
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="font-openSans bg-secondary py-20">
      <h1 className="font-primary font-bold w-fit mx-auto border-x-4 text-white border-white py-4 px-10 tracking-[0.2em] text-center sm:text-3xl text-xl">
        Projects
      </h1>

      {/* Grid of projects */}
      <div className="xl:w-[70%] w-full px-5 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-20">
        {projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            index={index}
            onClick={setSelected}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl w-[90%] p-6 relative shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute cursor-pointer top-3 right-3 text-black hover:text-gray-600 text-xl"
            >
              ✕
            </button>

            <img
              src={selected.link}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {selected.desc}
            </p>
            <div className="flex gap-4">
              <a
                href={selected.link}
                className="px-4 py-2 bg-black text-white rounded-0 hover:bg-gray-800 transition"
              >
                Live Demo
              </a>
              <a
                href={selected.github}
                className="px-4 py-2 flex gap-1 items-center justify-center border border-black rounded-0 hover:bg-black hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
