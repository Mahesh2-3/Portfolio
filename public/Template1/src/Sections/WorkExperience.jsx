import React, { useState } from "react";
import { skills, works } from "../constants";

const WorkExperience = () => {
  const Card = ({ work }) => {
    return (
      <div className="w-[425px] z-10 h-[180px] flex gap-5 px-5 items-center backdrop-blur-md justify-center rounded-md bg-secondary/50 border-t-2 border-primary">
        <img src={work.icon} alt="icon" className="w-23 levitate h-24" />
        <div className="">
          <h2 className="line-clamp-1 font-bold">{work.title}</h2>
          <p className="line-clamp-1 mb-2 text-sm">{work.company}</p>
          <p className="text-sm text-light line-clamp-3">{work.desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="experience"
      className=" w-full font-popp px-5 py-5 pt-20 min-h-screen flex flex-col gap-10"
    >
      <h1 className="text-3xl font-bold mb-20 lg:px-20 font-heading">
        WORK EXPERIENCE
      </h1>
      <div className="flex items-center lg:px-20 px-0 mb-20 justify-center flex-wrap h-[50%] relative gap-10">
        {works.map((work) => (
          <Card key={work.title} work={work} />
        ))}
        <img src="/Gradient.svg" className="absolute z-0 scale-125" alt="" />
      </div>
      <h1 className="text-3xl font-bold mb-20 lg:px-20 font-heading">Skills</h1>
      <div className="flex items-center mb-10 justify-center flex-wrap h-[50%] relative gap-18">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col gap-3 items-center">
            <img
              title={skill.name.toUpperCase()}
              src={skill.src}
              className="w-16 h-16"
              alt={skill.name.toLowerCase()}
            />
            <span className="text-light">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
