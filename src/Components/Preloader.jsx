import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [count, setCount] = useState(0);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        setTimeout(() => setShowExit(true), 500); // 100% ke baad thoda pause
        return 100;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  // Jab exit animation khatam ho jaye, tab App ko batao ki loading hata de
  const handleExitComplete = () => {
    setTimeout(() => {
        setLoading(false);
    }, 1000); // Wait for animation to finish visually
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      
      {/* 5 Shutter Panels */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ height: "100%" }}
            animate={showExit ? { height: 0 } : { height: "100%" }}
            transition={{ 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1], 
                delay: index * 0.1 // Stagger effect (ek ke baad ek)
            }}
            onAnimationComplete={index === 4 ? handleExitComplete : undefined}
            className="w-1/5 bg-black border-r border-zinc-900 relative"
          >
             {/* Thoda texture panels par */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </motion.div>
        ))}
      </div>

      {/* Counter Text (Ye Panels ke upar dikhega) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={showExit ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center z-20 text-white"
      >
        <div className="flex flex-col items-center">
            <h1 className="text-[12vw] font-display font-bold leading-none tracking-tighter">
                {count}%
            </h1>
            <div className="w-64 h-[2px] bg-zinc-800 mt-4 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                />
            </div>
            <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mt-2 animate-pulse">
                System Initializing...
            </p>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Preloader;