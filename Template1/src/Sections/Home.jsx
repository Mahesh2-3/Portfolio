import React from "react";
import { hero } from "../constants";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white min-h-screen font-popp flex flex-col items-center justify-evenly"
    >
      <div className="mt-20 w-full">
        <div className="flex lg:flex-row flex-col items-center justify-center px-10 gap-10">
          <div className="radial relative content-center justify-items-center rounded-full">
            <div className="relative flex items-center justify-center">
              <img className="z-10 scale-90" src="/Me.svg" alt="Profile" />
              <img
                className="absolute z-0 scale-125"
                src="/Gradient.svg"
                alt="Gradient"
              />
            </div>
            <div className="absolute flex items-top justify-start -top-10 md:-right-64 -right-10 w-[350px]">
              <img
                src="/Arrow.svg"
                alt="arrow"
                className="relative md:rotate-0 -rotate-90 -top-5"
              />
              <span className="flex gap-2 relative md:top-0 -top-10 md:left-0 -left-20">
                Hello! I am{" "}
                <span className="text-primary font-heading text-xl font-semibold">
                  {hero.name}
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col ml-5 gap-2">
            <span className="text-5xl font-bold font-heading">{hero.role}</span>
            <span className="text-sm tracking-wide">{hero.quote}</span>
          </div>
        </div>
      </div>
      <div id="about" className="lg:px-20 px-5">
        <div className="text-2xl">
          I'm Currently working at{" "}
          <span className="text-blue-600 font-bold">
            {hero.currentlyWorking}
          </span>
        </div>
        <div className="mt-4 sm:w-[80%] text-lg w-full text-light">
          {hero.about}
        </div>
      </div>
    </div>
  );
};

export default Home;
