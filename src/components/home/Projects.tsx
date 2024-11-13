
import { MarqueeDemo } from './techstack';


export default function Projects() {
  return (
    <div className='container flex items-center justify-center mx-auto md:h-screen'>
      <div className='flex flex-col items-center justify-center w-full gap-8 py-8 xl:gap-14 xl:space-y-8'>
        {/* Title */}
        <div className='flex items-center justify-center w-2/3 text-center h-1/3'>
          <h1 className='text-4xl md:text-6xl '>
            Build Your Applications with <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>Roubust, Scalable,</span> and <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>Secure</span> Technology
          </h1>
        </div>
        {/* paragraf */}
        <div className='flex items-center justify-center w-3/4 text-center xl:w-1/2 h-1/3'>
          <p className='text-xl md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum commodi, totam fugit similique blanditiis est ut nisi ab sint?hsdi jdhf comming soon .</p>
        </div>
        {/* Icon Cloud */}
        <div className="w-full px-2 rounded-lg h-1/3">
          <MarqueeDemo />
        </div>
      </div>
    </div>
  );
}

