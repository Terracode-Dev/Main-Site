import React, { useState, useEffect } from 'react';
import { Rocket, Shield, Users, Settings, Scale, Clock } from 'lucide-react';

interface Feature {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features: Feature[] = [
    {
      title: 'Innovation',
      description: <p>'We use powerful technologies like <span className='font-bold text-black'>Go, Rust, AI, and other industry standards</span> to create cutting-edge solutions that keep your business ahead in the digital world.'</p>,
      icon: <Rocket className="w-8 h-8 p-2 text-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] rounded-md" />,
    },
    {
      title: 'Security',
      description: <p>'Our solutions, built with <span className='font-bold text-black'>Go, Rust, and other trusted technologies,</span> ensure that your business and data are always secure.'</p>,
      icon: <Shield className="w-8 h-8 p-2 text-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] rounded-md" />,
    },
    {
      title: 'Collaboration',
      description: 'We work closely with your team to understand your needs and deliver solutions that align with your goals.',
      icon: <Users className="w-8 h-8 p-2 text-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] rounded-md" />,
    },
    {
      title: 'Customization',
      description: 'Each project is tailor-made using the best tools and technologies, ensuring the perfect fit for your specific requirements.',
      icon: <Settings className="w-8 h-8 p-2 text-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] rounded-md" />,
    },
    {
      title: 'Scalability',
      description: 'Our solutions are designed to grow with your business, handling increased demand as your company expands.',
      icon: <Scale className="w-8 h-8 p-2 text-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] rounded-md" />,
    },
    {
      title: 'Efficiency',
      description: 'We focus on streamlining processes, delivering high-performance solutions that save you time and resources.',
      icon: <Clock className="w-8 h-8 p-2 text-black bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] rounded-md" />,
    },
  ];

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="grid items-center justify-center px-4 py-16 mx-auto 3xl:gap-10 max-w-7xl sm:px-6 lg:px-8">
      <h2 className="md:mb-6 text-4xl 2xl:text-5xl font-bold text-center bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent h-20 ">
        Why work with Us?
      </h2>


      {/* Desktop Grid */}
      <div className="hidden gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6"
          >
            <div className="flex items-center justify-between pb-2 mb-4 border-b border-black">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              {feature.icon}
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="relative grid md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex-shrink-0 w-full px-10 py-5"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-black">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  {feature.icon}
                </div>
                <p className="pt-4 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
             {/* Carousel Navigation circles*/}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center mt-4 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        {/* Carousel Controls arrow */}
        <button
          className="absolute left-0 p-2 -translate-y-1/2 rounded-full top-1/2 bg-white/50"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute right-0 p-2 -translate-y-1/2 rounded-full top-1/2 bg-white/50"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>

      <div className="mt-12 text-center">
      <button className="z-[100] px-6 py-3 text-sm text-white relative overflow-hidden group
          bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] 
          hover:scale-105
          sm:text-base md:text-lg rounded-3xl 
          transition-all duration-500 
          animate-shimmer
          hover:shadow-lg hover:shadow-[#EF3D00]/50
          before:absolute before:inset-0
          before:bg-gradient-to-r before:from-[#FDA40A] before:to-[#EF3D00]
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100"
        >
          <span className="relative z-10 block">
            Ready To Collaborate?
          </span>
        </button>
      </div>
    </div>
  );
};


export default Work;
