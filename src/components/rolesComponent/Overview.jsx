'use client';

import { useRef, useState } from "react";
import ThreeScene from "../3D/basic";
import { motion } from "framer-motion";

const Overview = () => {
    const containerRef = useRef(null);
    const [In, setIn] = useState(false);

    function entered() {
        setIn(true);
    }
    
    return(
        <section className="relative w-screen h-full pt-8 pb-8 flex flex-col lg:flex-row justify-center items-center" onMouseEnter={() => {entered()}}>
            <motion.div className="relative w-full lg:w-[30rem] h-[22rem] lg:h-[30rem] hover-opacity"
             ref={containerRef}>
            <ThreeScene containerRef={containerRef}  />
          </motion.div>
          <motion.div className="relative w-[98%] h-[98%] flex flex-col justify-center items-center fira-code text-xl md:text-3xl lg:text-[8rem] text-center spacing-large"
          initial={{opacity : 0}} animate = {In ? {opacity : 1} : {opacity : 0}} transition={{type : "tween", duration : 1, delay : 0.5}}>
            <p className="relative fira-code text-4xl md:text-6xl lg:text-[8rem] text-center spacing-low md:spacing-medium lg:spacing-large w-full lg:h-[8rem] faded-white">Develop, Debug</p>
            <p className="relative fira-code text-4xl md:text-6xl lg:text-[8rem] text-center spacing-low md:spacing-medium lg:spacing-large w-full lg:h-[8rem] faded-white">and Deploy</p>
            <p className="absolute fira-code text-4xl md:text-6xl lg:text-[8rem] text-center spacing-low md:spacing-medium lg:spacing-large w-full lg:h-[8rem] light-blue">Code</p>
          </motion.div>
        </section>
    )
}

export default Overview;