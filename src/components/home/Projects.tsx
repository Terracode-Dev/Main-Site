import React from 'react';
import { AnimatedBeamDemo } from './techstack';

export default function Projects() {
  return (
    <div className='container px-4 mx-auto md:px-10 '>
      <div className='flex flex-col items-center justify-center w-full gap-8 py-8 rounded-2xl xl:rounded-full bg-orange-50'>
        {/* Text Content */}
        <div className='flex items-center justify-center w-full text-center'>
          <h1 className='text-4xl md:text-4xl font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>
            Our tech stack
          </h1>
        </div>
        {/* Icon Cloud */}
        <div className="w-full px-2 rounded-lg xl:w-1/2">
          <AnimatedBeamDemo />
        </div>
      </div>
    </div>
  );
}

