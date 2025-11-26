import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  });

  // Text Highlight Animation
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 bg-primary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left: Heading */}
        <div className="w-full md:w-1/3">
           <h3 className="text-accent font-sans uppercase tracking-widest mb-4 text-sm">Who I Am</h3>
           <div className="w-full h-[1px] bg-white/10 mb-8"></div>
        </div>

        {/* Right: Reveal Text */}
        <div className="w-full md:w-2/3" ref={element}>
          <motion.p 
            style={{ opacity }}
            className="text-3xl md:text-5xl font-display font-medium leading-tight text-white"
          >
            I am a creative developer passionate about building <span className="text-accent">digital products</span> that empower people. 
            I believe that design is not just about how it looks, but how it <span className="text-accent">works</span>.
            From concept to execution, I focus on micro-interactions and performance.
          </motion.p>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                  { num: "3+", label: "Years Exp" },
                  { num: "50+", label: "Projects" },
                  { num: "20+", label: "Happy Clients" },
                  { num: "100%", label: "Commitment" }
              ].map((stat, index) => (
                  <div key={index}>
                      <h4 className="text-4xl font-display font-bold text-white mb-2">{stat.num}</h4>
                      <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;