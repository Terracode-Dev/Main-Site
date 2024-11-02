import React from 'react'
import react,{ useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const About = () => {

  const [activeButton, setActiveButton] = useState<string | null>(null);
  {/*const navigate = useNavigate();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    if (button === 'team') {
      navigate('/meet-the-team');
    } else if (button === 'work') {
      navigate('/work-together');
    }
  };*/}

  return (
    <div className="flex items-center justify-center w-screen px-4 py-40 border-2 border-orange-500">
    <div className="flex flex-col items-center space-y-6 text-center md:space-y-10 lg:space-y-16">

      {/* Title */}
      <div className="text-4xl font-medium text-orange-500 sm:text-5xl md:text-6xl lg:text-7xl">
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
        {/*after uncomment use navigate handleButtonClick lesa function eka call krnd*/}
        <button
          onClick={() => setActiveButton('team')}
          className={`w-full px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg 
            ${activeButton === 'team' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'} 
            border border-orange-500 hover:bg-orange-500 hover:text-white`}
        >
          Meet The Team
        </button>
      </div>
      <div >
        {/*after uncomment use navigate handleButtonClick lesa function eka call krnd*/}
        <button
          onClick={() => setActiveButton('work')}
          className={`w-full px-6 py-3 mt-4 text-sm rounded-3xl sm:text-base md:text-lg 
            ${activeButton === 'work' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'} 
            border border-orange-500 hover:bg-orange-500 hover:text-white`}
        >
          Let's Work Together
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default About
