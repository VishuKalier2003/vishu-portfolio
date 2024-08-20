'use client';
import React from "react"; 
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = ({ page }) => {
    return(
        <section className="relative black-bg-25 w-full h-16">
            <div className="relative m-2 w-[99%] flex flex-row pl-4 pr-4 justify-between items-center">
                <div className='relative flex flex-row items-center gap-x-2 h-14'>
                    <p className="relative light-blue fira-code font-normal">Vishu Kalier</p>
                    <span className="relative h-6 w-[1px] light-blue-bg"></span>
                    <a href="mailto:vishukalier123@gmail.com ">
                        <FaEnvelope className="relative text-2xl light-blue " />
                    </a>
                    <span className="relative h-6 w-[1px] light-blue-bg"></span>
                    <a href="https://wa.me/7300764957" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="relative text-2xl light-blue" />
                    </a>
                    <span className="relative h-6 w-[1px] light-blue-bg"></span>
                    <a href="https://www.linkedin.com/in/vishukalier18082003/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="relative text-2xl light-blue" />
                    </a>
                    <span className="relative h-6 w-[1px] light-blue-bg"></span>
                    <a href="https://www.facebook.com/profile.php?id=61551733637476" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="relative text-2xl light-blue" />
                    </a>
                    <span className="relative h-6 w-[1px] light-blue-bg"></span>
                    <a href="https://github.com/VishuKalier2003" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="relative text-2xl light-blue" />
                    </a>
                </div>
                <div className="relative flex flex-row gap-x-2">
                    <p className="relative fira-code light-blue">Page</p>
                    <span className="relative high-blue">{page}</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;