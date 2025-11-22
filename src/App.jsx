import React, { useEffect } from 'react';
import Lenis from 'lenis'; // Smooth Scroll Magic
import 'lenis/dist/lenis.css'; // Essential CSS

import Cursor from './Components/Cursor';
import Hero from './Components/Hero';
import Work from './Components/Work';
// Purane components hata diye ya reuse kar sakte ho
import Marquee from './Components/marquee'; // Ise rakh sakte hain style change karke

function App() {
  
  // Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll speed control
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="main-container">
      <Cursor /> {/* Custom Cursor */}
      
      <Hero />
      <Marquee />
      <Work />
      
      {/* Footer ya aur sections yahan add kar sakte ho */}
    </div>
  );
}

export default App;