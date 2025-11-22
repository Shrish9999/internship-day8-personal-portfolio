import React from 'react';
import './Work.scss';
import { motion } from 'framer-motion';

const projects = [
  { title: "CYBERPUNK", cat: "WEB DESIGN", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" },
  { title: "NEON BRAND", cat: "IDENTITY", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
  { title: "FUTURE AI", cat: "DEVELOPMENT", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" }
];

const Work = () => {
  return (
    <div className="work-section">
      <h2 className="section-header">SELECTED WORKS</h2>
      
      <div className="gallery">
        {projects.map((item, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            whileHover={{ scale: 0.95, rotate: index % 2 === 0 ? 2 : -2 }} // Tilt effect
            transition={{ duration: 0.4 }}
          >
            <div className="image-container">
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.cat}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;