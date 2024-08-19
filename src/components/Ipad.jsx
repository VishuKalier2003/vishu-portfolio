"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image1 from '../../public/home-page.png';
import Image2 from '../../public/Page2.png';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export function HeroScrollDemo() {
    const arrayImg = [Image1, Image2]; // Array of images
    const [idx, setIdx] = useState(0);
    const len = arrayImg.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx((prevIdx) => (prevIdx + 1) % len);
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [len]);

  return (
    <div className="relative flex flex-col overflow-hidden top-60 md:top-0 z-0">
      <ContainerScroll
        titleComponent={
          <>
              <div className="relative w-full text-2xl md:text-4xl lg:text-5xl font-bold mt-1 fira-code -top-6 leading-10">
                Fused Style with Creativity
              </div>
          </>
        }
      >
        <div className="relative mx-auto w-full h-full">
          <AnimatePresence>
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={arrayImg[idx]}
                alt="hero"
                width={1400}
                height={700}
                className="rounded-2xl object-cover w-full h-full"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </ContainerScroll>
    </div>
  );
}
