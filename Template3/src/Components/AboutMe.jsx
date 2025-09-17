import React from "react";
import { hero } from "../constants";

const AboutMe = () => {
  return (
    <div className="w-full py-10 bg-fourth text-primary">
      <div className="lg:w-[70%] px-5 w-full mx-auto">
        <h1 className="text-secondary heading">About Me</h1>
        <p className="tracking-wide sm:text-sm text-xs">{hero.about}</p>
      </div>
    </div>
  );
};

export default AboutMe;
