"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    const [state, setState] = useState({ s1: false, s2: false, s3: false, s4: false, s5: false, s6: false });

    const mouseEnterOn = (index) => {
        setState((prevState) => ({
            ...prevState,
            [`s${index}`]: true,
        }));
    };

    const mouseEnterOff = (index) => {
        setState((prevState) => ({
            ...prevState,
            [`s${index}`]: false,
        }));
    };

    return (
        <motion.div
            className="relative w-screen flex flex-row h-32 md:h-36 rounded-xl lg:rounded-2xl black-bg-25"
            initial={{ x: '-100vw' }}
            animate={{ x: '0vw' }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 5 }}
        >
            <div className="relative w-1/4 h-full flex flex-row justify-center items-center">
                <motion.div
                    className="relative flex flex-row"
                    initial={{ y: '-20vh' }}
                    animate={{ y: '0vh' }}
                    transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 5.5 }}
                >
                    <Link href="/">
                        <p className="relative text-xl md:text-3xl lg:text-4xl fira-code font-bold lg:font-100 high-blue cursor-pointer">
                            Vishu
                        </p>
                    </Link>
                    <p className="relative text-xl md:text-3xl lg:text-4xl fira-code lg:font-100 left-1">K.</p>
                </motion.div>
            </div>

            <motion.div
                className="relative w-3/4 h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-evenly items-center gap-x-8"
                initial={{ y: '-20vh' }}
                animate={{ y: '0vh' }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 6 }}
            >
                <Link href="/projects">
                    <button
                        className={`relative w-24 font-extralight lg:font-normal text-lg ${state.s1 ? 'light-blue' : ''}`}
                        onMouseEnter={() => mouseEnterOn(1)}
                        onMouseLeave={() => mouseEnterOff(1)}
                    >
                        Projects
                        <div
                            className={`relative light-blue-bg rounded-xl top-1 transition-all duration-300 h-0 ease-in-out ${state.s1 ? 'h-0.5' : ''
                                }`}
                        ></div>
                    </button>
                </Link>

                <Link href="/resume">
                    <button
                        className={`relative w-24 font-extralight lg:font-normal text-lg ${state.s2 ? 'light-blue' : ''}`}
                        onMouseEnter={() => mouseEnterOn(2)}
                        onMouseLeave={() => mouseEnterOff(2)}
                    >
                        Resume
                        <div
                            className={`relative light-blue-bg top-1 transition-all duration-300 h-0 ease-in-out ${state.s2 ? 'h-0.5' : ''
                                }`}
                        ></div>
                    </button>
                </Link>

                <Link href="/services">
                    <button
                        className={`relative w-24 font-extralight lg:font-normal text-lg ${state.s3 ? 'light-blue' : ''}`}
                        onMouseEnter={() => mouseEnterOn(3)}
                        onMouseLeave={() => mouseEnterOff(3)}
                    >
                        Services
                        <div
                            className={`relative light-blue-bg top-1 transition-all duration-300 h-0 ease-in-out ${state.s3 ? 'h-0.5' : ''
                                }`}
                        ></div>
                    </button>
                </Link>

                <Link href="/roles">
                    <button
                        className={`relative w-24 font-extralight lg:font-normal text-lg ${state.s4 ? 'light-blue' : ''}`}
                        onMouseEnter={() => mouseEnterOn(4)}
                        onMouseLeave={() => mouseEnterOff(4)}
                    >
                        Roles
                        <div
                            className={`relative light-blue-bg top-1 transition-all duration-300 h-0 ease-in-out ${state.s4 ? 'h-0.5' : ''
                                }`}
                        ></div>
                    </button>
                </Link>

                <Link href="/about">
                    <button
                        className={`relative w-24 font-extralight lg:font-normal text-lg ${state.s5 ? 'light-blue' : ''}`}
                        onMouseEnter={() => mouseEnterOn(5)}
                        onMouseLeave={() => mouseEnterOff(5)}
                    >
                        About
                        <div
                            className={`relative light-blue-bg top-1 transition-all duration-300 h-0 ease-in-out ${state.s5 ? 'h-0.5' : ''
                                }`}
                        ></div>
                    </button>
                </Link>

                <Link href="/hire">
                    <button
                        className={`relative w-24 font-extralight lg:font-normal text-lg ${state.s6 ? 'light-blue' : ''}`}
                        onMouseEnter={() => mouseEnterOn(6)}
                        onMouseLeave={() => mouseEnterOff(6)}
                    >
                        Hire Me
                        <div
                            className={`relative light-blue-bg top-1 transition-all duration-300 h-0 ease-in-out ${state.s6 ? 'h-0.5' : ''
                                }`}
                        ></div>
                    </button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
