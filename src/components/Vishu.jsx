'use client';
import React from "react";
import { motion } from "framer-motion";

const Vishu = () => {

    return (
        <motion.div className="relative left-0 top-60 h-16 w-full flex flex-row justify-start items-center ml-8"
        initial={{x : '100vw'}}
        animate={{x : '0vw'}}
        transition={{type : 'tween', duration : 1, delay : 6}}>
            <p className="p-2 md:p-4 text-2xl md:text-3xl lg:text-6xl font-extrabold fira-code">I'm</p>
            <p className="p-2 md:p-4 text-2xl md:text-3xl lg:text-6xl font-extrabold high-blue fira-code">Vishu Kalier</p>
        </motion.div>
    );
}

export default Vishu;
