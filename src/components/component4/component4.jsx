
import Image from 'next/image';
import React from 'react'

export default function Component4() {
  const infoBoxes = [
    { title: "Liquidity", value: "LOCKED", bgColor: "bg-black", textColor: "text-yellow-400" },
    { title: "Contract", value: "RENOUNCED", bgColor: "bg-black", textColor: "text-yellow-400" },
    { title: "Taxes", value: "0%", bgColor: "bg-black", textColor: "text-yellow-400" },
  ];
  return (
    <div className='h-full rounded-3xl '>
      {/* Title left aligned and larger */}
      <div className="relative w-full flex ml-10 mt-10 justify-start">
          <h1 className="text-6xl lg:text-8xl sm:text-5xl font-extrabold text-orange-500 uppercase tracking-wider">TOKENOMICS</h1>
        </div>
      <div className="flex flex-col items-start justify-center  p-8">
        
       
        
        {/* Divs on the left and image on the right */}
        <div className="mt-6 w-[100%] flex flex-row items-start justify-evenly">
          
          {/* Info Boxes (Divs) on the left */}
          <div className="flex flex-col py-10 px-10 space-y-4">
            {infoBoxes.map((box, index) => (
              <div 
                key={index} 
                className={`${box.bgColor} p-4 rounded-xl flex items-center justify-between w-[250px] shadow-lg`}
              >
                <span className="text-lg text-white font-semibold">{box.title}</span>
                <span className={`${box.textColor} text-lg font-extrabold`}>{box.value}</span>
              </div>
            ))}
          </div>
          
          {/* Image on the right */}
          <div>
            
          <Image
            src="/image4.png"  // Adjust image source
            alt="Tokenomics"
            width={500}  // Adjust size as needed
            height={500} // Adjust size as needed
            className="object-contain  "
          />
          
          </div>
        </div>
      
    </div>
        </div>
  )
}
