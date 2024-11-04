import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Reachout: React.FC = () => {

  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);


  const isHeaderInView = useInView(headerRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });
  const isParagraphInView = useInView(paragraphRef, { once: false });
  const isButtonInView = useInView(buttonRef, { once: false });

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[896px] text-center px-6 relative">
      
        {/* Header animation */}
        <motion.h1
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold leading-tight relative z-0 lg:mb-[-110px] md:mb-[-95px] mb-[-50px]"
        >
          <span className="lg:text-[80px] md:text-[50px] font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
            Ready to Bring Your <br /> Vision to Life?
          </span>
        </motion.h1>

        {/* Image animation */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-6"
        >
          <img src='/CTA 1.png' alt="Team image" />
        </motion.div>

        {/* Paragraph animation */}
        <motion.p
          ref={paragraphRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#2A2A2A] lg:text-[28.5px] md:text-[22px] text-[16px] mt-8 leading-normal"
        >
          If you're a business owner, reach out to us today <br />
          and discover our limited-time offer tailored for you!
        </motion.p>

        {/* Button animation */}
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 mt-6 font-medium text-orange-500 bg-black rounded-full"
        >
          Reach Out
        </motion.button>
      </div>
    </div>
  );
};

export default Reachout;

