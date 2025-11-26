import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowDownLine } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-transparent text-secondary overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND IMAGE ENTRY */}
      <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ scale: 1.5, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} // Delay taaki shutter khulne ke baad ho
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop" // Cyberpunk Abstract Image
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay taaki text padha jaye */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-primary/80 to-primary"></div>
      </div>

      {/* Glowing Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center gap-4">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-accent border border-accent/30 px-4 py-1 rounded-full backdrop-blur-sm"
        >
          Available for Freelance
        </motion.p>

        <h1 className="font-display text-5xl md:text-9xl font-bold uppercase tracking-tighter leading-none relative">
          
          {/* First Line */}
          <motion.div 
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 100 }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
            className="relative z-10"
          >
            Building
          </motion.div>
          
          {/* Middle Line with Glitch */}
          <motion.div 
             initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 100 }}
             animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
             transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.0 }}
             className="glitch-wrapper my-[-1vw] md:my-[-2vw] relative z-20"
          >
             <span className="glitch text-accent text-[1.1em]" data-text="DIGITAL">DIGITAL</span>
          </motion.div>

          {/* Last Line */}
          <motion.div 
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 100 }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
            className="relative z-10"
          >
            Reality
          </motion.div>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 max-w-lg text-center font-sans text-gray-400 text-sm md:text-lg leading-relaxed"
        >
          I design and code beautifully simple things, and I love what I do.
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <RiArrowDownLine className="text-xl text-accent" />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Hero;