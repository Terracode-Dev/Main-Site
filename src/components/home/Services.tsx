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

  const xhos1 = useTransform(scrollYProgress, [0, 1], ["2%", "-80%"]);
  const xhos2 = useTransform(scrollYProgress, [0, 1], ["2%", "-45%"]);
  const our: JSX.Element = (
    <>
      <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
        {"Our Expertise "}
      </span>
      <span>
        Ensure Your <br /> Business Stays Competitive in the
      </span>
    </>);
  const ev: JSX.Element = (<>
    <span>
      <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
        Evolving Digital Landscape
      </span>
    </span>
    </>);
      
  

  return (
    <section ref={targetRef} className="relative h-[200vh] ">
      {/* mobile view */}
      <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden lg:hidden">
        <div className="md:text-[25px] lg:text-[45px] text-[25px] ml-4 ">
        {our}<br/>
        {ev}
        </div>
        <div className="ml-4">
           {/* Learn More Button */}
           {/* <button className={` text-nowrap w-fit  px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg border border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white`}>
            Learn More
          </button> */}
        </div>
        <motion.div style={{ x: xhos1 }} className="flex gap-40 mt-8 ml-3 w-fit flex-nowrap cursor-grab active:cursor-grabbing">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
      {/* desktop view */}
      <div className="sticky flex flex-col justify-center hidden h-screen overflow-hidden top-24 lg:block">
      <div className="md:text-[48px] text-[32px] ml-4 ">
          {our}<br />
          {ev}
        </div>
        <div className="">
           {/* Learn More Button */}
           {/* <button className="border border-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent md:text-[16px] text-[14px] font-medium py-2 px-6 rounded-full hover:scale-105 transition-transform absolute md:top-32 md:right-10 right-3 top-[355px] mt-8 mr-4">
            Learn More
          </button> */}
          </div>
        <motion.div style={{ x: xhos2 }} className="flex gap-40 mt-8 ml-3 w-fit flex-nowrap cursor-grab active:cursor-grabbing">
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
    sty: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className={`flex flex-col xl:w-[452px] xl:h-[323px] w-[250px] h-[190px] ${card.bgColor} rounded-2xl relative
                         hover:scale-[1.02] transition-transform duration-300`}
    >
      <div className="p-4">
        {/* Icon */}
        <img src={card.icon} alt="Icon" className="xl:w-[69px] w-[28px] xl:mt-7 mt-2" />
        {/* Title */}
        <h1 className="xl:text-[34px] text-[20px] text-white mt-2">{card.title}</h1>
        <div className="flex items-start line-clamp-4 mt-2 w-[70%]">
          <p className="xl:text-[16px] text-[10px] text-white">{card.description}</p>
        </div>
      </div>
      <img src={card.image} alt={card.title} className={card.sty} />
    </div>
  );
};

export default Example;

const cards = [
  {
    title: "Business Applications",
    description: "Unlock your business potential with tailored software designed specifically for you. We specialize in crafting custom systems that streamline operations and enhance efficiency—whether you need a comprehensive ERP to manage large company workflows, an IMS for your retail store, or a CRM to strengthen customer relationships. Let us help you transform your business with solutions that fit your unique needs, ensuring seamless experiences across all platforms.",
    icon: "/Vector 3.png",
    image: "Enterprise.png",
    bgColor: "bg-[#F67005]",
    id: 3,
    sty: "absolute xl:right-[-125px] right-[-78px] lg:top-8 top-4 xl:w-[320px] xl:h-[320px] w-[200px] h-[200px]",
  },
  
  {
    title: "Smart Automation Solutions",
    description: "Unlock the power of AI with intelligent solutions that automate processes, enhance decision-making, and boost operational efficiency.",
    icon: "/AI.png",
    image: "/AI-1.png",
    bgColor: "bg-[#FDA40A]",
    id: 2,
    sty: "absolute xl:right-[-125px] right-[-78px] xl:top-1 top-0 xl:w-[320px] xl:h-[320px] w-[200px] h-[200px]",
  },
  {
    title: "Web Development",
    description: "Our web development services deliver fast, secure, and responsive websites that are designed to engage users and drive growth.",
    icon: "/Vector4.png",
    image: "/Web.png",
    bgColor: "bg-[#FDA40A]",
    id: 4,
    sty: "absolute xl:right-[-125px] right-[-78px] xl:top-8 top-4 xl:w-[320px] xl:h-[320px] w-[200px] h-[200px]",
  },
  {
    title: "App Development",
    description: "We create innovative mobile applications that are tailored to your business needs, ensuring seamless user experiences across all platforms.",
    icon: "/Vector.png",
    image: "/App.png",
    bgColor: "bg-[#F67005] bg",
    id: 1,
    sty: "absolute xl:right-[-125px] right-[-78px] xl:top-8 top-4 xl:w-[320px] xl:h-[320px] w-[200px] h-[200px]",
  },
];