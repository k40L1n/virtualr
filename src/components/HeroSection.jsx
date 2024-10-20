import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

import React from "react"

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
          VirtualR build tools
          <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "}
            for developers
          </span>
        </h1>
      </div>
    </div>
  )
}

export default HeroSection
