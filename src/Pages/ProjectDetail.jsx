// src/Pages/ProjectDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../constants/data';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0); // Page load hote hi top pe jao
  }, []);

  if (!project) return <div className="text-white text-center pt-40">Project Not Found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-zinc-900 text-white pt-32 px-10 md:px-20"
    >
        {/* Breadcrumb */}
        <Link to="/" className="text-sm uppercase text-gray-400 hover:text-[#CDEA68] mb-10 block">
            ← Back to Home
        </Link>

        {/* Title & Category */}
        <div className="mb-20">
            <h1 className="text-[8vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold text-[#CDEA68]">
                {project.name}
            </h1>
            <h3 className="text-2xl font-['Neue_Montreal'] mt-2 text-white/80 border-l-4 border-[#CDEA68] pl-4">
                {project.category}
            </h3>
        </div>

        {/* Big Image */}
        <div className="w-full h-[60vh] md:h-[80vh] bg-zinc-800 rounded-xl overflow-hidden mb-20 shadow-2xl shadow-[#CDEA68]/10">
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                src={project.detailImage} 
                className="w-full h-full object-cover" 
                alt={project.name} 
            />
        </div>

        {/* Description & Info */}
        <div className="flex flex-col md:flex-row gap-20 pb-40">
            <div className="w-full md:w-1/2">
                <p className="text-2xl font-['Neue_Montreal'] leading-relaxed">
                    {project.description}
                </p>
                <button className="mt-10 px-8 py-4 border border-white rounded-full uppercase hover:bg-white hover:text-black transition-all">
                    Live Preview
                </button>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col gap-5 text-gray-400 font-['Neue_Montreal']">
                 <div className="border-t border-zinc-700 pt-5">
                    <h4 className="mb-2 text-white">Client</h4>
                    <p>{project.name} Intl.</p>
                 </div>
                 <div className="border-t border-zinc-700 pt-5">
                    <h4 className="mb-2 text-white">Year</h4>
                    <p>2024</p>
                 </div>
            </div>
        </div>
    </motion.div>
  );
};

export default ProjectDetail;