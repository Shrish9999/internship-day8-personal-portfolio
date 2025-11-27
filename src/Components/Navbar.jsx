import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };
  const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(isOpen) setIsOpen(false); 
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full px-6 md:px-12 py-5 flex justify-between items-center z-50 bg-zinc-900/40 backdrop-blur-lg border-b border-white/10"
    >
      {/* LOGO CHANGED HERE */}
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-3xl font-['Founders_Grotesk_X-Condensed'] font-bold tracking-wide cursor-pointer text-white z-50 mix-blend-difference hover:text-ochi-green transition-colors duration-300"
      >
        SHRISH<span className="text-ochi-green">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {['Work', 'About', 'Services'].map((item, index) => (
          <button 
            key={index} 
            onClick={() => handleScroll(item.toLowerCase())} 
            className="text-sm font-['Neue_Montreal'] font-light text-white hover:text-ochi-green capitalize transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            {item}
          </button>
        ))}
        
        <div onClick={() => handleScroll('contact')}>
            <MagneticButton className="px-5 py-2 rounded-full border-[1px] border-white/30 text-white font-['Neue_Montreal'] text-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            Let's Talk
            </MagneticButton>
        </div>
      </div>

      <div 
        className="md:hidden z-50 text-2xl text-white cursor-pointer hover:text-ochi-green transition-colors duration-300" 
        onClick={toggleMenu}
      >
        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVars} initial="initial" animate="animate" exit="exit" 
            className="fixed left-0 top-0 w-full h-screen bg-zinc-900 origin-top flex flex-col justify-center items-center gap-10 z-40"
          >
              <div className="flex flex-col gap-6 text-center font-['Founders_Grotesk_X-Condensed'] text-6xl uppercase font-bold text-white">
              {['Home', 'Work', 'About', 'Contact'].map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <button 
                      onClick={() => handleScroll(item.toLowerCase() === 'home' ? '' : item.toLowerCase())}
                      className="hover:text-ochi-green hover:italic transition-all duration-300 block bg-transparent border-none cursor-pointer"
                    >
                      {item}
                    </button>
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