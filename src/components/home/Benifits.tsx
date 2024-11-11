import { Link} from 'react-router-dom';

const About = () => {

  return (
    <>
    <div className='m-6 '>
    <div className="relative z-0 flex items-center justify-center px-4 py-40 overflow-hidden bg-slate-100">
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl -z-0"></div>
       {/* Background Shapes */}
      <div className="absolute bg-orange-400 rounded-full bottom-[80%] left-[60%] md:bottom-[60%] md:left-[70%] w-60 h-60 -z-10"></div>
      <div className="absolute
                   border-l-[150px] border-l-transparent
                   border-r-[150px] border-r-transparent
                   border-b-[250px] border-orange-400 top-[80%] right-[40%] -z-10 rotate-45 md:top-[50%] md:right-[70%]"></div>
    {/* 1 section */}
    <div className="z-20 flex flex-col items-center space-y-6 text-center md:space-y-10 lg:space-y-16">

      {/* Title */}
      <div className="text-4xl font-medium bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Who are we?</h1>
      </div>

      {/* Paragraph */}
      <div className="w-3/4 md:px-10 xl:w-1/2">
        <p className="text-xl text-gray-600 sm:text-2xl md:text-3xl">
        "We’re a passionate team of 
        <span className='text-orange-500'> designers</span> and 
        <span className='text-orange-500'> developers,</span> based in Sri Lanka, committed to building  
        <span className='text-orange-500'> forward-thinking solutions.</span>"
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-1 sm:gap-4 sm:flex-row sm:justify-center">
      <div >
        <Link to="/aboutus" >
        <button
          className={`w-full px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg border border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white`}
        >
          Meet The Team
        </button></Link>
      </div>
      <div >
        <Link to="/casestudy" >
        <button
          className={`w-full px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg border border-orange-500 hover:bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] hover:text-white `}
        >
          Let's Work Together
        </button></Link>
      </div>
    </div>
    </div>
    {/* 2 section */}
    <div className='z-20 items-center justify-center hidden h-screen border-2 border-black'>
      <p>Design, but in a more efficient</p>
    </div>
  </div>
  </div>
    </>
  )
}

export default About