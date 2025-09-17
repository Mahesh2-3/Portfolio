import React from "react";
import { works } from "../constants";

const ExperienceBit = ({ work, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`py-15 flex border-b border-b-light w-full items-center ${
        isEven ? "flex-row" : "flex-row-reverse"
      } justify-evenly`}
    >
      <div className="w-[40%] flex items-center justify-center text-6xl font-bold">
        {index + 1}.
      </div>
      <div className="w-[40%]">
        <h3 className="font-bold text-xl font-secondary">{work.title}</h3>
        <p className="text-gray-600">{work.company}</p>
        <p className="mt-2 line-clamp-3">{work.desc}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="bg-bg lg:w-[70%] mx-auto w-full py-20 text-black px-5 font-openSans">
      <h1 className="font-primary font-bold w-fit mx-auto border-4 border-black py-4 px-10 tracking-[0.2em] text-center text-3xl ">
        Experience
      </h1>
      <div className="flex flex-col mt-10">
        {works.map((work, index) => (
          <ExperienceBit key={index} index={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
