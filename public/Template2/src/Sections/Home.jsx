import React from "react";
import { hero } from "../constants";

const Home = () => {
  return (
    <div className="w-full hero min-h-[600px] xl:bg-[linear-gradient(110deg,#D7D7D7_50%,#000_50%)] lg:bg-[linear-gradient(110deg,#D7D7D7_45%,#D7D7D7_45%,#000_30%,#000_30%)] bg-black h-screen flex justify-between overflow-hidden relative">
      <div className="font-secondary lg:px-20 lg:text-black text-white lg:bg-transparent bg-[#59595978] lg:text=black px-5 lg:h-full h-fit py-20 text-3xl lg:w-[50%] w-full lg:relative absolute bottom-0 flex flex-col items-start justify-center">
        <div className="font-bold">
          HI, I am
          <br />
          <span className="sm:text-8xl text-5xl font-bold font-primary">
            {hero.name}
          </span>
        </div>
        <div className="lg:text-light text-white font-bold">{hero.role}</div>
      </div>
      <div className="h-full lg:w-[50%] w-full flex items-end justify-end">
        <img
          className="sm:w-[640px] w-full sm:h-[720px] object-contain"
          src="/profile.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Home;
