"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../constants"; // adjust this path if needed
import ScrollRevealer from "./Animations/ScrollReveal";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion"
import Image from "next/image";


const Experience = () => {
    return (
        <ScrollRevealer>
            <div id="experience" className="py-10 px-4 w-full mx-auto">
                <motion.div
                    className="my-20"
                    variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-center secondtext`}>
                        What I have done so far
                    </p>
                    <h2 className={`${styles.sectionHeadText} text-center primarytext text-7xl`}>
                        Work Experience.
                    </h2>
                </motion.div>                <VerticalTimeline>
                    {experience.map((exp, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={exp.duration}
                            className="bg-transparent"
                            iconStyle={{ background: "#1e293b", color: "#fff" }}
                            icon={<Image src={exp.icon} width={60}
                                height={60} alt="company" className="w-full h-full rounded-full" />}
                            contentStyle={{
                                background: "#151030",
                                color: "#ffffff",
                                boxShadow: "none",
                                borderBottom: "3px solid #ccddea",
                                borderRadius: "5px"
                            }}
                            contentArrowStyle={{ borderRight: "7px solid #151030" }}
                        >
                            <h3 className="secondtext text-2xl font-bold m-0">{exp.role}</h3>
                            <p style={{ margin: 0 }} className="secondtext font-semibold text-[22px] text-gray-400 ">{exp.company}</p>
                            <ul className="list-disc mt-5 font-semibold secondtext ml-5 space-y-2 text-sm  text-gray-300">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </ScrollRevealer>
    );
};

export default SectionWrapper(Experience, "work");
