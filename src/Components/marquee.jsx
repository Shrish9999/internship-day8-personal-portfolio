import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden pr-20">
        
        {/* First Moving Text */}
        <motion.h1 
            initial={{ x: "0" }} 
            animate={{ x: "-100%" }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
            className="text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-semibold pt-10 mb-[1vw] text-white -mt-[4vw]"
        >
            Full Stack Dev
        </motion.h1>

        {/* Second Moving Text (Loop ke liye) */}
        <motion.h1 
            initial={{ x: "0" }} 
            animate={{ x: "-100%" }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
            className="text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-semibold pt-10 mb-[1vw] text-white -mt-[4vw]"
        >
            Full Stack Dev
        </motion.h1>

      </div>
    </div>
  );
};

export default Marquee;