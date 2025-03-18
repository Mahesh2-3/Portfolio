"use client"
import React from 'react'
import { motion } from "framer-motion";

const page = () => {
  // const [first, setfirst] = useState(second)
  return (
    <>

      <motion.div
        initial={{ opacity: 0, y: 50 }}  // Start fully transparent and 50px lower
        animate={{ opacity: 1, y: 0 }}  // Fade in and move up to normal position
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div>
          <div className='md:h-[90vh] h-fit flex flex-col items-center xl:justify-around justify-between mb-[100px] '>
            <div className='text-3xl  font-bold border-b-2 pb-2 w-[370px] text-center '>Welcome To My Projects</div>
            <img className='mx-auto hidden md:flex' src="./projects.png" alt="" />
          </div>
          <div>
            <div className="border-b pb-[100px] w-[80%] mx-auto flex justify-evenly items-center gap-7 my-[100px] lg:flex-row flex-col-reverse">
              <p className="leading-10 text-3xl text-[#FFD700] drop-shadow-[0px_0px_40px_rgba(255,255,255,1)] font-bold m-auto">AOT-Game</p>
              <a target='__blank__' className='lg:w-[50%] w-[100%] ' href="https://mahesh2-3.github.io/AOT-Game/">
                {/* <img className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " src="./twit.png" alt="" /> */}
                <video className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " playsInline autoPlay id="myVideo" loop>
                  <source src="aot.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div className="border-b pb-[100px] w-[80%] mx-auto flex justify-evenly items-center gap-7 mb-[100px] lg:flex-row flex-col">
              <a target='__blank__' className='lg:w-[50%] w-[100%]' href="https://mahesh2-3.github.io/Password-Manager/">
                {/* <img className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " src="./pass.png" alt="" /> */}
                <video className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " playsInline autoPlay id="myVideo" loop>
                  <source src="./password.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <p className="leading-10 text-3xl text-[#FFD700] drop-shadow-[0px_0px_40px_rgba(255,255,255,1)] font-bold m-auto">Password Manager</p>
            </div>
            <div className="border-b pb-[100px] w-[80%] mx-auto flex justify-evenly items-center gap-7 mb-[100px] lg:flex-row flex-col-reverse">
              <p className="leading-10 text-3xl text-[#FFD700] drop-shadow-[0px_0px_40px_rgba(255,255,255,1)] font-bold m-auto">Twitter Clone</p>
              <a target='__blank__' className='lg:w-[50%] w-[100%] ' href="https://mahesh2-3.github.io/Twitter-Clone/">
                {/* <img className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " src="./twit.png" alt="" /> */}
                <video className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " playsInline autoPlay id="myVideo" loop>
                  <source src="twittter.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div className="border-b pb-[100px] w-[80%] mx-auto flex justify-evenly items-center gap-7 mb-[100px] lg:flex-row flex-col">
              <a target='__blank__' className='lg:w-[50%] w-[100%] ' href="https://mahesh2-3.github.io/Spotify-Clone/">
                {/* <img className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " src="./spot.png" alt="" /> */}
                <video className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " playsInline autoPlay id="myVideo" loop>
                  <source src="spotify.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <p className="leading-10 text-3xl text-[#FFD700] drop-shadow-[0px_0px_40px_rgba(255,255,255,1)] font-bold m-auto">Spotify Clone</p>

            </div>
            <div className="border-b pb-[50px] w-[80%] mx-auto flex justify-evenly items-center gap-7 mb-[100px]  lg:flex-row flex-col-reverse">
              <p className="leading-10 text-3xl text-[#FFD700] drop-shadow-[0px_0px_40px_rgba(255,255,255,1)] font-bold m-auto">To do List</p>
              <a target='__blank__' className='lg:w-[50%] w-[100%]] ' href="https://mahesh2-3.github.io/To-do-List/">
                {/* <img className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " src="./todo.png" alt="" /> */}
                <video className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " playsInline autoPlay id="myVideo" loop>
                  <source src="todo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div className="border-b pb-[50px] w-[80%] mx-auto flex justify-evenly items-center gap-7 mb-[100px]  lg:flex-row flex-col">
              <a target='__blank__' className='lg:w-[50%] w-[100%]] ' href="https://mahesh2-3.github.io/Netflix-Clone/">
                {/* <img className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " src="./netflix.png" alt="" /> */}
                <video className="shadow-[0px_0px_17px_2px_rgba(255,255,255,0.8)] w-[100%] cursor-pointer " playsInline autoPlay loop id="myVideo">
                  <source src="netflix.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <p className="leading-10 text-3xl text-[#FFD700] drop-shadow-[0px_0px_40px_rgba(255,255,255,1)] font-bold m-auto">Netflix-Clone</p>
            </div>
          </div>
          <div className="text-gray-400 flex justify-center items-center text-xl flex-col gap-7 w-[100vw] ">
            <span className='text-center w-[100%] sm:text-xl text-sm '> For My Projects Links Click Any Image or Click Here </span>
            <div className='flex flex-wrap gap-5 items-center justify-center'>
              <div>
                <a className="underline underline-offset-8 text-white px-3" target='__blank__' href="https://mahesh2-3.github.io/Password-Manager/">Password Manager </a>
                <a className="underline underline-offset-8 text-white px-3" target='__blank__' href="https://mahesh2-3.github.io/AOT-Game/">AOT-Game </a>
              </div>
              <div>
                <a className="underline underline-offset-8 text-white px-3" target='__blank__' href="https://mahesh2-3.github.io/Twitter-Clone/">Twitter Clone </a>
                <a className="underline underline-offset-8 text-white px-3" target='__blank__' href="https://mahesh2-3.github.io/Spotify-Clone/">Spotify Clone </a>
              </div>
              <div>
                <a className="underline underline-offset-8 text-white px-3" target='__blank__' href="https://mahesh2-3.github.io/To-do-List/">To do List </a>
                <a className="underline underline-offset-8 text-white px-3" target='__blank__' href="https://mahesh2-3.github.io/Netflix-Clone/">Netflix Clone </a>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className="text-gray-400 flex justify-center items-center text-xl h-[20vh] w-[100%] gap-3 sm:flex-row flex-col">
            <span> "Let's Work Together! </span><span><a className="underline underline-offset-8 text-white px-3" href={`${process.env.NEXT_PUBLIC_URL}/contactme`}>Click This</a> To Contact Me"</span>
          </div>
          <div className='mb-5 text-center text-gray-400'>Note for Visitors: Due to Google restrictions, I'm unable to deploy my projects through GitHub. However, you can explore my code and contributions directly on my GitHub repository. 🚀</div>
        </div>
      </motion.div>
    </>
  )
}

export default page