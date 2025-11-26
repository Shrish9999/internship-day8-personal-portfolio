import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Components
import Navbar from './Components/Navbar';
import Cursor from './Components/Cursor';
import Preloader from './Components/Preloader';
import Home from './Pages/Home';
import Background from './Components/Background';
import StatusBadge from './Components/StatusBadge'; 

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 1. Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Scroll Lock Logic (Jab tak loading hai, scroll mat karne do)
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0); // Top pe rakho
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  // 3. Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* PRELOADER (Z-Index 9999 - Sabse Upar) */}
      {/* Note: 'mode="wait"' hata diya taaki ye site ke upar overlap kare */}
      <AnimatePresence>
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>

      {/* MAIN WEBSITE CONTENT (Humesha Render hoga, lekin Preloader ke peeche chupa rahega) */}
      <div className="min-h-screen w-full text-secondary selection:bg-accent selection:text-white relative">
        
        {/* Animated Background */}
        <Background />

        <Cursor />
        <Navbar />
        
        {/* Floating Status Badge */}
        <StatusBadge />

        {/* Right Side Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 right-0 w-1 h-full bg-accent origin-top z-50 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
          style={{ scaleY }} 
        />

        {/* Page Transitions & Routes */}
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>

      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;