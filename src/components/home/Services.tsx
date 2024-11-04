import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const carouselRef = useRef(null);

  const cards = [
    {
      title: "App Development",
      description: "We create innovative mobile applications that are tailored to your buisness needs, ensuaring seamless user experiences across all platforms.",
      icon: "/Vector.png",
      image: "/App.png",
      bgColor: "bg-[#F67005]"
    },
    {
      title: "AI Development",
      description: "Unlock the power of AI with intelligent solutions that automate processes, enhance decision-making, and boost operational efficiency.",
      icon: "/AI.png",
      image: "/AI-1.png",
      bgColor: "bg-[#FDA40A]"
    },
    {
      title: "Entreprise Solutions",
      description: "We create innovative mobile applications that are tailored to your buisness needs, ensuaring seamless user experiences across all platforms.",
      icon: "/Vector 3.png",
      image: "Enterprise.png",
      bgColor: "bg-[#F67005]"
    },
    {
      title: "Web Development",
      description: "Our web development services deliver fast, secure, and responsive websites that are designed to engage users and drive growth.",
      icon: "/Vector4.png",
      image: "/Web.png",
      bgColor: "bg-[#FDA40A]"
    }
  ];

  return (
    <div className='flex flex-col relative max-w-[100vw] overflow-hidden'>
      {/*title*/}
      <div className='md:text-[48px] text-[32px] ml-4 mb-8'>
        <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>
          Our Expertise
        </span>
        <span>
          Ensure Your <br /> Business Stays Competitive in the
        </span>
        <br />
        <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>
          Evolving Digital Landscape
        </span>
      </div>

      {/* Cards Container */}
      <motion.div 
        ref={carouselRef}
        className='flex gap-8 ml-3 overflow-hidden flex-nowrap cursor-grab active:cursor-grabbing'
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x"
          dragConstraints={carouselRef}
          className='flex flex-row gap-12 md:gap-32'
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:w-[452px] md:h-[323px] w-[300px] h-[200px] ${card.bgColor} rounded-2xl relative
                         hover:scale-[1.02] transition-transform duration-300`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='p-4'>
                {/*icon*/}
                <motion.img 
                  src={card.icon}
                  alt="Icon"
                  className='md:w-[69px] w-[28px] md:mt-7 mt-2'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                {/*title*/}
                <h1 className='md:text-[34px] text-[20px] text-white mt-2'>{card.title}</h1>
                <div className='flex items-start line-clamp-4 mt-2 w-[70%]'>
                  <p className='md:text-[16px] text-[10px] text-white'>
                    {card.description}
                  </p>
                </div>
              </div>
              {/*image*/}
              <motion.img 
                src={card.image}
                alt="App"
                className='absolute md:right-[-125px] right-[-78px] md:top-8 top-4 md:w-[320px] md:h-[320px] w-[200px] h-[200px]'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Optional Scroll Indicator */}
      <div className='flex justify-center gap-2 mt-8'>
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className='w-2 h-2 bg-orange-500 rounded-full opacity-50'
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2, opacity: 1 }}
          />
        ))}
      </div>
    </div>
  );
}