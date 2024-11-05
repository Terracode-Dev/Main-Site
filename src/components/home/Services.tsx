

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
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

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
    <div className="sticky top-0 h-screen flex flex-col justify-center">
      <div className="md:text-[48px] text-[32px] ml-4">
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
          Our Expertise
        </span>
        <span>
          Ensure Your <br /> Business Stays Competitive in the
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
          Evolving Digital Landscape
        </span>
      </div>
      <motion.div style={{ x }} className="flex gap-40 ml-3 mt-8 w-fit flex-nowrap cursor-grab active:cursor-grabbing">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </motion.div>
    </div>
  </section>
  );
};

interface CardProps {
  card: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    bgColor: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    
    <div
      key={card.id}
      className={`flex flex-col md:w-[452px] md:h-[323px] w-[300px] h-[200px] ${card.bgColor} rounded-2xl relative
                         hover:scale-[1.02] transition-transform duration-300`}
    >
        <div className='p-4'>
        {/* Icon */}
        <img 
          src={card.icon}
          alt="Icon"
          className='md:w-[69px] w-[28px] md:mt-7 mt-2'
        />
        {/* Title */}
        <h1 className='md:text-[34px] text-[20px] text-white mt-2'>{card.title}</h1>
        <div className='flex items-start line-clamp-4 mt-2 w-[70%]'>
          <p className='md:text-[16px] text-[10px] text-white'>
            {card.description}
          </p>
        </div>
      </div>
      <img 
        src={card.image}
        alt="App"
        className='absolute md:right-[-125px] right-[-78px] md:top-8 top-4 md:w-[320px] md:h-[320px] w-[200px] h-[200px]'
      />
    </div>
  );
};

export default Example;

const cards = [
  {
    title: "App Development",
    description: "We create innovative mobile applications that are tailored to your business needs, ensuring seamless user experiences across all platforms.",
    icon: "/Vector.png",
    image: "/App.png",
    bgColor: "bg-[#F67005]",
    id: 1,
  },
  {
    title: "AI Development",
    description: "Unlock the power of AI with intelligent solutions that automate processes, enhance decision-making, and boost operational efficiency.",
    icon: "/AI.png",
    image: "/AI-1.png",
    bgColor: "bg-[#FDA40A]",
    id: 2,
  },
  {
    title: "Enterprise Solutions",
    description: "We create innovative mobile applications that are tailored to your business needs, ensuring seamless user experiences across all platforms.",
    icon: "/Vector 3.png",
    image: "Enterprise.png",
    bgColor: "bg-[#F67005]",
    id: 3,
  },
  {
    title: "Web Development",
    description: "Our web development services deliver fast, secure, and responsive websites that are designed to engage users and drive growth.",
    icon: "/Vector4.png",
    image: "/Web.png",
    bgColor: "bg-[#FDA40A]",
    id: 4,
  },
];

