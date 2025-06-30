"use client"
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Experience from "./Components/Experience";
import { useEffect, useState } from "react";
import Projects from "./Components/Projects";
import ContactCard from "./Components/ContactMe";
import StarsCanvas from "./Components/Animations/StarsCanvas";
import Hero from "./Components/Hero";

export default function Home() {
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  if (Loading) {
    return (
      <div className="w-[100vw] h-screen primarybg flex justify-center items-center">
        <div className="loader"></div>
      </div>
    )
  } else {


    return (
      <main className="primarybg w-full h-fit overflow-hidden">
         <div className='bg-[url(/herobg.png)] bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Aboutme />
        <Experience />
        <Projects />
        <div className="relative z-0">
          <ContactCard />
          <StarsCanvas />
        </div>
      </main>
    );
  }
}
