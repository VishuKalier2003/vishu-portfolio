'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "../components/ui/flip-words";

const Information = () => {
  const [isHovered, setIsHovered] = useState(false);
  const units = ["Artificial Intelligence", "Machine Learning", "Software Development"]
  const tenses = ["Past", "Present", "Future"]
  const works = ["worked", "works", "working"]

  return (
    <section
      className='relative w-screen h-screen z-20 flex flex-row justify-center items-center'
      onMouseEnter={() => setIsHovered(true)}  // Trigger animation on hover
      onMouseLeave={() => setIsHovered(false)} // Revert animation on leave
    >
      <motion.div
        className="relative w-1/2 deep-blue-bg h-screen z-1000 flex flex-row justify-end items-center pr-4"
        initial={{ x: "0vw", backgroundColor : "rgba(6, 32, 86, 0.95)" }}
        animate={isHovered ? { x: "-50vw" , backgroundColor : "rgba(15, 15, 15, 0.25)" } : { x: "0vw", backgroundColor : "rgba(6, 32, 86, 0.95)" }}  // Slide in on hover, revert on leave
        transition={{ duration: 1.5, ease: "easeInOut", delay : 1 }}
      >
        <p className="absolute z-50 text-lg md:text-[3rem] lg:text-[6rem] fira-code">A <span className="relative text-lg md:text-[3rem] lg:text-[6rem] light-blue z-50 fira-code">little</span> bit</p>
      </motion.div>

      {/* Second div sliding right */}
      <motion.div
        className="relative w-1/2 deep-blue-bg h-screen z-1000 flex flex-row justify-start items-center pl-4"
        initial={{ x: "0vw", backgroundColor : "rgba(6, 32, 86, 0.95)"}}  // Start off-screen
        animate={isHovered ? { x: "50vw", backgroundColor : "rgba(15, 15, 15, 0.25)" } : { x: "0vw", backgroundColor : "rgba(6, 32, 86, 0.95)" }}  // Slide in on hover, revert on leave
        transition={{ duration: 1.5, ease: "easeInOut", delay : 1 }}  // Customize transition timing
      >
        <p className="absolute z-50 text-lg md:text-[3rem] lg:text-[6rem] fira-code">About <span className="relative z-50 fira-code light-blue text-lg md:text-[3rem] lg:text-[6rem]">Me</span></p>
      </motion.div>
      <motion.div className="absolute w-2/3 text-4xl fira-code font-light"
      initial={{opacity : 0}}
      animate={isHovered ? {opacity : 1} : {opacity : 0}}
      transition={{duration: 1, ease : "easeInOut", delay : 2}}>
      <div className="h-[40rem] flex flex-row w-full justify-center items-center px-4">
      <div className="text-lg md:text-2xl lg:text-4xl mx-auto w-full font-normal fira-code">
        An Enthusiast expert in
        <FlipWords className="relative light-blue font-bold" words={units} /> <br />
        and worked on multiple projects. Always ready to showcase the skills at hand. Always <FlipWords className="relative light-blue font-bold" words={works} /> <br />
        towards goals of 
         <FlipWords className="relative light-blue font-bold" words={tenses} />
      </div>
    </div>
      </motion.div>
    </section>
  );
}

export default Information;
