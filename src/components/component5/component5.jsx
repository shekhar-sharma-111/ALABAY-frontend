"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Component5() {
  // Carousel items with bg and product images
  const carouselItems = [
    { bgImg: "/component5/pink tee bck.png", productImg: "/component5/pink tshirt.png", buttonColor: "bg-pink-500" },
    { bgImg: "/component5/black hoodie bck.png", productImg: "/component5/black hoodie.png", buttonColor: "bg-gray-500" },
    { bgImg: "/component5/yellow tee bck.png", productImg: "/component5/yellow tshirt.png", buttonColor: "bg-yellow-500" },
    { bgImg: "/component5/blue cap bck.png", productImg: "/component5/cap mockup.png", buttonColor: "bg-blue-500" },
  ];

  // State for current index of carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className='h-[110vh] min-h-[600px] md:min-h-[800px] flex flex-col items-center justify-center'>
      <div className="relative w-full flex ml-10 mt-10 mb-10 justify-center">
          <h1 className="text-5xl lg:text-8xl sm:text-5xl font-extrabold text-orange-500 uppercase tracking-wider">MERCHANDISE</h1>
        </div>
      <div className="relative w-full max-w-[90%] md:max-w-[80%] h-[90%] flex items-center justify-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={carouselItems[currentIndex].bgImg}
            alt="Background"
            layout="fill"
            objectFit="fit"
            className="z-0"
          />
        </div>

        {/* Product Image */}
        <div className="relative z-10">
          <Image
            src={carouselItems[currentIndex].productImg}
            alt="Product"
            width={550}  // Increased product dimensions
            height={550}
            className="object-contain"
          />
          {/* Coming Soon Text */}
          <p className="absolute top-2 right-4 text-xl md:text-2xl font-bold text-black">
            Coming Soon...
          </p>
        </div>

        {/* Left and Right Buttons for Carousel */}
        <button
          className="absolute left-4 z-20 p-3 rounded-full bg-white hover:bg-white transition"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            viewBox="0 0 24 24"
          >
            <path d="M12 4l-8 8 8 8" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          className="absolute right-4 z-20 p-3 rounded-full bg-white hover:bg-white transition"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            viewBox="0 0 24 24"
          >
            <path d="M12 20l8-8-8-8" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>



      </div>
    </div>
  );
}
