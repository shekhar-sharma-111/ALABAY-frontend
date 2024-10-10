import Image from 'next/image'
import React from 'react'

function Component2() {
  return (
    <div className='h-screen  rounded-3xl '>
      <div className="flex flex-col items-center justify-center  p-8">
      <div className="relative">
        {/* Text with transparent background */}
        <h1 className="text-5xl sm:text-8xl font-extrabold  text-orange-500 uppercase tracking-wider">Project Vision</h1>
      </div>
      <div className="mt-6">
        {/* Image section */}
        <Image
          src="/image2.png"
          alt="Project Vision"
          width={768}  // Adjust dimensions accordingly
          height={795} // Adjust dimensions accordingly
          className="object-contain"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-2xl font-extrabold text-black">
          Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
        </p>
      </div>
    </div>
        </div>
  )
}

export default Component2