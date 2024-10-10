"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const games = [
    {
        id: "1",
        name: "ALABAY GUARDIAN",
        title: "SHEPARD OF THE STEPPES",
        imagePath: "/game1/game1.png",
        previewImage: [
            "/game1/preview1.png",
            "/game1/preview2.png",
            "/game1/preview3.png",
            "/game1/preview4.png",
        ],
    },
    {
        id: "2",
        name: "ALABAY HERITAGE",
        title: "THE LOST ADVENTURE",
        imagePath: "/game2/game2.png",
        previewImage: [
            "/game1/preview1.png",
            "/game1/preview2.png",
            "/game1/preview3.png",
        ],
    },
];

function Page({ params: { id } }) {
    const router = useRouter();
    const [showFeatures, setShowFeatures] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const color = id === "1" ? 'text-green-500' : id === "2" ? 'text-blue-500' : 'text-white';
    const bgcolor = id === "1" ? 'bg-green-500' : id === "2" ? 'bg-blue-500' : 'bg-white';
    const index = id === "1" ? 0 : 1;
    const name = games[index].name;
    const path = games[index].imagePath;
    const previewImage = games[index].previewImage;
    const title = games[index].title;

    // Exit function
    const exit = () => {
        console.log("Exit button clicked");
        router.replace('/');
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            setShowFeatures(true); // Scrolling up
        } else {
            setShowFeatures(false); // Scrolling down
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className="relative w-full px-10 min-h-screen bg-fixed bg-cover bg-left flex-col"
            style={{ backgroundImage: `url(${path})` }}
        >
            {/* Title Section */}
            <div className="sticky top-0 p-4">
                <div className="text-white lg:mt-10">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h2 className={`text-3xl mt-2 ${color}`}>{title}</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex flex-col h-full transition-opacity duration-700 ${showFeatures ? 'opacity-100' : 'opacity-0'} p-4`}>
                <div className="flex-col min-h-[30vh] w-[50vw] text-left text-white">
                    <div className="flex-1 mt-2">
                        <p>Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.</p>
                    </div>
                    {/* Play Button */}
                    <div className="flex justify-start mt-10">
                        <button  className={`${bgcolor} flex items-center rounded-full text-white py-2 px-3 text-xl hover:scale-95 transition`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 100 100"
                                className="play-button mr-4"
                            >
                                <circle cx="50" cy="50" r="48" fill="black" />
                                <polygon points="40,30 40,70 70,50" fill="white" />
                            </svg>
                            PLAY
                        </button>
                    </div>
                </div>
            </div>

            {/* Game Preview Section */}
            <div className={`fixed bottom-0 w-full mb-10 transition-all  z-10 duration-700 ${showFeatures ? '' : 'hidden'}`}>
                <h1 className={`font-bold ml-3 mb-10 text-3xl`}><span className={`${color}`}>GAME </span> PREVIEW</h1>
                <div className={`flex flex-nowrap justify-start w-full overflow-x-auto p-4 `}>
                    {previewImage.map((imgPath, index) => (
                        <div key={index} className="min-h-[20vh] w-[150px] m-1 mx-4 text-white transform hover:scale-x-125 transition-transform ease-in-out duration-300 border rounded-md overflow-hidden hover:z-10">
                            <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                                <Image
                                    src={imgPath}
                                    alt={`Game Preview ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Div */}
            <div className={`flex flex-col lg:h-[60%] lg:w-[60%] sm:text-xl sm:mt-20 sm:min-h-[80%] sm:w-[100%] md:h-[80%] md:w-[100%] text-white transition-opacity duration-700 ${showFeatures ? 'opacity-0' : 'opacity-100'} p-4`}>
                <h1 className={`font-bold ml-5 ${color} text-3xl`}>Features</h1>
                <div className="flex-1 ml-5 text-xl md:mb-5">
                    Explore a variety of landscapes, including
                    <span className={color}> mountains, forests, deserts, and ancient ruins.</span>
                    <p className="mt-2">
                        Use the Alabay’s <span className={color}>abilities</span> to solve
                        <span className={color}> puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.
                    </p>
                    <p className="mt-2 mb-2">
                        Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed’s role in ancient history.
                        Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
                    </p>
                    <span className={color}>Challenge Modes:</span><br />
                    - <span className={color}>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.<br />
                    - <span className={color}>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world, uncovering all secrets.
                </div>
                <div className="flex flex-row ml-10 max-w-[50%] mt-4 pb-5 justify-around">
            <button  className={`bg-slate-300 w-max flex text-black items-center rounded-full hover:scale-95 transition py-2 px-3 text-xl`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 100 100"
                            className="play-button mr-6 "
                        >
                            <circle cx="50" cy="50" r="48" fill="black" />
                            <polygon points="40,30 40,70 70,50" fill="white" />
                        </svg>
                        PLAY
                    </button>
                    <button onClick={exit} className="rounded-full w-28  border-2 bg-transparent text-white py-2 hover:scale-95 transition text-xl">
                        EXIT
                    </button>
                    </div>
               
            </div>

        </div>
    );
}

export default Page;
