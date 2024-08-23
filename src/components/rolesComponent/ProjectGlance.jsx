'use client';

import { useState, useRef, useEffect } from "react";
import { PiBrainDuotone } from "react-icons/pi";
import { IoIosGitNetwork } from "react-icons/io";
import { DiWebplatform } from "react-icons/di";
import { RiToolsFill } from "react-icons/ri";
import MlIconsSV11 from "./SVGIcons/ml";
import ML2 from "./SVGIcons/ml1";


const ProjectsGlance = () => {

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sectionRefer = useRef(null);
    const imgRef = useRef(null);

    // Arrays
    const icons = [<PiBrainDuotone key="k1" className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 light-blue" />,
        <IoIosGitNetwork key="k2" className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 light-blue" />,
        <DiWebplatform key="k3" className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 light-blue" />,
        <RiToolsFill key="k4" className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 light-blue" />
    ];
    const tech = ["Machine Learning", "Deep Learning", "Web Development", "Software Development"];
    const paragraph = ["Developed many real world projects using Machine Learning Techniques to predict much better result than traditional models.",
        "Contributed to the Neural Networks to solve real world problems in Computer Vision, Natural Language and many more.", 
        "Created Codebases and resolved bugs thereby, extensively integrating Web Development Iceberg to create future-ready projects.", 
        "Designed the Microservices architecture for vast projects to maintain strong retentivity and extensive scalability."
    ]

    const iconsMore = [<MlIconsSV11 key="k1" />, <ML2 key="k2" />, <div></div>, <div></div>]

    const sendData = () => {
        const ele = document.getElementById('visit');
        ele.innerText = "Clicked";
    };

    useEffect(() => {
        const scrollHandle = () => {
            if (sectionRefer.current && imgRef.current) {
                const sectionTop = sectionRefer.current.getBoundingClientRect().top;
                const sectionHeight = sectionRefer.current.getBoundingClientRect().height;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const sectionOffsetTop = sectionRefer.current.offsetTop;
                const scrollPos = Math.max(0, scrollY - sectionOffsetTop);
                const percentageScrolled = scrollPos / (sectionHeight - windowHeight);
                const newTopPos = Math.min(percentageScrolled * (sectionHeight - windowHeight), sectionHeight - windowHeight);
                imgRef.current.style.transform = `translateY(${newTopPos}px)`;

                const sections = ['sec1', 'sec2', 'sec3', 'sec4'];
                let currentIndex = 0;
                sections.forEach((id, index) => {
                    const sectionElement = document.getElementById(id);
                    const sectionRect = sectionElement.getBoundingClientRect();
                    if (sectionRect.top <= windowHeight / 2 && sectionRect.bottom >= windowHeight / 2) {
                        currentIndex = index;
                    }
                });

                setCurrentSectionIndex(currentIndex);
            }
        };

        window.addEventListener('scroll', scrollHandle);
        return () => window.removeEventListener('scroll', scrollHandle);
    }, []);

    useEffect(() => {
        const iconDomainElement = document.getElementById('icon-domain');
        const iconDomainElement1 = document.getElementById('icon-domain1');
        const ele3 = document.getElementById('icon-domain2');
        const ele4 = document.getElementById('icon-domain3');
        if (iconDomainElement && iconDomainElement1) {
            iconDomainElement.classList.add('animate');
            iconDomainElement1.classList.add('animate');
            ele3.classList.add('animate');
            ele4.classList.add('animate');

            const handle = setTimeout(() => {
                iconDomainElement.classList.remove('animate');
                iconDomainElement1.classList.remove('animate');
                ele3.classList.remove('animate');
                ele4.classList.remove('animate');
            }, 500);

            return () => clearTimeout(handle);
        }
    }, [currentSectionIndex]);

    return (
        <section ref={sectionRefer} className='relative outline w-screen h-[400vh] flex flex-col' id="canvas42">
            <div ref={imgRef} className="absolute w-[85%] md:w-[90%] lg:w-[95%] h-[90vh] top-[1%] ml-[20px] md:ml-[40px] outline flex flex-row" id="img-class">
                <div className='absolute w-full h-1/2 md:h-1/3 lg:w-2/3 lg:h-full outline flex flex-row'>
                    <div className='absolute w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 icon-domain outline' id='icon-domain'>
                        {icons[currentSectionIndex]}
                    </div>
                    <div className='relative w-full outline h-full flex flex-col justify-center items-start'>
                        <p className="relative outline fira-code h-8 md:h-10 lg:h-12 text-2xl md:text-4xl lg:text-6xl icon-domain1 md:m-2 pl-4 md:pl-8 lg:pl-12" id='icon-domain1'>{tech[currentSectionIndex]}</p>
                        <p className="relative outline fira-code font-25 h-1/2 text-lg md:text-2xl lg:text-3xl icon-domain2 m-2 pl-4 md:pl-8 lg:pl-12 flex flex-row items-center" id='icon-domain2'>{paragraph[currentSectionIndex]}</p>
                    </div>
                </div>
                <div className='absolute w-full h-1/2 md:h-2/3 lg:w-1/3 lg:h-full outline top-1/2 md:top-1/3 lg:top-0 lg:left-2/3 icon-domain3' id='icon-domain3'>
                    {iconsMore[currentSectionIndex]}
                </div>
            </div>
            <section className='relative outline w-screen h-[100vh]' id='sec1'></section>
            <section className='relative outline w-screen h-[100vh]' id='sec2'></section>
            <section className='relative outline w-screen h-[100vh]' id='sec3'></section>
            <section className='relative outline w-screen h-[100vh]' id='sec4'></section>
        </section>
    );
}

export default ProjectsGlance;
