import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ContactForm from "../contactus/Contact";

const Faq: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const overlappingRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });
  const isContentInView = useInView(contentRef, { once: false });
  const isOverlappingInView = useInView(overlappingRef, { once: false });
  
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-full max-w-[896px] text-center px-6 relative">
        <motion.h1
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 font-bold leading-tight"
        >
          <span className="text-[30px] md:text-[50px] sm:text-[35px] lg:text-[75px]  font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent hidden sm:block inter">
            Ready to Bring Your <br /> Vision to Life?
          </span>

          <span className="text-[30px] md:text-[50px] sm:text-[35px] lg:text-[60px] sm:mb-6  font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent sm:hidden inter">
            Ready to Bring Your <br /> Vision to <br /> Life?
          </span>
        </motion.h1>
        
        <motion.div
          ref={overlappingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isOverlappingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative -mt-16 max-sm:-mt-14 sm:-mt-16 md:mt-[-95px]  lg:mt-[-110px]"
        >
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="relative w-full max-w-[480px] mx-auto md:max-w-none md:w-auto"
          >
            <div className=" aspect-[4/3]">
              <img 
                src="/CTA 1.png" 
                alt="Team image"
                className="object-cover w-full  scale-120 sm:scale-[1]"
              />
            </div>
          </motion.div>
        </motion.div>


        {/* Button and pharagaph */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-[#2A2A2A] text-[14px] md:text-[22px] lg:text-[25px] sm:-mt-[45px] md:-mt-[80px] -mt-[30px] leading-normal inter">
            If you're a business owner, reach out to us today <br />
            and discover our limited-time offer tailored for you!
          </p>
          
          <button
            className="relative py-2 mt-4 font-medium rounded-full px-7 group overflow-hidden
              text-white bg-black hover:bg-transparent
              before:absolute before:inset-0
              before:bg-gradient-to-r before:from-[#EF3D00] before:to-[#FDA40A]
              before:opacity-0 before:transition-opacity before:duration-300
              hover:before:opacity-100
              hover:shadow-lg hover:shadow-[#EF3D00]/50
              transition-all duration-300"
            onClick={() => setIsContactFormOpen(true)}
          >
            <span className="relative z-10 inter">
              Reach Out
            </span>
          </button>
        </motion.div>

        <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      </div>
    </div>
  );
};

export default Faq;