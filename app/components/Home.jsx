"use client";
import React, { useEffect, useRef, useState } from "react";
import { navLinks, SocialLinks } from "../Constants";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const [showNav, setshowNav] = useState(false);
  const [show, setShow] = useState(false);
  const timeouts = useRef([]);

  // Text animation
  const TextAnimation = () => {
    const name = "MAHESH";
    const element = document.getElementById("Name");
    if (!element) return;

    // Clear previous timeouts
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    // Reset text & shadow
    element.innerText = "";
    element.style.setProperty("--shadow-x", "0px");
    element.style.setProperty("--shadow-y", "0px");

    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const timeout = setTimeout(() => {
        element.innerText += char;
        if (i === name.length - 1) {
          // Apply shadow only after full text
          element.style.setProperty("--shadow-x", "-3px");
          element.style.setProperty("--shadow-y", "3px");
          setTimeout(() => {
            element.style.transition = "transform 1s ease-in-out";
            // element.style.transform = "translateX(0%)";
            setshowNav(true);
          }, 500);
        }
      }, i * 200);
      timeouts.current.push(timeout);
    }
  };

  // measure section heights dynamically
  useEffect(() => {
    setTimeout(() => {
      TextAnimation();
    }, 1000);

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000); // 1s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ margin: "0 auto" }}
      className=" relative h-[100vh] z-[5] pb-20 flex lg:flex-row flex-col  lg:items-center items-start lg:justify-between justify-center lg:gap-0 gap-10"
    >
      <div className="flex flex-col gap-4 px-5">
        <div
          id="Name"
          className="font-bold font-primary  z-10 md:text-9xl text-7xl text-[#fff] transition-all tracking-wider ease-in-out select-none duration-700 blink-cursor"
        ></div>
        <div
          style={{ transitionDelay: "0ms" }}
          className={`opacity-0 transition-all duration-700 text-primary  tracking-[0.2em] sm:text-2xl text-lg z-10 ${
            showNav ? "opacity-100" : ""
          }`}
        >
          FULL STACK WEB DEVELOPER
        </div>
      </div>

      <div
        className={`flex ${
          show ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-in-out flex-col px-5 relative top-7 lg:items-end items-start justify-center gap-4`}
      >
        <a href="/resume.pdf" download="MaheshResume.pdf">
          <button className="flex gap-2 font-bold tracking-widest items-center rounded-md justify-center bg-violet8 sm:py-3 py-2 cursor-pointer  sm:px-6 px-4 border border-violet4 text-white transition-all duration-300">
            Resume <FaDownload />{" "}
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

      <ul className="navList flex sm:flex-nowrap flex-wrap z-[10] gap-y-3.5 bottom-22 items-center w-full absolute font-secondary justify-around md:text-xl sm:text-2xl text-xl">
        {navLinks.map((element, index) => (
          <li
            key={index}
            style={{
              transitionDelay: showNav ? `${index * 300 + 1300}ms` : "0ms",
            }}
            className={`transition-all tracking-wider sm:w-fit w-[50%] text-[#ffffff] cursor-pointer duration-700 ease-in-out ${
              showNav ? "opacity-100 translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href={element.src}
              className="relative group font-bold hover:text-white flex transition-all duration-300 items-center flex-col"
            >
              {element.name}
              <span className="left-1/2 -bottom-1 sm:block hidden h-[1px] w-0 bg-primary transition-all duration-500  ease-out group-hover:w-[130%] group-hover:left-[-5px]"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
