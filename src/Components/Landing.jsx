import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  
  // Scroll Function
  const scrollToWork = () => {
    const workSection = document.getElementById('work'); // Humne Projects.jsx mein id="work" diya tha
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      
      {/* Main Text Structure */}
      <div className="textstructure mt-40 px-10 md:px-20">
        
        <div className="masker">
            <h1 className="uppercase text-[7.5vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-bold text-white">
                BUILDING
            </h1>
        </div>

        <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "9vw" }} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[0.8vw] relative bg-[#CDEA68]" 
                ></motion.div>
                <h1 className="uppercase text-[7.5vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-bold text-white">
                    DIGITAL
                </h1>
            </div>
        </div>

        <div className="masker">
            <h1 className="uppercase text-[7.5vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-bold text-white">
                EXPERIENCES
            </h1>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-800 mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-10 md:px-20 text-white gap-5">
        
        <p className="text-md font-light tracking-tight leading-none">
            Shrish Tiwari • Full Stack Dev
        </p>

        {/* Live Status */}
        <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-md font-light tracking-tight leading-none text-green-400">
                Open to Work
            </p>
        </div>
        
        {/* Functional Buttons with Animation */}
        <div className="start flex items-center gap-5">
          
          {/* Pill Button */}
          <button 
            onClick={scrollToWork}
            className="group px-5 py-2 border-[1px] border-zinc-500 font-light text-sm uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            Explore My Work
          </button>

          {/* Arrow Button */}
          <button 
            onClick={scrollToWork}
            className="group w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            {/* Arrow Rotate karega Hover par */}
            <span className="rotate-[45deg] group-hover:rotate-90 transition-transform duration-300">
              <FaArrowUpLong />
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Landing;