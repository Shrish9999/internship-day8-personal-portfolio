import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { projectsData } from '../constants/data'; // Data import kiya

const Projects = () => {
  const [activeImage, setActiveImage] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const handleMouseEnter = (img) => {
    setActiveImage(img);
    gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    setActiveImage(null);
  };

  return (
    // FIX: id="work" added here for navigation
    <div id="work" className="w-full py-20 bg-zinc-900 relative">
      <div ref={cursorRef} className="fixed top-0 left-0 w-80 h-64 rounded-2xl overflow-hidden pointer-events-none z-[999] opacity-0 -translate-x-1/2 -translate-y-1/2">
        {activeImage && <img src={activeImage} alt="preview" className="w-full h-full object-cover" />}
      </div>

      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-[4vw] font-['Neue_Montreal'] text-white">Featured Projects</h1>
      </div>

      <div className="px-20 mt-10 flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <Link to={`/project/${project.id}`} key={index} className="no-underline"> {/* Link to Detail Page */}
            <div 
              className="group flex flex-col md:flex-row justify-between items-center py-10 border-b border-zinc-700 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(project.image)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-5xl font-['Founders_Grotesk_X-Condensed'] uppercase font-bold text-white group-hover:text-[#CDEA68] transition-colors">
                {project.name}
              </h2>
              <p className="text-lg text-gray-400 font-['Neue_Montreal'] group-hover:text-white">
                {project.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;