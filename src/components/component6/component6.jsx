"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const carouselData = [
  {
    path: "/game1/game1Home.png", // Update the actual path of your image
    color: "bg-green-500", // Matching color for the first image
    link: "/games/1", // Link for the first image
  },
  {
    path: "/game2/game2Home.png", // Use the second image from your local folder
    color: "bg-blue-500", // Color for the second image
    link: "/games/2", // Link for the second image
  },
];

export default function Component6() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality, changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Navigate to the discover link when button is clicked
  const handleDiscoverClick = () => {
    router.push(carouselData[currentIndex].link);
  };

  // Manually navigate between carousel items
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="min-h-[120vh]  rounded-3xl">
      <div className="relative w-full  flex flex-col mt-10 sm:mt-20 sm:mb-10 justify-center">
        <h1 className="text-5xl lg:text-8xl mx-auto sm:text-5xl font-extrabold text-orange-500 uppercase tracking-wider">
          GAMES
        </h1>
        <h1 className="text-xl lg:text-4xl mx-auto mt-5 sm:text-3xl font-extrabold text-gray-800 uppercase tracking-wider">
          stay tuned for upcoming games!
        </h1>
      </div>

      <div className="h-screen  mx-10 flex flex-col justify-center items-center">
        {/* Carousel Container */}
        <div
          className="relative w-[90%] h-[90%]  md:w-[90%] md:h-[90%] max-w-screen-xl rounded-xl border-4 border-white overflow-hidden"
          style={{ backgroundColor: carouselData[currentIndex].color }}
        >
          {/* Image Section */}
          <Image
            src={carouselData[currentIndex].path}
            alt={`carousel-image-${currentIndex}`}
            layout="fill"
            objectFit="fit"
            className="rounded-xl transition-all duration-500 ease-in-out"
          />

          {/* Discover Button Inside Carousel */}
          <button
            onClick={handleDiscoverClick}
            className={`${carouselData[currentIndex].color} absolute bottom-4 left-1/2 transform -translate-x-1/2  text-white text-lg py-2 px-6 rounded-full flex items-center space-x-2 hover:scale-110 hover:border border-white transition-all duration-300`}
          >
            <span>Discover</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Right Arrow Button Inside Carousel (Original Design) */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black p-3 w-12 h-12 rounded-xl shadow-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 7l5 5-5 5M4 12h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
