"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LightRays from "./components/Animations/LightRays";

export default function NotFound() {
  const [windowsWidth, setwindowsWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setwindowsWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="xl:w-[70%] mx-auto w-full relative h-screen overflow-hidden bg-violet9 flex flex-col items-center justify-center">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          inset: 0,
        }}
      >
        <LightRays
          raysOrigin="center"
          raysColor="#9b30ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={windowsWidth < 640 ? 8 : 4}
          pulsating={false}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-6 px-5 text-center">
        <h1
          className="font-bold font-primary md:text-9xl text-7xl text-white tracking-wider select-none"
          style={{
            "--shadow-x": "-3px",
            "--shadow-y": "3px",
            textShadow: "-3px 3px 0 var(--fallback-shadow, transparent)",
          }}
        >
          404
        </h1>
        <h2 className="text-3xl font-bold text-primary tracking-[0.2em] sm:text-2xl">
          PAGE NOT FOUND
        </h2>
        <p className="text-white text-lg max-w-md tracking-wider">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="mt-8 flex gap-2 font-bold tracking-widest items-center rounded-md justify-center bg-violet8 sm:py-3 py-2 cursor-pointer sm:px-6 px-4 border border-violet4 text-white transition-colors duration-300">
            RETURN HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
