'use client';
import React, { useState } from "react";
import {FaFacebook, FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {motion} from 'framer-motion';

const Connect = () => {
    const [click, setClick] = useState(false);
    function mouseClick() {
        setClick(!click);
    }
    return(
        <section className="relative w-32 lg:w-40 h-12">
            <div className={`source-code text-center text-md md:text-2xl z-50 cursor-pointer h-12 light-blue-bg pt-2 black rounded-xl 
                font-normal md:font-bold ${click ? 'tracking-widest' : '' }`}
            onClick={() => mouseClick()}>{!click ? "Connect" : "Wait"}</div>
            {click && <motion.div className={`absolute top-0 left-2 z-10 w-32 md:w-40 lg:w-60 flex flex-row justify-around items-center h-12 light-blue-bg}`}
            initial={{x : 0, opacity : 0}}
            animate={{x : '10rem', opacity : 1}}
            transition={{type : "spring", duration : 1, delay : 0.25}}>
                <a href="https://wa.me/7300764957" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-4xl light-blue scaling" />
                </a>
                <a href="https://www.linkedin.com/in/vishukalier18082003/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl light-blue scaling" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61551733637476" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-4xl light-blue scaling" />
                </a>
                <a href="https://github.com/VishuKalier2003" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl light-blue scaling" />
                </a>
            </motion.div>
            }
        </section>
    )
}

export default Connect;