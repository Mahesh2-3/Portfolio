"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";

import LightRays from "./components/Animations/LightRays";
import HomePage from "./components/Home";

import dynamic from "next/dynamic";

// Lazy-loaded components
const About = dynamic(() => import("./components/About"), { ssr: false });
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
const Experience = dynamic(() => import("./components/Experience"), {
  ssr: false,
});
const ContactMe = dynamic(() => import("./components/ContactMe"), {
  ssr: false,
});

export default function Home() {
  const mainref = useRef(null);
  const [windowsWidth, setwindowsWidth] = useState(0);

  useEffect(() => {
    const updateHeights = () => setwindowsWidth(window.innerWidth);
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div
      ref={mainref}
      className="xl:w-[70%] mx-auto hide-scrollbar w-full relative overflow-y-auto z-0 h-fit overflow-x-hidden bg-violet9"
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          inset: 0,
        }}
      >
        <LightRays
          raysOrigin="top-right"
          raysColor="#9b30ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={windowsWidth < 640 ? 8 : 3}
          pulsating={false}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <section id="home" className="min-h-[100vh] relative z-[5]">
        <HomePage />
      </section>
      <section id="about" className="min-h-[100vh] relative z-[5]">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <About />
        </Suspense>
      </section>
      <section id="skills" className="min-h-[100vh] relative z-[5]">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Skills />
        </Suspense>
      </section>
      <section id="projects" className="min-h-[70vh] relative z-[5]">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Projects />
        </Suspense>
      </section>
      <section id="experience" className="min-h-[75vh] relative z-[5]">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Experience />
        </Suspense>
      </section>
      <section id="get-in-touch" className="min-h-[100vh] relative z-[5]">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <ContactMe />
        </Suspense>
      </section>
    </div>
  );
}
