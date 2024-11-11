
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Hero = () => {
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
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <>
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 30 }}
    animate={controls}
     className='flex flex-col h-auto p-6 space-y-5 md:space-y-8 lg:space-y-10'>
      {/*image*/}
      <div className='w-full h-[300px] md:h-[500px] bg-gray-400 rounded-xl'>
        <img src='/walletly_app.png' alt="Team image" className='object-fill w-full h-full rounded-xl'/>
      </div>
      <div className='space-y-4 xl:space-y-12 xl:px-32'>
      {/* tittle and buttons */}
      <div className='flex flex-col justify-between space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-3'>
          {/*tittle */}
          <div className='text-3xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            <h1 className="">Walletly App</h1>
          </div>

          {/*buttons */}
          <div className='flex flex-wrap gap-2'>
            <div className=''>
              <button className="px-6 py-2 text-sm text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] sm:text-base md:text-lg rounded-3xl hover:from-[#FDA40A] hover:to-[#EF3D00]">
              CMS
              </button>
            </div>
            <div>
              <button className="px-6 py-2 text-sm text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] sm:text-base md:text-lg rounded-3xl hover:from-[#FDA40A] hover:to-[#EF3D00]">
              Website Design
              </button>
            </div>
            <div>
              <button className="px-6 py-2 text-sm text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] sm:text-base md:text-lg rounded-3xl hover:from-[#FDA40A] hover:to-[#EF3D00]">
              Website Development
              </button>
            </div>
          </div>
      </div>
      
      {/* Paragraph */}
      <div className="w-full xl:w-11/12">
          <p className="text-lg text-gray-600 sm:text-xl md:text-3xl">
          At TerraCode, we specialize in delivering innovative, tailored technology solutions to help businesses thrive in the digital world. Our expertise spans web development, AI, and enterprise solutions, ensuring our clients get the best technology for their needs.
          </p>
      </div>
      </div>
    </motion.div>
    </>
  )
}

