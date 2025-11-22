import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cursor.scss';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Check agar kisi link/button pe hover hai
    const handleMouseOver = (e) => {
      if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.project-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: { x: mousePosition.x - 10, y: mousePosition.y - 10 },
    hover: { 
      height: 50, 
      width: 50, 
      x: mousePosition.x - 25, 
      y: mousePosition.y - 25, 
      backgroundColor: "white", 
      mixBlendMode: "difference" 
    }
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={isHovered ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }} // Smooth Lag
    />
  );
};

export default Cursor;