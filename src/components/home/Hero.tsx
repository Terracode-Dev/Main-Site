// import Particles from '../ui/particles';
import { useState } from 'react';
import RetroGrid from '../ui/retro-grid';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import WordRotate from '../ui/word-rotate';
import ContactForm from "../contactus/Contact";
// import { Link } from 'react-router-dom';

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
      <span className='inter md:leading-[75px]'>Build your business for</span>
      <br />
      <div className="flex justify-center">
        <WordRotate
          words={["the future", "success", "the growth", "impact", "innovation","excellence","tommorow","change","prosperity","opportunities"]}
          className="animate-gradient bg-gradient-to-r from-[#EF3D00] via-[#FDA40A] to-[#EF3D00] bg-[length:200%] bg-clip-text text-transparent pb-4 inter"
        />
      </div>
    </>
  );
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-center p-8 sm:mb-[6%] ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        className="flex flex-col items-center justify-center space-y-4 text-center lg:space-y-14 "
      >
        {/* Title */}
        <div className="font-medium text-5xl lg:text-7xl xl:text-8xl ">
          {our1}
        </div>
        <div className="md:hidden flex ">
      <button
        className="relative py-2 font-medium rounded-full px-7 group overflow-hidden
          text-orange-500 bg-black hover:bg-transparent
          before:absolute before:inset-0
          before:bg-gradient-to-r before:from-[#EF3D00] before:to-[#FDA40A]
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
          hover:shadow-lg hover:shadow-[#EF3D00]/50
          transition-all duration-300
          hover:scale-110 active:scale-95
          items-center justify-center"
        onClick={() => setIsContactFormOpen(true)}
      >
        <span className="relative inter transition-colors duration-300 group-hover:text-white">
          Talk with Us
        </span>
      </button>
      </div>
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />

        {/* Paragraph */}
        <div className="w-11/12 px-3 sm:w-3/4 lg:w-1/2">
        {/* i use font this method you can find this class index.css */}
          <p className="text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl inter leading-[30px]">
          We build custom software & A.I solutions that fit your business perfectly of any scale, stay ahead tomorrow with our tech & expertise at your service.
          </p>
        </div>

        {/* Animated Button */}
        <div>
          <button className="z-5 px-6 py-3 text-sm text-white relative overflow-hidden group
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
      <RetroGrid className='-z-10' />

      {/* Optional Particles for Background */}
      {/* <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color={"fa542f"}
        refresh
      /> */}
    </div>
  );
}