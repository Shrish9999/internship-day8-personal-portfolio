import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton'; // Import kiya

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation Variants (Same as before)
  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };
  const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full px-6 md:px-12 py-5 flex justify-between items-center z-50 bg-primary/10 backdrop-blur-md border-b border-white/5"
    >
      {/* 1. BRAND NAME REPLACED (NEXUS) */}
      <Link to="/" className="text-2xl font-display font-bold tracking-tighter cursor-pointer text-white z-50 mix-blend-difference">
        NEX<span className="text-accent">US</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {['Work', 'About', 'Services'].map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`} className="text-sm font-sans text-gray-300 hover:text-white uppercase tracking-widest transition-colors">
            {item}
          </a>
        ))}
        
        {/* 2. MAGNETIC BUTTON ADDED */}
        <MagneticButton className="px-5 py-2 rounded-full border border-white/20 text-white text-sm uppercase tracking-widest hover:text-black transition-colors">
          Let's Talk
        </MagneticButton>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50 text-2xl text-white cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </div>

      {/* Full Screen Menu (Same Logic) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className="fixed left-0 top-0 w-full h-screen bg-black origin-top flex flex-col justify-center items-center gap-10 z-40">
             {/* ... Mobile Menu Content (Same as previous code) ... */}
              <div className="flex flex-col gap-6 text-center font-display text-4xl uppercase font-bold text-white">
              {['Home', 'Work', 'About', 'Contact'].map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <a href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;