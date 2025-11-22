import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Projects.scss'; 

const projectsData = [
  {
    name: "Cynthia Ugwu",
    description: "Design & Development",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop"
  },
  {
    name: "Obys Agency",
    description: "Creative Studio",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2400&auto=format&fit=crop"
  },
  {
    name: "Play New",
    description: "Interactive Experience",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop"
  },
  {
    name: "Sheryians",
    description: "Teaching Code",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2400&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [activeImage, setActiveImage] = useState(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out"
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const handleMouseEnter = (img) => {
    setActiveImage(img);
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    setTimeout(() => setActiveImage(null), 300);
  };

  return (
    <div className="projects-section">
      {/* Floating Cursor Modal */}
      <div ref={cursorRef} className="cursor-modal">
        {activeImage && <img src={activeImage} alt="project" />}
        <div className="view-label">View</div>
      </div>

      <div className="container">
        <h1 className="section-title">Featured Projects</h1>
        <div className="project-list">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="project-item"
              onMouseEnter={() => handleMouseEnter(project.image)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overlay"></div>
              <div className="item-content">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;