import React from 'react'
import Image from 'next/image'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

const Hero = () => {
    return (
        <div
            className="w-full h-[900px]  ">
            <div className="flex w-full h-full items-center justify-evenly relative">
                <div
                    className={`absolute inset-0 lg:top-[120px] top-[60px] z-[999]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>Mahesh</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-[#f3f3f3]`}>
                            I develop user interfaces<br className='sm:block hidden' />
                             and web applications
                        </p>
                    </div>
                </div>
                <div className="z-50 relative md:top-32 sm:top-38 lg:left-52">
                    <div className="md:w-[425px] w-[350px] md:h-[425px] h-[350px] bg-[#ccddea] flex items-center justify-center rounded-full">
                        <Image src="/profile3.jpg" priority width={400} height={400} className="rounded-full md:w-[400px] w-[325px] md:h-[400px] h-[325px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Hero, "Hero");