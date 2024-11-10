// import { motion, useInView } from "framer-motion";
// import React, { useRef, useState } from "react";
// import ContactForm from "../contactus/Contact";

// const Faq: React.FC = () => {
//   const [isContactFormOpen, setIsContactFormOpen] = useState(false);

//   const headerRef = useRef(null);
//   const imageRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const buttonRef = useRef(null);

//   const isHeaderInView = useInView(headerRef, { once: false });
//   const isImageInView = useInView(imageRef, { once: false });
//   const isParagraphInView = useInView(paragraphRef, { once: false });
//   const isButtonInView = useInView(buttonRef, { once: false });

//   return (
//     <div className="flex items-center justify-center px-4 bg-white md:px-8">
//       <div className="w-full max-w-[1024px] flex flex-col md:flex-row items-center space-y-16 md:space-y-0 md:space-x-36">
//         {/* Left Side - Image */}
//         <motion.div
//           ref={imageRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="w-full md:w-[45%] flex justify-center"
//         >
//           <div className="w-full aspect-[3/2]">
//             <img
//               src="/CTA 1.png"
//               alt="Team image"
//               className="object-cover w-full h-full scale-120 md:scale-[1.4]"
//             />
//           </div>
//         </motion.div>

//         {/* Right Side - Content */}
//         <div className="w-full md:w-[45%] flex flex-col items-center justify-center space-y-3 md:space-y-10">
//           {/* Animated Header */}
//           <motion.h1
//             ref={headerRef}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="font-bold leading-tight text-center"
//           >
//             <span className="text-[30px] md:text-[40px] lg:text-[40px] font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
//               Ready to Bring Your Vision to Life?
//             </span>
//           </motion.h1>

//           {/* Animated Paragraph */}
//           <motion.p
//             ref={paragraphRef}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-[#2A2A2A] text-[14px] md:text-[18px] lg:text-[20px] leading-relaxed text-center"
//           >
//             If you're a business owner, reach out to us today and discover our
//             limited-time offer tailored for you!
//           </motion.p>

//           {/* Button and Contact Form Trigger */}
//           <motion.button
//             ref={buttonRef}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="py-2 font-medium text-orange-500 bg-black rounded-full px-7"
//             onClick={() => setIsContactFormOpen(true)}
//           >
//             Reach Out
//           </motion.button>

//           {/* Contact Form Component */}
//           {isContactFormOpen && (
//             <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;





import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ContactForm from "../contactus/Contact";

const Faq: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const overlappingRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });
  const isParagraphInView = useInView(paragraphRef, { once: false });
  const isButtonInView = useInView(buttonRef, { once: false });
  const isOverlappingInView = useInView(overlappingRef, { once: false });
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-[896px] text-center px-6 relative">
        {/* Header animation */}
        <motion.h1
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 font-bold leading-tight"
        >
          <span className="text-[30px] md:text-[50px] sm:text-[35px] lg:text-[60px]  font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent hidden sm:block">
            Ready to Bring Your <br /> Vision to Life?
          </span>

          {/* mobile version */}
          <span className="text-[30px] md:text-[50px] sm:text-[35px] lg:text-[60px]   font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent sm:hidden">
            Ready to Bring Your <br /> Vision to <br /> Life?
          </span>
        </motion.h1>
        
        {/* Overlapping section */}
        <motion.div
          ref={overlappingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isOverlappingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative -mt-16 max-sm:-mt-14 sm:-mt-24 md:mt-[-150px]  lg:mt-[-167px]"
        >
          {/* Image animation */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="relative w-full max-w-[480px] mx-auto md:max-w-none md:w-auto"
          >
            <div className="w-full aspect-[4/3]">
              <img 
                src="/CTA 1.png" 
                alt="Team image"
                className="object-cover w-full h-full scale-120 sm:scale-[0.8]"
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Paragraph animation */}
        <motion.p
          ref={paragraphRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#2A2A2A] text-[14px] md:text-[22px] lg:text-[20px] sm:-mt-5 md:-mt-12  mt-2 leading-normal"
        >
          If you're a business owner, reach out to us today <br />
          and discover our limited-time offer tailored for you!
        </motion.p>
        
        {/* Button animation and contact form trigger */}
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="py-2 mt-4 font-medium text-orange-500 bg-black rounded-full px-7"
          onClick={() => setIsContactFormOpen(true)}
        >
          Reach Out
        </motion.button>
        
        {/* Render ContactForm */}
        <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      </div>
    </div>
  );
};

export default Faq;





