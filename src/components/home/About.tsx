import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Aboutus = () => {
  return (
    
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yUp = useTransform(scrollYProgress, [0, 1], ["80%", "-80%"]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["-70%", "40%"]);
  const yUp2 = useTransform(scrollYProgress, [0, 1], ["50%", "-200%"]);
  const yUp3 = useTransform(scrollYProgress, [0, 1], ["200%", "-50%"]);
  const yUp1 = useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]);
  const yDown2 = useTransform(scrollYProgress, [0, 1], ["-150%", "120%"]);
  

  return (
    <section ref={targetRef} className="relative h-[350vh] ">
    <div className="sticky top-0 flex flex-col justify-center overflow-hidden">
      <div className="m-6 ">
        <div className="relative z-0 flex flex-col items-center justify-center px-4 py-40 overflow-hidden bg-slate-100 rounded-3xl h-[700px]">
          
          {/* <div className="absolute bg-orange-400 rounded-full bottom-[80%] left-[60%] md:bottom-[60%] md:left-[70%] w-60 h-60 -z-10"></div> */}
          <motion.div style={{ y: yDown }} className="absolute hidden -left-32 md:-left-20 lg:left-20 cursor-grab active:cursor-grabbing md:block">
          <Triangle   />
          </motion.div>
          <motion.div style={{ y: yUp }} className="absolute hidden -right-32 md:-right-16 lg:right-16 cursor-grab active:cursor-grabbing md:block">
              <Circle   />
          </motion.div>
          {/* mobile view */}
          <motion.div style={{ y: yDown2 }} className="absolute -left-28 sm:left-20 cursor-grab active:cursor-grabbing md:hidden">
          <Triangle   />
          </motion.div>
          <motion.div style={{ y: yUp1 }} className="absolute -right-28 sm:right-16 cursor-grab active:cursor-grabbing md:hidden">
              <Circle   />
          </motion.div>
          <div className="absolute inset-0 backdrop-blur-xl -z-0"></div>
          <motion.div style={{y: yUp2}} className="z-20 flex flex-col items-center space-y-6 text-center md:space-y-10 lg:space-y-16">

            {/* Title */}
            <div className="text-4xl font-medium bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              <h1>Who are we?</h1>
            </div>

            {/* Paragraph */}
            <div className="w-3/4 md:px-10 xl:w-1/2">
              <p className="text-xl text-gray-600 sm:text-2xl md:text-3xl">
              "We’re a passionate team of 
              <span className='text-orange-500'> designers</span> and 
              <span className='text-orange-500'> developers,</span> based in Sri Lanka, committed to building  
              <span className='text-orange-500'> forward-thinking solutions.</span>"
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-1 sm:gap-4 sm:flex-row sm:justify-center">
            <div >
              <Link to="/aboutus" >
        <button
          className={`w-full px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg border border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white`}
        >
          Meet The Team
        </button></Link>
            </div>
            <div >
            <Link to="/casestudy" >
        <button
          className={`w-full px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg border border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white `}
        >
          Let's Work Together
        </button></Link>
            </div>
          </div>
        </motion.div>

        {/* Second section */}
        <motion.div style={{y: yUp3}} className="z-20 flex flex-col items-center space-y-6 text-center md:space-y-10 lg:space-y-16">

              {/* Title */}
              {/* <div className="text-4xl font-medium bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                <h1>Terracode</h1>
              </div> */}

              {/* Paragraph */}
              <div className=" md:px-10 xl:w-1/2">
                <img src="/Group 1.png" alt="Terracode" className="w-[200px] sm:w-[400px] xl:w-[800px]"/>
              </div>
              </motion.div>
        
        
      </div>
      </div>
    </div>
  </section>
  );
};



const Circle = () => {
  return (
    <div>
     <div className="w-48 h-48 bg-orange-400 rounded-full -z-10"/>  
    </div>
  );
};
const Triangle = () => {
  return (
    <div>
     <div className="
                   border-l-[120px] border-l-transparent
                   border-r-[120px] border-r-transparent
                   border-b-[220px] border-orange-400  -z-10 rotate-45 "/>
    </div>
  );
};

export default Aboutus;



