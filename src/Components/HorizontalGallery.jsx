import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", // Coding
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Tech
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop", // Design
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract
  "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2070&auto=format&fit=crop", // Office
];

const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Magic: Vertical scroll ko Horizontal movement mein convert karna
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    // Height 300vh means user has to scroll 3 screens to pass this section
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-900">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-10 px-20">
          {images.map((img, index) => (
            <div 
                key={index} 
                className="group relative h-[400px] w-[600px] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-800 border border-white/10"
            >
              <img 
                src={img} 
                alt="gallery" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
          
          {/* Last Text Card */}
          <div className="h-[400px] w-[400px] flex-shrink-0 flex items-center justify-center rounded-3xl border border-white/20 bg-accent/10">
              <h1 className="text-5xl font-display font-bold text-white uppercase text-center p-4">
                  Behind <br/> The <br/> Scenes
              </h1>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;