// src/Components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowDownLine } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-primary text-secondary overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND IMAGE (Zoom Out Effect) */}
      <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ scale: 1.5, filter: "blur(10px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/80 to-primary"></div>
      </div>

      {/* 2. GLOWING BLOB (Replaces SCSS .glow-blob) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* 3. MAIN CONTENT */}
      <div className="z-10 text-center flex flex-col items-center gap-6 px-4">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-300">
            Available for Freelance
          </span>
        </motion.div>

        {/* Hero Text */}
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9] flex flex-col items-center">
          
          {/* First Line (Metal Gradient) */}
          <motion.div 
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 50 }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
            className="relative z-10 bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent"
          >
            Building
          </motion.div>
          
          {/* Middle Line (Glitch Effect & Neon) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 1.0 }}
             className="relative z-20 my-2"
          >
             {/* Uses .glitch class from index.css */}
             <span 
                className="glitch text-accent block" 
                data-text="DIGITAL"
             >
               DIGITAL
             </span>
          </motion.div>

          {/* Last Line (Metal Gradient) */}
          <motion.div 
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: -50 }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
            className="relative z-10 bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent"
          >
            Reality
          </motion.div>
        </h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 max-w-md md:max-w-lg text-center font-sans text-gray-400 text-sm md:text-lg leading-relaxed"
        >
          Crafting immersive digital experiences with code and creativity.
        </motion.p>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <RiArrowDownLine className="text-xl text-accent" />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Hero;