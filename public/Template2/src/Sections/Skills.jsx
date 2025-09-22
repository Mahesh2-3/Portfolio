import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="lg:w-[60%] w-full mx-auto mt-20 mb-40 font-primary">
      <h1 className="font-bold w-fit mx-auto border-4 border-black py-4 px-10 tracking-[0.2em] text-center sm:text-3xl text-xl font-openSans">
        Skills
      </h1>
      <div className="flex flex-wrap mt-20 items-center justify-center lg:gap-20 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src={skill.src} className="w-16 h-16" alt={skill.name} />
            <p className="font-bold text-light">{skill.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
