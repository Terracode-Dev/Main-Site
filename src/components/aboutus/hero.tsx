import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className='flex flex-col items-center h-screen p-6 space-y-5 text-center md:space-y-8 lg:space-y-10'>
      {/* Title */}
      <div className='text-4xl font-medium sm:text-6xl md:text-7xl lg:text-8xl'>
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">Meet the People</span><br />
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">Behind TerraCode</span>
      </div>
      {/* Paragraph */}
      <div className="w-full px-5 xl:px-40 sm:w-2/3">
          <p className="text-lg text-gray-600 sm:text-xl md:text-2xl">
          At TerraCode, we specialize in delivering innovative, tailored technology solutions to help businesses thrive in the digital world. Our expertise spans web development, AI, and enterprise solutions, ensuring our clients get the best technology for their needs.
          </p>
      </div>
      {/*image*/}
      <div className='w-full bg-gray-400 rounded-xl h-1/3'>
              <h1 className='flex items-center justify-center h-full font-medium'>image</h1>
      </div>
    </div>
    </>
  )
}
