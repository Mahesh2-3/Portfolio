import React, { useEffect, useRef, useState, Suspense } from "react";

import LightRays from "./components/Animations/LightRays";
import Home from "./components/Home";

const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));
const Experience = React.lazy(() => import("./components/Experience"));
const ContactMe = React.lazy(() => import("./components/ContactMe"));

export default function App() {
  const mainref = useRef(null);

  // refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [windowsWidth, setwindowsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateHeights = () => {
      setwindowsWidth(window.innerWidth);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  return (
    <div
      ref={mainref}
      className="xl:w-[70%] mx-auto hide-scrollbar w-full relative overflow-y-auto z-0 h-fit overflow-x-hidden bg-black"
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
          raysColor="#A020F0"
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

      <section ref={homeRef} id="home" className="min-h-[100vh] relative z-[5]">
        <Home />
      </section>
      <section
        ref={aboutRef}
        id="about"
        className="min-h-[100vh] relative z-[5]"
      >
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <About />
        </Suspense>
      </section>

      <section
        ref={skillsRef}
        id="skills"
        className="min-h-[100vh] relative z-[5]"
      >
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Skills />
        </Suspense>
      </section>

      <section
        ref={projectsRef}
        id="projects"
        className="min-h-[125vh] relative z-[5]"
      >
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Projects />
        </Suspense>
      </section>

      <section
        ref={experienceRef}
        id="experience"
        className="min-h-[75vh] relative z-[5]"
      >
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Experience />
        </Suspense>
      </section>

      <section
        ref={contactRef}
        id="get-in-touch"
        className="min-h-[100vh] relative z-[5]"
      >
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <ContactMe />
        </Suspense>
      </section>
    </div>
  );
}
