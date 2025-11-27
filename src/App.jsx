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

// New Pages Imports (Ensure files exist)
import ProjectDetail from './Pages/ProjectDetail'; 
import NotFound from './Pages/NotFound'; 

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 1. Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Lenis Smooth Scroll
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
      <AnimatePresence mode='wait'>
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>

      <div className="min-h-screen w-full bg-primary text-secondary selection:bg-accent selection:text-white relative">
        
        <Background />
        <Cursor />
        <Navbar />
        <StatusBadge />

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 right-0 w-1 h-full bg-accent origin-top z-50 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
          style={{ scaleY }} 
        />

        {/* Routes Logic Updated */}
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Project Details Route */}
            <Route path="/project/:id" element={<ProjectDetail />} />

            {/* 404 Route (Sabse End mein) */}
            <Route path="*" element={<NotFound />} />

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