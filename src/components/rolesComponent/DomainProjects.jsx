import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MyComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const offset = windowHeight - sectionTop;

        // Calculate the percentage of the section that has been scrolled
        const progress = Math.min(Math.max(offset / windowHeight, 0), 1);
        setScrollPosition(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-screen h-screen flex flex-row justify-start items-center">
      <motion.p className='fira-code light-blue text-[3rem] md:text-[4.5rem] lg:text-[6rem] text-center'
        style={{
          x: `${(1 - scrollPosition) * 100}vw`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        Domain Projects at Glance
      </motion.p>
    </section>
  );
}
