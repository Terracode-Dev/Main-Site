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
        for the <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">future.</span>
      </span>
    </>
  );

  return (
    <div className="relative flex items-center justify-center px-4 h-[60vh] sm:h-[70vh] lg:h-[90vh] xl:h-screen">
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

        {/* Button */}
        <div>
          <button className="z-[999] px-5 py-3 mt-4 text-sm text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] sm:text-base md:text-lg rounded-3xl hover:from-[#FDA40A] hover:to-[#EF3D00]">
            <ScrollLink to="services" smooth={true} duration={500}>
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
