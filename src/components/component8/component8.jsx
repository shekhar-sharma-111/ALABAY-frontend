import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Component8() {
  return (
    <div className='h-full  rounded-3xl '>
       <div className="relative w-full ml-10 mt-10 sm:mt-20 sm:mb-10 ">
        <h1 className="text-5xl lg:text-8xl mx-auto sm:text-5xl font-extrabold text-orange-500 uppercase tracking-wider">
          SOCIAL MEDIA <br /> LINKS
        </h1>
        
      </div>
      <div className="flex flex-col lg:flex-row items-center h-full">
        {/* Left Side */}
        <div className="w-full  lg:w-[50%] h-[40%] lg:h-[80%]  flex justify-center items-center"> 
          <Image 
            src="/links.png"
            alt="links image"
            width={340}
            height={340}
            className="w-full h-full sm:mt-10  lg:-mb-10 object-contain mx-2"
          />
           <div 
           className="absolute w-[60%] h-28"
        >
          <Link href="#">
            <div className="h-[60%]    m-2  lg:m-4"></div>
          </Link>
          <Link href="#">
            <div className="h-[60%] m-2  lg:m-4"></div>
          </Link>
        </div>
        </div>
       

        {/* Right Side */}
        <div className="w-full lg:w-[50%] h-[40%] lg:h-[80%] flex justify-center items-center"> 
          <Image 
            src="/image9.png"
            alt="dog image"
            width={340}
            height={340}
            className="w-full h-full  object-contain mx-2"
          />
        </div>
      </div>
    </div>
  )
}
