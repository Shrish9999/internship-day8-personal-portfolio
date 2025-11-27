import React from 'react';
import { Link } from 'react-router-dom';
import Eyes from '../Components/Eyes'; // Reuse Eyes Component
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 relative overflow-hidden flex flex-col items-center justify-center">
        <Helmet>
            <title>404 - Page Not Found | Shrish Tiwari</title>
        </Helmet>

        {/* Background Eyes */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
            <Eyes />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white mix-blend-difference">
            <motion.h1 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-[15vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold text-[#CDEA68]"
            >
                404
            </motion.h1>
            <h2 className="text-4xl font-['Neue_Montreal'] mb-10 uppercase">
                Lost in Space?
            </h2>
            
            <Link to="/" className="px-10 py-4 border-[1px] border-[#CDEA68] rounded-full text-[#CDEA68] uppercase font-['Neue_Montreal'] hover:bg-[#CDEA68] hover:text-black transition-all duration-300">
                Go Back Home
            </Link>
        </div>
    </div>
  );
};

export default NotFound;