import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { projects } from '../constants';
import { RiArrowRightUpLine, RiGithubFill, RiCloseLine, RiExternalLinkLine } from 'react-icons/ri';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="w-full min-h-screen py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 flex items-end justify-between border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
            Featured <span className="text-stroke">Work</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Tilt key={project.id} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2500} className={`rounded-2xl ${index === 0 ? 'md:col-span-2' : ''}`}>
              <motion.div
                layoutId={`project-${project.id}`} // Magic for animation
                onClick={() => setSelectedProject(project)}
                className="group relative w-full h-[450px] md:h-[600px] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
              >
                <motion.img layoutId={`image-${project.id}`} src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center animate-pulse">
                        <RiArrowRightUpLine className="text-black text-3xl" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <motion.h3 layoutId={`title-${project.id}`} className="text-4xl font-display font-bold text-white mb-2">{project.title}</motion.h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL (POPUP) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="w-full max-w-4xl bg-zinc-900 rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors">
                <RiCloseLine size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <motion.img layoutId={`image-${selectedProject.id}`} src={selectedProject.image} className="w-full h-full object-cover" />
              </div>

              {/* Details Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <motion.span className="text-accent text-sm font-bold uppercase tracking-widest mb-2">
                  {selectedProject.category}
                </motion.span>
                <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  {selectedProject.title}
                </motion.h3>
                
                <p className="text-gray-400 font-sans leading-relaxed mb-8">
                  {selectedProject.description} <br /><br />
                  This project was built to solve real-world problems using cutting-edge technology. It features a responsive design, smooth animations, and a robust backend.
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-3 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-4">
                  <a href="#" className="flex-1 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    <RiExternalLinkLine /> Live Demo
                  </a>
                  <a href="#" className="flex-1 py-3 border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <RiGithubFill /> Code
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;