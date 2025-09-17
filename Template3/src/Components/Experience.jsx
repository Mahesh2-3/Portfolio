import React from "react";
import { works } from "../constants";

function ExperienceCard({ data, index }) {
  return (
    <div className="relative max-w-[450px] w-full">
      <div className="absolute sm:-top-2 -top-10  sm:-left-20 -left-4 w-12 h-12 flex items-center justify-center font-logo text-xl font-bold rounded-full bg-fourth text-primary">
        {index + 1}
      </div>
      <div className="flex flex-col items-start ">
        <div className="font-semibold text-lg">{data.title}</div>
        <div className="font-semibold text-third">{data.company}</div>
        <div className="mt-3 sm:text-base text-sm">{data.desc}</div>
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <div id="experience" className="lg:w-[80%]  w-full mx-auto px-5 pt-20">
      <h1 className="heading text-third">Experience</h1>
      <div className="w-full mx-auto mt-15 sm:px-16  grid xl:grid-cols-2 lg:justify-items-start justify-items-center grid-cols-1 gap-x-5 sm:gap-y-15 gap-y-20">
        {works.map((data, index) => (
          <ExperienceCard key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
