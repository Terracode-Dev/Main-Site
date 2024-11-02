import React from 'react'
import Particles from '../ui/particles'

const Benifits = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

    </div>
  )
}

export default Benifits
