"use client";

import { useRef, useState, useEffect } from 'react';

const SvgBackgroundComponent = ({ children }) => {
  const targetRef = useRef(null);
  const [isScrolledTo, setIsScrolledTo] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const offset = 100; // Adjust this value to set the space you want

  const heading = "WELCOME TO ALABAY WORLD";
  const handleScroll = () => {
    if (atTop) {
      const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsScrolledTo(prev => !prev);
  };

  const handleScrollEvent = () => {
    setAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/homealabay.png')" }} 
      >
        <div className="absolute inset-0 z-0 opacity-30"></div>

        <div className="relative z-10 flex flex-col justify-around items-center h-[80vh] text-center">
          
        <h1
  className="text-8xl  font-extrabold mb-6 mt-2 mx-6 bg-gradient-to-b from-yellow-500 to-green-600 bg-clip-text text-transparent shadow-black"
>
  WELCOME TO ALABAY WORLD
</h1>


          <p className="bg-black w-full text-white  text-2xl py-10">
            WHERE THE <span style={{ color: '#FFD700' }}>LEGENDARY CENTRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.<br />
            JOIN US IN CELEBRATING THE <span style={{ color: '#99FF33' }}>STRENGTH, LOYALTY, AND HERITAGE</span> OF THE ALABAY BREED.
          </p>
        </div>

        {/* drawer */}
        <div className="relative w-11/12 mt-16 flex justify-center items-start overflow-hidden rounded-t-3xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 9200"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="#ffd800" />
              </radialGradient>
            </defs>
            <polygon points="0,0 0,800 1000,1000 1000,0" fill="url(#grad1)" />
            <polygon points="0,800 0,2000 1000,1800 1000,1000" fill="white" />
            <polygon points="0,2000 0,2800 1000,3000 1000,1800" fill="url(#grad1)" />
            <polygon points="0,2800 0,4000 1000,3800 1000,3000" fill="white" />
            <polygon points="0,4000 0,4800 1000,5000 1000,3800" fill="url(#grad1)" />
            <polygon points="0,4800 0,6000 1000,5800 1000,5000" fill="white" />
            <polygon points="0,6000 0,6800 1000,7000 1000,5800" fill="url(#grad1)" />
            <polygon points="0,6800 0,8000 1000,8200 1000,7000" fill="white" />
            <polygon points="0,8000 0,9200 1000,9200 1000,8200" fill="white" />
          </svg>

          <div className="flex-col justify-center rounded-3xl z-10 w-screen">
            <div className="flex flex-col items-center">
              <button
                onClick={handleScroll}
                className={`my-5 p-2 bg-yellow-50 rounded-3xl h-6 w-32 transition-transform duration-300 ease-in-out
                            hover:bg-yellow-200 hover:scale-110 hover:shadow-lg`}
              >
              </button>
            </div>
            <div ref={targetRef}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SvgBackgroundComponent;
