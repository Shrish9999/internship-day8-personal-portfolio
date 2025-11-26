import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="w-full py-16 bg-primary overflow-hidden relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-3xl pointer-events-none"></div>

      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 // <--- YAHAN CHANGE KIYA HAI (Pehle 15 tha, ab 40 kar diya)
          }}
          className="flex gap-10 items-center pr-10"
        >
          {/* Text repeat loop */}
          {[...Array(4)].map((_, i) => (
            <h1 key={i} className="text-[8vw] font-display font-bold uppercase leading-none text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Digital Experiences • Creative Design •
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;