import React from 'react'
import BallCanvas from './Canvas/Ball'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import CircularMenu from './CircularMenu'

const Aboutme = () => {


    return (
        <div id='about-me' className="w-full mt-20 flex flex-col items-start justify-center">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} secondtext`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} primarytext text-[60px]`}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='text-[#aaa6c3] md:text-[17px] text-[14px] max-w-3xl'
            >
              {  `I'm a skilled software developer with experience in
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!`}
            </motion.p>
            <motion.span
            className='mx-auto'
            variants={fadeIn("up", "spring", 1, 0.75)}
            >
                <CircularMenu />
            </motion.span>
            <div className="flex flex-row w-full reveal-on-scroll flex-wrap justify-center gap-10 py-10">
                {technologies.map((technology, index) => (
                    <motion.div
                        variants={fadeIn("up", "spring", index * 0.35, 0.75)}
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-36 reveal-on-scroll flex flex-col justify-center items-center h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <span className='secondtext text-lg font-semibold'>{technology.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Aboutme, "about");