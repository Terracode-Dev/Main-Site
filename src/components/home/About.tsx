import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div>
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
    <section ref={targetRef} className="relative h-[350vh]">
      <div className="sticky top-0 flex flex-col items-center justify-center mx-[5%]  h-screen">
        <div className="m-6 w-full max-w-7xl ">
          <div className="relative flex flex-col items-center justify-center px-6 py-20 bg-[#F4F4F4] overflow-hidden  rounded-3xl ">
            {/* Animated Elements */}
            <motion.div
              style={{ y: yDown }}
              className="absolute hidden -left-32 md:-left-20 lg:left-20 md:block"
            >
              <Triangle />
            </motion.div>
            <motion.div
              style={{ y: yUp }}
              className="absolute hidden -right-32 md:-right-16 lg:right-16 md:block"
            >
              <Circle />
            </motion.div>
            {/* Mobile Animated Elements */}
            <motion.div
              style={{ y: yDown2 }}
              className="absolute -left-28 sm:left-20 md:hidden"
            >
              <Triangle />
            </motion.div>
            <motion.div
              style={{ y: yUp1 }}
              className="absolute -right-28 sm:right-16 md:hidden"
            >
              <Circle />
            </motion.div>
            <div className="absolute inset-0 backdrop-blur-lg  rounded-lg" />

            {/* Content */}
            <motion.div
              style={{ y: yUp2 }}
              className="z-20 flex flex-col items-center space-y-6 text-center md:space-y-10"
            >
              {/* Title */}
              <div className="text-4xl font-medium bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent sm:text-5xl inter">
                <h1>Who are we?</h1>
              </div>
              {/* Paragraph with Blur */}
              <div className="relative w-3/4 md:px-10 xl:w-1/2">
                {/* Blur Layer */}
                
                {/* Text */}
                <p className="relative text-xl text-gray-600 sm:text-2xl inter">
                "We’re a passionate team of
                <span className="text-orange-500 inter"> designers</span> and
                <span className="text-orange-500 inter"> developers</span><span>, based in
                Sri Lanka <img src='/LK.png' alt="Sri Lanka flag" className='object-cover inline-block' />, committed to building</span>
                <span className="text-orange-500 inter"> forward-thinking solutions.</span>"
              </p>

              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/aboutus">
                  <button className="px-6 py-3 text-sm text-orange-400 border border-orange-500 rounded-3xl hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white inter">
                    Meet The Team
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Second Section */}
            <motion.div
              style={{ y: yUp3 }}
              className="z-20 flex flex-col items-center justify-center text-center space-y-6 md:space-y-0 md:flex-row md:items-start"
            >
              {/* Logo */}
              <div className="flex justify-center md:justify-start md:px-10">
                <img
                  src="/Group 1.png"
                  alt="Terracode"
                  className="w-[150px] sm:w-[200px] xl:w-[250px]"
                />
              </div>
              {/* Description */}
              <div className="lg:w-2/3 xl:w-1/4 text-gray-600 ">
                <p className="text-justify inter">
                  "Boasting a strong team of engineers, we are dedicated to
                  building exceptional software products that cater precisely to
                  your business needs. Our commitment is to work closely with
                  you, understanding your unique challenges, to deliver
                  solutions that streamline processes and exceed expectations."
                </p>
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
      <div className="w-60 h-60 bg-orange-400 rounded-full -z-10" />
    </div>
  );
};

const Triangle = () => {
  return (
    <div>
      <div
        className="
          border-l-[150px] border-l-transparent
          border-r-[150px] border-r-transparent
          border-b-[250px] border-[#FDA40A] -z-10 rotate-45"
      />
    </div>
  );
};

export default Aboutus;
