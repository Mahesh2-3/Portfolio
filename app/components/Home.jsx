"use client";
import React, { useEffect, useState } from "react";
import { navLinks, SocialLinks, HERO_CONTENT } from "../Constants";
import { FaDownload } from "react-icons/fa";
import SplitText from "./Animations/splitText";

const Home = () => {
  const [showNav, setshowNav] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const navTimer = setTimeout(() => setshowNav(true), 500);
    return () => clearTimeout(navTimer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ margin: "0 auto" }}
      className=" relative h-screen z-5 pb-20 flex lg:flex-row flex-col  lg:items-center items-start lg:justify-between justify-center lg:gap-0 gap-10"
    >
      <div className="flex flex-col gap-4 px-5">
        <div
          id="Name"
          className=""
          style={{ "--shadow-x": "-3px", "--shadow-y": "3px" }}
        >
          <SplitText
            text={HERO_CONTENT.name}
            className="font-bold font-primary z-10 md:text-9xl text-7xl text-white tracking-wider select-none"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            showCallback
          />
        </div>
        <div
          style={{ transitionDelay: "0ms" }}
          className={`opacity-0 transition-opacity duration-700 text-primary  tracking-[0.2em] sm:text-2xl text-lg z-10 ${
            showNav ? "opacity-100" : ""
          }`}
        >
          {HERO_CONTENT.role}
        </div>
      </div>

      <div
        className={`flex ${
          show ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-in-out flex-col px-5 relative top-7 lg:items-end items-start justify-center gap-4`}
      >
        <a href={HERO_CONTENT.resumeLink} download="MaheshResume.pdf">
          <button className="flex gap-2 font-bold tracking-widest items-center rounded-md justify-center bg-violet8 sm:py-3 py-2 cursor-pointer  sm:px-6 px-4 border border-violet4 text-white transition-colors duration-300">
            {HERO_CONTENT.resumeText} <FaDownload />{" "}
          </button>
        </a>
        <ul className="flex gap-2 items-center">
          {SocialLinks.map((ele, index) => (
            <li key={index} className="text-2xl text-white mx-2 my-4">
              <a title={ele.name} target="__blank" href={ele.src}>
                <ele.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="navList flex sm:flex-nowrap flex-wrap z-10 gap-y-3.5 bottom-22 items-center w-full absolute font-alumni justify-around md:text-xl sm:text-2xl text-xl">
        {navLinks.map((element, index) => (
          <li
            key={index}
            style={{
              transitionDelay: showNav ? `${index * 300}ms` : "0ms",
            }}
            className={`transition tracking-wider sm:w-fit w-[50%] text-[#ffffff] cursor-pointer duration-700 ease-in-out ${
              showNav ? "opacity-100 translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href={element.src}
              className="relative group font-bold hover:text-white flex transition-colors duration-300 items-center justify-center flex-col"
            >
              {element.name}
              <span className=" -bottom-1 sm:block hidden h-px w-[130%] scale-x-0 origin-center bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
