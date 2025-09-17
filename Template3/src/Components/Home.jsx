import React from "react";
import { hero } from "../constants";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen relative flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-end justify-center">
        <div className="text-fourth sm:text-xl text-lg font-semibold">
          {hero.role}
        </div>
        <div className="font-logo md:text-8xl sm:text-6xl text-end text-4xl font-semibold text-third">
          {hero.name}
        </div>
        <div className="text-third sm:text-xl text-lg">
          I'm Currently working in{" "}
          <span className="font-semibold sm:text-2xl text-xl">
            {hero.currentlyWorking}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
