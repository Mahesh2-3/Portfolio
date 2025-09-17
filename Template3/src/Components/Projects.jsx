import React from "react";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ data, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`w-full ${
        isEven ? "bg-third text-primary" : "bg-primary text-third"
      }`}
    >
      <div
        className={`flex flex-col lg:w-[80%] w-full mx-auto md:flex-row ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-center gap-4 p-6 ${
          isEven ? "bg-third text-primary" : "bg-primary text-third"
        }`}
      >
        {/* Image */}
        <img
          src={data.img}
          alt={data.title}
          className="lg:w-[50%] w-full h-64 object-contain"
        />

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl font-bold">{data.title}</h2>
          <p className="text-sm leading-relaxed opacity-90">{data.desc}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg  font-semibold hover:bg-opacity-80 transition"
            >
              <FaGithub /> Code
            </a>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold hover:bg-primary transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div id="projects" className="w-full mx-auto mb-20 mt-10 pt-20">
      <h1 className="heading px-5 lg:w-[80%] w-full mx-auto text-3xl font-bold py-5 mb-12 text-third">
        Projects
      </h1>
      <div className="w-full flex flex-col">
        {projects.map((data, index) => (
          <ProjectCard key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
