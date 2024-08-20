'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const wobbleAnimation = {
    initial: { rotate: 0 },
    animate: { rotate: [0, -5, 5, -5, 0] },
    transition: {
        duration: 0.5,
        ease: "easeInOut"
    }
};

const LampArea = () => {
    const [come, setCome] = useState(false);
    return (
        <section className="relative w-screen flex flex-row justify-center items-center pt-8 pb-8" onMouseEnter={() => setCome(true)} onMouseLeave={() => setCome(false)}>
            <motion.div initial={{x : '100vw'}}
            animate={come ? {x : '0vw'} : {x : '100vw'}}
            transition={{type : "spring", ease : "easeInOut", duration : 2, delay : 0.5}}>
            <section className="relative left-2 w-[96%] h-[90%] grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 lg:gap-x-32 gap-y-8">
                {["Solved 900+ problems on Leetcode", "Created 380+ repositories on Github", "Contributed 20+ projects on Open Source", 
                  "Developed 15+ projects from build to deploy", "Worked 2+ Internships gaining experience", "Maintained 9+ Grade Point in Academics"].map((text, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-row justify-center items-center p-6 text-center rounded-2xl h-[16rem] gap-y-6"
                        whileHover="animate"
                        initial="initial"
                        variants={wobbleAnimation}
                    >
                        <p className="fira-code text-3xl">{text.split(" ")[0]} <span className="fira-code text-3xl light-blue">{text.split(" ")[1]} </span>{text.split(" ").slice(2).join(" ")}</p>
                    </motion.div>
                ))}
            </section>
            </motion.div>
        </section>
    )
}

export default LampArea;
