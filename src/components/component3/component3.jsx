import Image from 'next/image'
import React from 'react'

function Component3() {
  const cards = [
    {
      title: "Community Building",
      subtitle: "and Initial Launch",
      imgSrc: "/image3.2.png", // Adjust image source
      bgColor: "bg-yellow-500",
    },
    {
      title: "Merchandise Launch",
      subtitle: "Store Launch",
      imgSrc: "/image3.3.png", // Adjust image source
      bgColor: "bg-blue-500",
    },
    {
      title: "Community Events",
      subtitle: "and Contests",
      imgSrc: "/image3.4.png", // Adjust image source
      bgColor: "bg-purple-500",
    },
    {
      title: "Expansion & Features",
      subtitle: "New Features",
      imgSrc: "/image3.5.png", // Adjust image source
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className='min-h-full  rounded-3xl '>
      <div className="flex flex-col  items-start justify-center bg-transparent p-8">
        
        {/* Title left aligned and larger */}
        <div className="relative  w-full flex justify-start">
          <h1 className="text-8xl font-extrabold text-white uppercase tracking-wider">Road Map</h1>
        </div>
        
        {/* Merged text and image section */}
        <div className="mt-6 w-[100%] flex flex-row items-start">
          
          {/* Text section - left aligned */}
          <div className="text-left ml-4 lg:ml-10 mt-10 w-[60%]">
            <p className=" text-sm sm:text-lg md:text-2xl text-black">
              <br />
              Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
              <br />
              <span className="text-orange-500 font-semibold"> Join us as we grow and achieve new heights.</span>
            </p>
          </div>
          
          {/* Image section - now on the right */}
          <Image
            src="/image3.1.png"
            alt="Road Map"
            width={500}  // Adjust width
            height={250} // Adjust height
            className="object-contain mr-6"
          />
        </div>

        {/* Lower Div with Permanent Fade Effect */}
        <div className="relative mt-6 w-full h-[500px]">
          {/* Cards section */}
          <div className="relative z-10 grid grid-cols-4 gap-4 h-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} p-4 rounded-2xl shadow-lg flex flex-col items-center h-full relative border-4 border-white`}
              >
                {/* Larger card images */}
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  width={150}  // Increased size
                  height={150} // Increased size
                  className="rounded-full mb-2"
                />
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="text-sm text-white mt-1">{card.subtitle}</p>
                
                {/* White fade effect at the bottom of each card */}
                <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-white to-transparent "></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component3
