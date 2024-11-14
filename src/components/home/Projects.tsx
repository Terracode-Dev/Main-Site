import { MarqueeDemo } from './techstack';

export default function Projects() {
  return (
    <div className='flex items-center justify-center px-4 mx-auto xl:h-screen'>
      <div className='flex flex-col items-center justify-center w-full max-w-screen-lg gap-8 py-8 xl:gap-14'>
        {/* Title */}
        <div className='flex items-center justify-center w-full px-4 text-center'>
          <h1 className='text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl xl:text-6xl'>
            Build Your Applications with <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>Robust, Scalable,</span> and <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>Secure</span> Technology
          </h1>
        </div>
        
        {/* Paragraph */}
        <div className='flex items-center justify-center w-full px-4 text-center sm:w-11/12 md:w-4/5 xl:w-3/5'>
          <p className='text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-2xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum commodi, totam fugit similique blanditiis est ut nisi ab sint? Coming soon.
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
