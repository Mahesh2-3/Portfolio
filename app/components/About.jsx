"use client";
import useFadeInAnimation from "./hooks/FadeInAnimation";

import { useState } from "react";

const GlowingCard = ({ word, src }) => {
  const [flipped, setFlipped] = useState(false);

  const handleToggle = () => {
    // Only enable click flip on small devices
    if (window.innerWidth <= 768) {
      setFlipped(!flipped);
    }
  };
  const newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return (
    <div
      title={newWord}
      className="group w-72  fade-in h-96 cursor-pointer font-normal [perspective:1000px]"
      onClick={handleToggle}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] 
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
          group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 glass-bg shadow-lg flex items-center justify-center [backface-visibility:hidden] rounded-2xl">
          <img width={80} height={80} src={src} alt="image" />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-white font-bold uppercase tracking-widest">
            {word}
          </span>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  useFadeInAnimation();
  return (
    <div
      style={{ padding: "40px" }}
      id="about-me"
      className="w-full h-full flex flex-col justify-around"
    >
      <div className="mb-20">
        <h1 className="heading fade-in">About Me</h1>
        <div className="fade-in mt-10 tracking-wide sm:w-[60%] w-full text-primary">
          HI there, I'm <span className="font-bold text-white">MAHESH</span>,
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like React, Node.js, and Three.js. I'm a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let's work together to bring your ideas to life!
        </div>
      </div>
      <div className="flex flex-wrap gap-6 sm:items-start items-center">
        <GlowingCard word={"FRONTEND DEVELOPER"} src={"/frontend.png"} />
        <GlowingCard word={"BACKEND DEVELOPER"} src={"/backend.png"} />
      </div>
    </div>
  );
};

export default About;
