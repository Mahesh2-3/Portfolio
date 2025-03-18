"use client"
import "./page.css"
import { motion } from "framer-motion";
import React from 'react'


export default function Home() {

  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970
    );
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}  // Start fully transparent and 50px lower
        animate={{ opacity: 1, y: 0 }}  // Fade in and move up to normal position
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div>
          <div className="flex lg:flex-row lg:gap-40 gap-14 flex-col justify-center items-center h-[90vh]">
            <div className="flex flex-col gap-6 items-center   h-[350px]">
              <img className="hover:shadow-[0_0_40px_3px_rgba(0,24,239,0.3)] rounded-[50%] w-[350px] h-[350px] sm:scale-100 scale-[0.8]" src="./profile3.jpg" alt="" />
              <h1 className="text-4xl hidden lg:block">MAHESH BABU</h1>
            </div>
            <div className=" scale-[0.8] min-w-[450px] sm:scale-[1]">
              <div className="detcard  h-[350px] xl-w-[500px] min-w-[450px] bg-slate-500 ">
                <ul className="detcard2 flex flex-col py-6 sm:px-8 px-3 gap-6 h-[350px] min-w-[450px] w-[100%]">
                  <li className="flex items-center">
                    <span className="font-bold text-2xl w-[200px]">Name</span>
                    <span className="text-xl sm:text-2xl">: Karna. Mahesh Babu</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-2xl w-[200px]">Age</span>
                    <span className="text-xl sm:text-2xl">
                      : {calculateAge(new Date(2007, 1, 3))} years
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-2xl w-[200px]">Education</span>
                    <span className="text-xl sm:text-2xl">: BTech 1st Year</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-2xl w-[200px]">Best Skill</span>
                    <span className="text-xl sm:text-2xl">: Web Developing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-2xl w-[200px]">Current Place</span>
                    <span className="text-xl sm:text-2xl">: Vishakapatnam 📍</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-2xl w-[200px]">Native Place</span>
                    <span className="text-xl sm:text-2xl">: Bapatla 📍</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="text-5xl text-center my-10">My Journey ↓</div>
            <div className=" border-b  pb-[100px] w-[80%] mx-auto flex items-center gap-7 xl:flex-row flex-col justify-evenly my-[100px] ">
              <img className="w-[450px]" src="./chirala.jpg" alt="" />
              <p className="leading-10 text-xl xl:w-[400px] lg:w-[80%] w-[100%]">My name is Mahesh. I was born on February 3, 2007, in Chirala Mandal, Bapatla District. I completed my schooling in Chirala up to my intermediate second year. In the Andhra Pradesh Intermediate Board exams, I achieved a score of 97%</p>
            </div>
            <div className=" border-b  pb-[100px] w-[80%] mx-auto flex items-center gap-7 xl:flex-row flex-col-reverse justify-evenly mb-[100px] ">
              <p className="leading-10 text-xl xl:w-[400px] lg:w-[80%] w-[100%]">After that, I secured a rank of 1,991 in the AP EAMCET exam and moved to Visakhapatnam, as I obtained a seat at Gayatri Vidya Parishad based on my rank. Currently, I am pursuing my first year of B.Tech in Computer Science and Engineering.
              </p>
              <img className="w-[450px]" src="./vizag.jpg" alt="" />
            </div>
            <div className=" border-b  pb-[100px] w-[80%] mx-auto flex items-center gap-7 xl:flex-row flex-col justify-evenly">
              <img className="w-[450px]" src="./coder.jpg" alt="" />
              <p className="leading-10 text-xl xl:w-[400px] lg:w-[80%] w-[100%]">Currently, I am focused on expanding my professional network and enhancing my technical skills. I have nearly completed a Full-Stack Web Development course, gaining expertise in both front-end and back-end technologies.</p>

            </div>
          </div>
          <div className="text-gray-400 flex justify-center items-center text-xl h-[30vh] ">
            Want to see my projects <a className="underline underline-offset-8 text-white px-3" href={`${process.env.NEXT_PUBLIC_URL}/myprojects`}>Click Me!</a>
          </div>
        </div>
      </motion.div >
    </>
  );
}
