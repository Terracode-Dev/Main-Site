import { MarqueeDemo } from './techstack';

export default function Projects() {
  return (
    <div className='flex items-center justify-center px-4 mx-auto xl:h-screen'>
      <div className='flex flex-col items-center justify-center w-full gap-8 py-8 xl:gap-14'>
        {/* Title */}
        <div className='flex items-center justify-center w-2/3 px-4 text-center'>
          <h1 className='text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl xl:text-6xl'>
            Build Your Applications with <span className="animate-flowing-gradient bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-[length:200%] bg-clip-text text-transparent"> Robust, Scalable</span>and <span className='animate-flowing-gradient bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-[length:200%] bg-clip-text text-transparent'>Secure</span> Technology
          </h1>
        </div>
        
        {/* Paragraph */}
        <div className='flex items-center justify-center w-full px-4 text-center sm:w-11/12 md:w-4/5 xl:w-2/5'>
          <p className='text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-2xl'>
          Our solutions leverage advanced technology to build secure, robust, and scalable applications. Let us guide you through the digital landscape with solutions that innovate, optimize, and expand your business operations.

          </p>
        </div>

        {/* Icon Cloud */}
        <div className="w-full px-2 rounded-lg md:px-6">
          <MarqueeDemo />
        </div>
      </div>
    </div>
  );
}
