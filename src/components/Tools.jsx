'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Connect from "./Connect";

const Tools = () => {
    const [click, setClick] = useState(false);

    const buttonClicked = () => {
        setClick(!click);
    };

    return (
        <section className="relative h-16 flex flex-row justify-center items-center w-full">
            <motion.button
                initial={{ x: 0 }} // Initial position
                animate={{ x: click ? "-15vw" : 0 }} // Move by w-1/4 (25% of viewport width)
                transition={{ type: "spring", stiffness: 120, duration: 0.5 }} // Smooth transition with spring effect
                className="relative w-32 h-12 black text-lg md:text-xl light-blue-bg rounded-xl 
                    md:rounded-2xl button-outer left-1/3 fira-code font-25 z-1000"
                onClick={buttonClicked}
            >
                {click ? "Back" : "Connect"}
            </motion.button>

            <Connect open={click} />
        </section>
    );
};

export default Tools;
