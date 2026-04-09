"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CERTIFICATES } from "../Constants";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const directionRef = useRef(-1); // -1 for left, 1 for right
  const xPosRef = useRef(0);
  const animationRef = useRef(null);

  // Duplicate the certificates array a few times to ensure a seamless infinite scroll
  // We need enough copies so the screen is always filled.
  const duplicatedCertificates = [
    ...CERTIFICATES,
    ...CERTIFICATES,
    ...CERTIFICATES,
    ...CERTIFICATES,
  ];

  useEffect(() => {
    // Determine direction on scroll
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        directionRef.current = self.direction === 1 ? -1 : 1;
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let totalWidth = wrapper.scrollWidth / 2; // Since we duplicated enough

    const animate = () => {
      if (!isHovered) {
        xPosRef.current += 1.5 * directionRef.current;

        // Reset position for infinite loop
        // We use half the total scrollable width because we have multiple copies
        if (xPosRef.current <= -totalWidth) {
          xPosRef.current += totalWidth;
        } else if (xPosRef.current >= 0) {
          xPosRef.current -= totalWidth;
        }

        gsap.set(wrapper, { x: xPosRef.current });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="w-full py-20 overflow-hidden relative" ref={containerRef}>
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold heading portfolio">Certificates</h2>
      </div>

      <div className="flex w-max" ref={wrapperRef}>
        {duplicatedCertificates.map((cert, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-80 h-56 mx-4 group cursor-pointer transition-transform duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-full h-full relative rounded-2xl overflow-hidden border border-violet-800 transition-all duration-300 group-hover:scale-110 group-hover:z-10 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-500/50">
              <img
                src={cert.link}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{cert.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
