import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Hero2 (){
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

  return (
    <>
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 30 }}
    animate={controls} 
    className='flex flex-col items-center h-auto py-20 md:py-28 xl:py-36 space-y-5 text-center md:space-y-8 lg:space-y-10'>
      {/* Title */}
      <div className="text-4xl font-medium sm:text-6xl md:text-7xl lg:text-8xl">
        <span className="animate-gradient-flow bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-[length:200%] bg-clip-text text-transparent">
          Meet the People
        </span>
        <br />
        <span className="animate-gradient-flow bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-[length:200%] bg-clip-text text-transparent">
          Behind TerraCode
        </span>
      </div>
      {/* Paragraph */}
      <div className="w-full px-5 xl:px-40 sm:w-2/3">
          <p className="text-lg text-gray-600 sm:text-xl md:text-2xl">
          At TerraCode, we specialize in delivering innovative, tailored technology solutions to help businesses thrive in the digital world. Our expertise spans web development, AI, and enterprise solutions, ensuring our clients get the best technology for their needs.
          </p>
      </div>
      {/*image*/}
      <div className='xl:w-2/3 h-[300px] md:h-[600px] rounded-xl bg-cover p-1 '>
        <img src='/team.png.jpeg' alt="Team image" className='object-fit w-full h-full rounded-xl'/>
      </div>
    </motion.div>
    </>
  )
}
