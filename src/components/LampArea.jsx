'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GoProjectSymlink } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiOpensourcehardware } from "react-icons/si";
import { MdAssuredWorkload } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";

const LampArea = () => {
    const lampAreaRef = useRef(null);
    const intervalRef = useRef(null);
    const [data, setData] = useState({s1 : false, s2 : false, s3 : false, s4 : false, s5 : false, s6 : false});
    const [idx, setIdx] = useState(null);
    const [show, setShow] = useState(false);

    const describe = [<div className="source-code">Solved <span className="relative light-blue">950+</span> Questions of Data Structures and Algorithms on Leetcode</div>, 
        <div className="source-code">Contributed and Committed <span className="relative light-blue">380+</span> Repositories on Github actively</div>,
        <div className="source-code">Worked on <span className="relative light-blue">20+</span> Projects developing the codebase and services</div>, 
        <div className="source-code">Demonstrated expertise by resolving <span className="relative light-blue">8+</span> bugs in Open Source and as a participant in Hactoberfest</div>, 
        <div className="source-code">Grabbed and collaborated with <span className="relative light-blue">2+</span> Internships for escalation of skills</div>, 
        <div className="source-code">Maintained steady <span className="relative light-blue">9+</span> Grade point throughout the University Academics</div>];
    const Icons = [<SiLeetcode />, <FaGithub /> ,<GoProjectSymlink />, <SiOpensourcehardware />, <MdAssuredWorkload />, <FaSchool />]

    const nowShootStars = (isVisible) => {
        if (isVisible) {
            const canvas = document.getElementById('canvas1');
            intervalRef.current = setInterval(() => {
                const spantag = document.createElement('span');
                spantag.className = 'shooting-star';
                const size = 4;
                spantag.style.width = `${size}px`;
                spantag.style.height = `${size}px`;
                spantag.style.left = `${(Math.random() * window.innerWidth)-200}px`;
                canvas.appendChild(spantag);
                setTimeout(() => {
                    spantag.remove();
                }, 3000);
            }, 200);
        } else {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisibleNow = entry.isIntersecting;
                setShow(true);
                nowShootStars(isVisibleNow);
            },
            { threshold: 0.1 }
        );

        if (lampAreaRef.current) {
            observer.observe(lampAreaRef.current);
        }

        return () => {
            if (lampAreaRef.current) {
                setShow(false);
                observer.unobserve(lampAreaRef.current);
            }
            clearInterval(intervalRef.current);
        };
    }, []);

    function setStateData(stateKey, index) {
        setData(prevState => ({
            ...prevState,
            [stateKey]: true
        }));
        setIdx(index);
    }

    function resetAllStates() {
        setData(prevState => {
            const newState = Object.fromEntries(
                Object.keys(prevState).map(key => [key, false])
            );
            return newState;
        });
        setIdx(null);
    }

    return (
        <section 
            ref={lampAreaRef} 
            className="relative w-screen flex flex-col justify-center items-center pt-8 pb-8 h-[48rem] md:h-[56rem] lg:h-[48rem] gap-y-10"
            id="back-area"
        >   {show && <motion.div className="relative w-[96%] h-[8%] flex flex-row justify-center items-center deep-blue-bg rounded-2xl p-3" initial={{opacity : 0}}
            animate={{opacity : 1}}
            transition={{type : "tween", ease : "ease", duration : 1}}>
                <p className="relative fira-code text-lg md:text-2xl lg:text-5xl font-bold">Achievements</p>
            </motion.div>}
            <section id="canvas1" className="relative w-[96%] h-[90%] flex flex-col lg:flex-row gap-x-2 md:gap-x-4 lg:gap-x-6">
                <section className={`relative w-full lg:w-[33%] h-[49%] md:h-full flex flex-col justify-around items-center`}>
                    <div className={`relative w-[95%] text-center fira-code text-md md:text-xl lg:text-3xl md:pt-3 md:pb-3 ${data.s1 ? 'change-bg' : 'revert'}`}
                        onMouseEnter={() => setStateData('s1', 0)} 
                        onMouseLeave={() => resetAllStates()}>Leetcode</div>
                    <div className={`relative w-[95%] text-center fira-code text-md md:text-xl lg:text-3xl md:pt-3 md:pb-3 ${data.s2 ? 'change-bg' : 'revert'}`} 
                        onMouseEnter={() => setStateData('s2', 1)} 
                        onMouseLeave={() => resetAllStates()}>Github</div>
                    <div className={`relative w-[95%] text-center fira-code text-md md:text-xl lg:text-3xl md:pt-3 md:pb-3 ${data.s3 ? 'change-bg' : 'revert'}`} 
                        onMouseEnter={() => setStateData('s3', 2)} 
                        onMouseLeave={() => resetAllStates()}>Projects</div>
                    <div className={`relative w-[95%] text-center fira-code text-md md:text-xl lg:text-3xl md:pt-3 md:pb-3 ${data.s4 ? 'change-bg' : 'revert'}`}
                        onMouseEnter={() => setStateData('s4', 3)} 
                        onMouseLeave={() => resetAllStates()}>Open Source</div>
                    <div className={`relative w-[95%] text-center fira-code text-md md:text-xl lg:text-3xl md:pt-3 md:pb-3 ${data.s5 ? 'change-bg' : 'revert'}`}
                        onMouseEnter={() => setStateData('s5', 4)} 
                        onMouseLeave={() => resetAllStates()}>Internships</div>
                    <div className={`relative w-[95%] text-center fira-code text-md md:text-xl lg:text-3xl md:pt-3 md:pb-3 ${data.s6 ? 'change-bg' : 'revert'}`}
                        onMouseEnter={() => setStateData('s6', 5)} 
                        onMouseLeave={() => resetAllStates()}>Academics</div>
                </section>
                <section className="relative lg:w-[66%] h-[50%] md:h-full flex flex-row justify-center items-center">
                    <motion.div 
                        className="relative w-[75%] h-[75%] flex flex-col fira-code text-xl md:text-2xl lg:text-4xl rounded-2xl z-50"
                        initial={{ opacity: 0}}
                        animate={idx !== null ? {opacity : 1, background : "linear-gradient(to bottom right, rgba(15, 15, 15, 0.25) 70%, rgba(8, 102, 242, 0.9) 30%"}
                        : {opacity : 0, background : "linear-gradient(to bottom right, rgba(15, 15, 15, 0.25) 20%, rgba(8, 102, 242, 0.9) 80%"}}
                        transition={{ duration: 1 }}
                        key={idx}
                    >
                        <div className="relative p-6 md:p-10 lg:p-24 text-2xl md:text-4xl lg:text-6xl light-blue">{Icons[idx]}</div>
                        <div className="relative p-2 md:p-4 lg:p-6 text-lg md:text-xl lg:text-3xl text-center pl-4 pr-4 md:pl-6 md:pr-6 lg:pl-10 lg:pr-10">{describe[idx]}</div>
                    </motion.div>
                </section>
            </section>
        </section>
    );
};

export default LampArea;
