'use client';
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Connect = ({ open }) => {
    return (
        <motion.div
            initial={{ x: "100vw", opacity: 0 }}   // Initial state (off-screen)
            animate={{ x: open ? "0vw" : "100vw", opacity: open ? 1 : 0 }}   // Animate to visible or hidden
            transition={{ duration: 0.5, ease: "easeInOut" }}  // Transition settings
            className="fixed top-0 left-3/4 h-screen w-1/4 deep-blue-bg z-50 rounded-3xl"
        >
            <section className="relative w-full white-shadow rounded-3xl h-full flex flex-col justify-evenly items-center">
                <a href="https://wa.me/7300764957" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-6xl light-blue z-50 scaling" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61551733637476" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-6xl light-blue z-50 scaling" />
                </a>
                <a href="https://www.linkedin.com/in/vishukalier18082003/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-6xl light-blue z-50 scaling" />
                </a>
                <a href="https://github.com/VishuKalier2003" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-6xl light-blue z-50 scaling" />
                </a>
            </section>
        </motion.div>
    );
}

export default Connect;
