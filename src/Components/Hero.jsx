import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Background Glow Blob */}
      <div className="glow-blob"></div>

      <div className="content">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
        >
          HELLO, I AM A
        </motion.h3>

        <div className="big-text">
          {["CREATIVE", "DEVELOPER", "& DESIGNER"].map((text, index) => (
            <div className="mask" key={index}>
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.2 * index, ease: [0.76, 0, 0.24, 1] }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p 
          className="sub-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Building digital experiences that merge art with technology.
        </motion.p>
      </div>

      <motion.div 
        className="scroll-icon"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown />
      </motion.div>
    </div>
  );
};

export default Hero;