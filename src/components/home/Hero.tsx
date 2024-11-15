import Particles from '../ui/particles';
import RetroGrid from '../ui/retro-grid';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: -100 });
    }
  }, [controls, inView]);

  const our1: JSX.Element = (
    <>
      <span className=''>Build your business</span>
      <br />
      <span>
        for the <span className="animate-gradient bg-gradient-to-r from-[#EF3D00] via-[#FDA40A] to-[#EF3D00] bg-[length:200%] bg-clip-text text-transparent">future.</span>
      </span>
    </>
  );

  return (
    <div className="relative flex items-center justify-center p-8 xl:h-screen">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        className="flex flex-col items-center justify-center space-y-6 text-center lg:space-y-14"
      >
        {/* Title */}
        <div className="text-3xl font-medium sm:text-4xl lg:text-7xl xl:text-8xl">
          {our1}
        </div>

        {/* Paragraph */}
        <div className="w-11/12 px-3 sm:w-3/4 lg:w-1/2">
          <p className="text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            We make sure your business is ready for the future with powerful, smart & A.I. solutions powered by the latest technologies.
          </p>
        </div>

        {/* Animated Button */}
        <div>
          <button className="z-[100] px-5 py-3 mt-4 text-sm text-white relative overflow-hidden group
            bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] 
            hover:scale-105
            sm:text-base md:text-lg rounded-3xl 
            transition-all duration-500 
            animate-shimmer
            hover:shadow-lg hover:shadow-[#EF3D00]/50
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-[#FDA40A] before:to-[#EF3D00]
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100">
            <ScrollLink 
              to="services" 
              smooth={true} 
              duration={500}
              className="relative z-10 block"
            >
              Discover more
            </ScrollLink>
          </button>
        </div>
      </motion.div>

      {/* Retro Grid Background */}
      <RetroGrid />

      {/* Optional Particles for Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color={"fa542f"}
        refresh
      />
    </div>
  );
}