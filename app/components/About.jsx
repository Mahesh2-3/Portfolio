import { ABOUT_CONTENT } from "../Constants";
import useFadeInAnimation from "./hooks/FadeInAnimation";
import Image from "next/image";

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
          <Image width={80} height={80} src={src} alt="image" />
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
        <h1 className="heading fade-in">{ABOUT_CONTENT.heading}</h1>
        <div className="fade-in mt-10 tracking-wide sm:w-[60%] w-full text-primary">
          {ABOUT_CONTENT.description}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 sm:items-start items-center">
        <GlowingCard
          word={ABOUT_CONTENT.roles.frontend}
          src={"/frontend.png"}
        />
        <GlowingCard word={ABOUT_CONTENT.roles.backend} src={"/backend.png"} />
      </div>
    </div>
  );
};

export default About;
