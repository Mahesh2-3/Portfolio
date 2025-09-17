import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="mt-20 lg:w-[70%] w-full px-5 mx-auto">
      <h1 className="heading text-third">Skills</h1>
      <ul className="sm:w-[500px] w-full mx-auto my-7 gap-15 flex items-center justify-center flex-wrap">
        {skills.map((skill, index) => (
          <li className="flex flex-col items-center gap-3 justify-center">
            <img className="w-16 h-16" src={skill.src} alt={skill.name} />
            <span className="tracking-wider text-xs">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
