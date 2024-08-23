"use client"
import { motion } from "framer-motion";


const Slider = () => {
    return (
    <section className="fixed w-screen h-screen top-0 left-0">
        <motion.div
        className="absolute w-screen h-1/5 slider1 black-bg"
        initial={{ x: "-100vw", backgroundColor : "rgba(255, 255, 255, 0.9)" }}
        animate={{ x: 0, backgroundColor : "rgba(15, 15, 15, 0.9)" }}
        transition={{ type: "tween", ease : "easeOut", duration: 2, delay: 4 }}
        ></motion.div>
        <motion.div
        className="absolute w-screen h-1/5 slider2 black-bg"
        initial={{ x: "-100vw", backgroundColor : "rgba(255, 255, 255, 0.9)" }}
        animate={{ x: 0, backgroundColor : "rgba(15, 15, 15, 0.9)" }}
        transition={{ type: "tween", ease : "easeOut", duration: 2, delay: 4.5 }}
        ></motion.div>
        <motion.div
        className="absolute w-screen h-1/5 slider3 black-bg"
        initial={{ x: "-100vw", backgroundColor : "rgba(255, 255, 255, 0.9)" }}
        animate={{ x: 0, backgroundColor : "rgba(15, 15, 15, 0.9)" }}
        transition={{ type: "tween", ease : "easeOut", duration: 2, delay: 5 }}
        ></motion.div>
        <motion.div
        className="absolute w-screen h-1/5 slider4 black-bg"
        initial={{ x: "-100vw", backgroundColor : "rgba(255, 255, 255, 0.9)" }}
        animate={{ x: 0, backgroundColor : "rgba(15, 15, 15, 0.9)" }}
        transition={{ type: "tween", ease : "easeOut", duration: 2, delay: 5.5 }}
        ></motion.div>
        <motion.div
        className="absolute w-screen h-1/5 slider5 black-bg"
        initial={{ x: "-100vw", backgroundColor : "rgba(255, 255, 255, 0.9)" }}
        animate={{ x: 0, backgroundColor : "rgba(15, 15, 15, 0.9)" }}
        transition={{ type: "tween", ease : "easeOut", duration: 2, delay: 6 }}
        ></motion.div>
    </section>
    );
};

export default Slider;
