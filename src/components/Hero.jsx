import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen flex justify-center items-center mx-auto`}>
      <div
        className={`absolute z-[2] inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mahesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

        <div className="sm:w-[425px] w-[350px] relative sm:top-[60px] top-[80px] sm:h-[425px] h-[350px] bg-[#ccddea] flex items-center justify-center rounded-full">
          <img src="/profile3.jpg" className="rounded-full sm:w-[400px] w-[325px] sm:h-[400px] h-[325px]" alt="" />
        </div>
    

      <div className='absolute z-[10] bottom-10  w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
