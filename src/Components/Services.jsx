import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowRightDownLine } from 'react-icons/ri';

const services = [
  { id: "01", title: "UI/UX Design", description: "Creating intuitive interfaces.", skills: ["Figma", "Design Systems"] },
  { id: "02", title: "Web Development", description: "Building scalable websites.", skills: ["React", "Next.js", "Tailwind"] },
  { id: "03", title: "Motion Design", description: "Adding life to web pages.", skills: ["GSAP", "Three.js"] }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  // Spotlight Logic
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <section id="services" className="w-full py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto" ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
        {/* Spotlight Overlay Effect */}
        <div 
            className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 rounded-3xl z-0"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`
            }}
        />

        <div className="mb-20 relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase">
            My <span className="text-accent">Expertise</span>
          </h2>
        </div>

        <div className="flex flex-col relative z-10">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => setActiveService(activeService === index ? null : index)}
              className="border-t border-white/10 py-10 cursor-pointer group transition-all duration-300 hover:pl-10"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-gray-500 font-sans">/{service.id}</span>
                  <h3 className={`text-3xl md:text-5xl font-display font-bold uppercase transition-colors ${activeService === index ? "text-accent" : "text-white"}`}>
                    {service.title}
                  </h3>
                </div>
                <RiArrowRightDownLine className={`text-2xl transition-transform duration-500 ${activeService === index ? "rotate-180 text-accent" : "text-white"}`} />
              </div>

              <AnimatePresence>
                {activeService === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="pt-6 md:pl-24 max-w-3xl">
                      <p className="text-gray-400 font-sans text-lg mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {service.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 border border-white/20 rounded-full text-xs text-white uppercase">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-white/10 w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;