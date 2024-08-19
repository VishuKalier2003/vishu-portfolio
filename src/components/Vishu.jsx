'use client';
import React from "react";
import { motion } from "framer-motion";
import Connect from "./Connect";

const Home = () => {

    return (
        <motion.div className="relative left-0 top-60 w-full flex flex-col justify-start items-center ml-8"
        initial={{x : '100vw'}}
        animate={{x : '0vw'}}
        transition={{type : 'tween', duration : 1, delay : 6}}>
            <div className="relative w-full">
            <p className="p-2 md:p-4 text-2xl md:text-3xl lg:text-6xl font-extrabold fira-code">I am</p>
            <p className="p-2 md:p-4 text-2xl md:text-3xl lg:text-6xl font-extrabold high-blue fira-code">Vishu Kalier</p>
            </div>
            <div className="relative w-full p-2 md:p-4 flex flex-row justify-start items-center">
                <Connect />
            </div>
        </motion.div>
    );
}

export default Home;
