import React from "react";
import { hero } from "../constants";

const About = () => {
  const paragraph = (e) => {
    if(window.innerWidth < 768) return
    //toggle line-clamp-4 class on click
    if (e.target.classList.contains("line-clamp-4")) {
      e.target.classList.remove("line-clamp-4");
    } else {
      e.target.classList.add("line-clamp-4");
    }
  };

  return (
    <div className="bg-secondary w-full py-20 lg:px-10 text-white px-5 font-openSans">
      <h1 className="font-primary tracking-widest font-bold mb-5 text-3xl ">
        About me
      </h1>
      <p
        onClick={paragraph}
        className="my-3 md:line-clamp-4 max-md:text-xs tracking-wide cursor-pointer"
      >
        {hero.about}
      </p>
    </div>
  );
};

export default About;
