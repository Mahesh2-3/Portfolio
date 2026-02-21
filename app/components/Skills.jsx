import { TECH, SKILLS_CONTENT } from "../Constants";
import useFadeInAnimation from "./hooks/FadeInAnimation";
import Image from "next/image";

const Skills = () => {
  useFadeInAnimation();

  return (
    <div
      id="skills"
      className="w-full h-full min-h-screen flex flex-col items-center justify-evenly pb-10"
    >
      <h1 className="fade-in pl-10 w-full sm:text-start text-center heading">
        {SKILLS_CONTENT.heading}
      </h1>
      <div className="w-fit flex items-center p-10 rounded-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-12 gap-8">
          {TECH.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="fade-in gap-2 tech-icon group relative flex flex-col cursor-pointer sm:backdrop-blur-lg backdrop-blur-0 items-center justify-center rounded-xl"
            >
              {/* Glow element (behind the card) */}
              <div
                className="sm:block hidden absolute  rounded-xl w-[80px] h-[80px] opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                style={{
                  background: tech.color,
                }}
              ></div>

              {/* Actual glass card */}
              <div className="relative sm:transition-transform will-change-transform sm:hover:shadow-[0px_4px_0px_4px_#414141] ease-in-out duration-700 sm:hover:translate-y-[-10px]  w-[120px] h-[120px] rounded-xl border bg-violet3/10 border-violet1/20 p-7 flex items-center justify-center">
                <Image
                  width={64}
                  height={64}
                  src={tech.src}
                  alt={tech.name}
                  loading="lazy"
                  className="sm:w-16 w-12 h-auto"
                />
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
