"use client"; // Ensures client-side rendering

import Image from 'next/image';
import React, { useState } from 'react';

const gamePreviews = [
  {
    title: "Pungent Poop",
    image: "/game2/preview1.png",  // Use the correct image path
  },
  {
    title: "Wrath Hound",
    image: "/game1/preview2.png",  // Use the correct image path
  },
  {
    title: "New Game 1",
    image: "/game2/preview2.png",  // Use the correct image path
  },
  {
    title: "New Game 2",
    image: "/game1/preview3.png",  // Use the correct image path
  },
  {
    title: "New Game 3",
    image: "/game2/preview3.png",  // Use the correct image path
  },
  {
    title: "Wrath Hound",
    image: "/game1/preview2.png",  // Use the correct image path
  },
];

export default function Component7() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % gamePreviews.length);
  };

  return (
    <div className='h-full  rounded-3xl'>
      <div className="p-8 mx-4">
        <h2 className="text-4xl font-bold text-left">
          <span className="text-yellow-400">GAME</span> PREVIEWS
        </h2>
        <div className="mt-8 flex">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Game Previews */}
            {gamePreviews.slice(currentIndex, currentIndex + 3).map((game, index) => (
              <div key={index} className="bg-gray-800 border-4 border-gray-300 rounded-2xl shadow-md overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={250} // Reduced width
                  height={250} // Reduced height
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center ml-2 rounded-lg">
                    <button
                        onClick={handleNext}
                        className="bg-black p-3 w-12 h-12 rounded-xl shadow-lg hover:bg-gray-800 transition-colors"
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
    </div>
  );
}
