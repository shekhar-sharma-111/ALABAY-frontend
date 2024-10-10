"use client";
import { useState } from 'react';

function Content1() {
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

    // Define groups of content
    const contentGroups = [
        // Group 1: ALL
        [
            { label: "PHOTOS", key: "photos" },
            { label: "VIDEOS", key: "videos" },
            { label: "GAMES", key: "games" },
        ],
        // Group 2: PHOTOS
        [
            { label: "PHOTO 1" },
            { label: "PHOTO 2" },
            { label: "PHOTO 3" },
        ],
        // Group 3: VIDEOS
        [
            { label: "VIDEO 1" },
            { label: "VIDEO 2" },
            { label: "VIDEO 3" },
        ],
    ];

    const handleNext = () => {
        // Move to the next content group, looping back to the first if at the end
        setSelectedGroupIndex((prevIndex) => (prevIndex + 1) % contentGroups.length);
    };

    return (
        <div className="flex flex-col items-center w-[100%] py-10 mx-auto">
            <div className="flex flex-row text-black m-2 my-4 text-xl">
                <p className={`${selectedGroupIndex === 0 ? 'text-yellow-500 bg-slate-50' : ''} px-4 py-2 mx-3 rounded cursor-pointer`} onClick={() => setSelectedGroupIndex(0)}>ALL</p>
                <p className={`${selectedGroupIndex === 1 ? 'text-yellow-500 bg-slate-50' : ''} px-4 mx-3 py-2 rounded cursor-pointer`} onClick={() => setSelectedGroupIndex(1)}>PHOTOS</p>
                <p className={`${selectedGroupIndex === 2 ? 'text-yellow-500 bg-slate-50' : ''} px-4 mx-3 py-2 rounded cursor-pointer`} onClick={() => setSelectedGroupIndex(2)}>VIDEOS</p>
            </div>
            <div className="flex flex-row w-[80%] justify-around pl-10 items-center space-x-4">
                {contentGroups[selectedGroupIndex].map((item, index) => (
                    <div key={index} className="border border-white rounded-xl p-4 w-[20vw] h-[20vw] flex items-center justify-center bg-gray-500 text-white">
                        {item.label}
                    </div>
                ))}
                {/* SVG Next to the Divs */}
                <div className="flex items-center justify-center  bg-black rounded-lg">
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
    );
}

export default Content1;
