'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const GridSpace = () => {
    const [inside, setInside] = useState(false);

    function enterEvent() {
        setInside(true);
    }

    function leaveEvent() {
        setInside(false);
    }

    return(
        <section className="relative left-[5%] w-[90%] gap-10 h-screen lg:h-[40rem] grid grid-cols-1 lg:grid-cols-2 p-8"
        onMouseEnter={() => {enterEvent()}} onMouseLeave={() => {leaveEvent()}}>
            <motion.div className="relative w-auto h-full flex flex-row justify-center items-center change-bg1 rounded-3xl"
            initial={{left : '-100vw'}} animate={inside ? {left : '0px'} : {left : '-100vw'}}
            transition={{type : 'tween', ease : 'easeInOut', duration : 0.5}}>
                <p className="absolute text-[2rem] md:text-5xl lg:text-[6rem] faded-white text-center">AI Club</p>
                <p className="absolute text-[2rem] md:text-5xl lg:text-[4rem] light-blue text-center">Core Member</p>
            </motion.div>
            <motion.div className="relative w-auto h-full flex flex-row justify-center items-center change-bg1 rounded-3xl"
            initial={{left : '100vw'}} animate={inside ? {left : '0px'} : {left : '100vw'}}
            transition={{type : 'tween', ease : 'easeInOut', duration : 0.5}}>
                <p className="absolute text-[2rem] md:text-5xl lg:text-[6rem] text-center faded-white">Blockchain Club</p>
                <p className="absolute text-[2rem] md:text-5xl lg:text-[4rem] text-center light-blue">R&D Head</p>
            </motion.div>
        </section>
    )
}

export default GridSpace;