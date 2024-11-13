import { useState, useEffect } from 'react';
import Team from './team';
import Reachout from './reachout';
import Hero2 from './hero';

const Aboutus_page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time and checking if all content is loaded
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50">
        <div className="flex flex-col items-center justify-center h-screen">
          {/* Main loader circle */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-t-4 border-b-4 border-[#FDA40A] animate-spin"></div>
          </div>
          
          {/* Loading text */}
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-[#FDA40A]">Loading</p>
            {/* Bouncing dots */}
            <div className="flex justify-center gap-1 mt-2">
              <div className="w-2 h-2 bg-[#FDA40A] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#FDA40A] rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-[#FDA40A] rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero2 />
      <Team />
      <Reachout />
    </>
  );
};

export default Aboutus_page;