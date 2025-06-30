// components/ScrollRevealer.js
"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children, delay = 0, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: "easeInOut", delay },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const ScrollRevealer = ({ children }) => {
  // Traverse children and replace `.reveal-on-scroll` with AnimatedDiv
 const walkAndWrap = (nodes) => {
  return Array.isArray(nodes)
    ? nodes.map((child, index) => {
        const wrapped = walkAndWrap(child);
        // Assign key if it's a valid React element
        return typeof wrapped === "object" && wrapped !== null
          ? { ...wrapped, key: wrapped.key ?? index }
          : wrapped;
      })
    : typeof nodes === "object" && nodes?.props
    ? nodes.props.className?.includes("reveal-on-scroll")
      ? (
          <AnimatedDiv key={nodes.key ?? Math.random()} {...nodes.props}>
            {nodes.props.children}
          </AnimatedDiv>
        )
      : {
          ...nodes,
          props: {
            ...nodes.props,
            children: walkAndWrap(nodes.props.children),
          },
        }
    : nodes;
};


  return <>{walkAndWrap(children)}</>;
};

export default ScrollRevealer;
