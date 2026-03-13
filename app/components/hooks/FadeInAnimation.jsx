"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable fade-in-on-view hook.
 * @param {Object} opts
 * @param {string} opts.selector - CSS selector to target (default ".fade-in")
 * @param {number} opts.y - Starting Y offset in px (default 50)
 * @param {number} opts.duration - Animation duration (default 0.8)
 * @param {boolean} opts.once - If true, don't fade back out when leaving (default true)
 * @param {Element} opts.scroller - Optional custom scroller element
 */
export default function useFadeInAnimation({
  selector = ".fade-in",
  y = 50,
  duration = 0.8,
  once = true,
  scroller,
} = {}) {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const elements = gsap.utils.toArray(selector);
        gsap.set(elements, { opacity: 0, y });

        ScrollTrigger.batch(selector, {
          start: "top 85%",
          scroller,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration,
              stagger: 0.15,
              ease: "power2.out",
            }),
          onEnterBack: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration,
              stagger: 0.15,
              ease: "power2.out",
            }),
          onLeave: !once
            ? (batch) => gsap.to(batch, { opacity: 0, y, duration: 0.5 })
            : undefined,
          onLeaveBack: !once
            ? (batch) => gsap.to(batch, { opacity: 0, y, duration: 0.5 })
            : undefined,
        });
      });

      mm.add("(max-width: 767px)", () => {
        const elements = gsap.utils.toArray(selector);
        gsap.set(elements, { opacity: 1, y: 0 }); // disable animation
      });
    });

    return () => ctx.revert();
  }, [selector, y, duration, once, scroller]);
}
