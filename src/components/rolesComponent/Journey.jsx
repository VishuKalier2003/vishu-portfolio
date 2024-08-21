'use client';
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Journey = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // First animation
            await controls1.start({ y: '0vh', width: '33%', border : '0px solid rgba(15, 15, 15, 0.9)', transition: { duration: 1, delay: 4 } });
            await controls1.start({ y: '0vh', width: '33%', border : '0px solid rgba(56, 189, 248, 0.9)', transition: { duration: 0.1 } });
            await controls1.start({ width: '100%', border : '3px solid rgba(56, 189, 248, 0.9)', transition: { duration: 1 } });

            await controls2.start({ y: '0vh', width: '33%', border : '0px solid rgba(15, 15, 15, 0.9)', transition: { duration: 1 } });
            await controls2.start({ y: '0vh', width: '33%', border : '0px solid rgba(56, 189, 248, 0.9)', transition: { duration: 0.1 } });
            await controls2.start({ width: '100%', border : '3px solid rgba(56, 189, 248, 0.9)', transition: { duration: 1 } });

            await controls3.start({ y: '0vh', width: '33%', border : '0px solid rgba(15, 15, 15, 0.9)', transition: { duration: 1 } });
            await controls3.start({ y: '0vh', width: '33%', border : '0px solid rgba(56, 189, 248, 0.9)', transition: { duration: 0.1 } });
            await controls3.start({ width: '100%', border : '3px solid rgba(56, 189, 248, 0.9)', transition: { duration: 1 } });
        };
        sequence();
    }, [controls1, controls2, controls3]);

    return (
        <section className="relative w-screen h-auto flex flex-col justify-center items-center gap-8 mt-6 mb-6">
            <motion.div className="relative deep-blue-bg w-[96%] h-[20%] flex flex-row justify-center items-center fira-code font-bold text-3xl md:text-4xl rounded-2xl"
            initial={{x : '-100vw', backgroundColor : 'transparent'}} animate={{x : '0vw', backgroundColor : 'rgba(6, 32, 86, 0.95)'}} transition={{type : 'tween', ease : "easeIn", duration : 1, delay : 4.5}}>
                Internships
            </motion.div>
            <section className="relative w-[96%] h-[78%] flex flex-col gap-y-6">
                <motion.div 
                    className="relative w-1/3 h-1/3 p-6 rounded-2xl"
                    initial={{ width: '33%' }}
                    animate={controls1}
                >
                        <motion.div className="relative flex flex-row justify-start items-center" 
                        initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1, delay : 6}}>
                        <div className='circle'></div>
                        <div className="relative pl-8 text-xl md:text-3xl lg:text-4xl fira-code">Research Intern, NRSC-ISRO
                        <p className="relative text-md lg:text-xl fira-code light-blue">Sept, 2024 to Oct, 2024</p></div>
                        </motion.div>
                </motion.div>
                <motion.div 
                    className="relative w-1/3 h-1/3 p-6 rounded-2xl"
                    initial={{ width: '33%' }}
                    animate={controls2}
                >
                    <motion.div className="relative flex flex-row justify-start items-center" 
                    initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1, delay : 8}}>
                    <div className='circle'></div>
                        <div className="relative pl-8 text-xl md:text-3xl lg:text-4xl fira-code">Project Lead, Omdena
                        <p className="relative text-md lg:text-xl fira-code light-blue">June, 2023 to June, 2024</p></div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="relative w-1/3 h-1/3 p-6 rounded-2xl"
                    initial={{ width: '33%' }}
                    animate={controls3}
                >
                    <motion.div className="relative flex flex-row justify-start items-center" 
                    initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1, delay : 10}}>
                    <div className='circle'></div>
                        <div className="relative pl-8 text-xl md:text-3xl lg:text-4xl fira-code">Team Lead, Omdena
                        <p className="relative text-md lg:text-xl fira-code light-blue">Jan, 2023 to June, 2023</p></div>
                    </motion.div>
                </motion.div>
            </section>
        </section>
    );
}

export default Journey;
