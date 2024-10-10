import Content1 from "./content1";
import Image from 'next/image'; // Ensure this import is correct based on your setup

function Component1() {
  return (
    <div className='min-h-[120vh]  rounded-3xl border-red-500'>
      

      {/* Combined Image and Text Section */}
      <div className="relative flex justify-between items-end h-[80vh]  p-8">
        
        {/* Image with Reflection */}
        <div className="relative w-1/2 h-full flex justify-center items-end">
          <div className="relative w-[85%] h-[85%]">
            <Image 
              src="/image1.png" // Use the correct path to your uploaded image
              alt="Alabay Dog Image"
              layout="fill"
              objectFit="contain"
              className=""
            />
           
          </div>
        </div>

        {/* Text Section */}
        <div className="w-1/2 h-full flex flex-col justify-center items-left pr-4">
        {/* Header Text */}
      <h1 className="lg:text-8xl text-4xl text-right font-bold text-orange-500 ">History</h1>
      <h1 className="text-7xl sm:text:4xl text-right font-bold text-orange-500 ">of</h1>
      <h2 className="lg:text-8xl text-5xl text-right font-bold text-white ">ALABAY</h2>
          <h2 className="text-4xl sm:text:3xl text-right text-black font-bold">The Central Asian Shepherd Dog</h2>
          <p className="text-right text-sm sm:text-lg md:text-2xl text-black mt-4 leading-snug">
            Also known as Alabay, this dog has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
          </p>
        </div>
      </div>

      {/* Lower Component */}
      <div className="h-full  mx-4 my-10">
        <Content1 />
      </div>
    </div>
  );
}

export default Component1;
