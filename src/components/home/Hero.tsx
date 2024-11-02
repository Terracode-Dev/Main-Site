import React from 'react';
import Particles from '../ui/particles';

export default function Hero() {
  return (
    <div className="flex items-center justify-center w-screen px-4 py-8 md:py-14">
      <div className="flex flex-col items-center space-y-10 text-center md:space-y-16 lg:space-y-20">
        {/* Title */}
        <div className="text-5xl font-medium text-black sm:text-6xl md:text-7xl lg:text-8xl">
          <span>Build your business</span>
          <br />
          <span>
            for the<span className="text-orange-600"> future.</span>
          </span>
        </div>

        {/* Paragraph */}
        <div className="w-full px-5 xl:px-40 sm:w-2/3">
          <p className="text-lg text-gray-600 sm:text-xl md:text-2xl">
            We make sure your business is ready for the future with powerful, smart & A.I. solutions powered by the latest technologies.
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="px-6 py-3 mt-4 text-sm text-white bg-orange-600 sm:text-base md:text-lg rounded-2xl hover:bg-orange-700">
            Discover More
          </button>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  );
}

