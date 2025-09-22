import React from "react";
import { projects } from "../constants";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 my-12 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full justify-items-center  md:w-1/2"
      >
        <img
          src={project.link}
          alt={project.title}
          className="rounded-xl shadow-lg scale-90"
        />
      </a>

      {/* Content */}
      <div className={`w-full md:w-1/2 text-center md:text-left relative `}>
        <p
          className={`text-sm text-purple-300 font-semibold ${
            isEven ? "text-end" : "text-start"
          }`}
        >
          Featured Project
        </p>
        <h3
          className={`text-2xl font-heading md:text-3xl font-bold text-white ${
            isEven ? "text-end" : "text-start"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-300 mt-3 ${
            isEven ? "text-end" : "text-start"
          } px-3 pt-3 bg-primary/10 md:text-md text-sm border rounded-lg border-white/10
      line-clamp-5 overflow-hidden break-all`}
        >
          {project.desc}
        </p>

        {/* Links */}
        <div
          className={`flex w-full gap-4 mt-4 ${
            isEven ? "justify-end" : "justify-start"
          }`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#30108099] to-[#7840AD5C] text-white shadow-md hover:opacity-80 transition"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="font-popp px-6 md:px-20 py-12 pt-20">
      <h1 className="text-5xl mb-20 font-bold font-heading">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
};

export default Projects;
