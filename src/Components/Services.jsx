// src/Components/Services.jsx
import React from 'react';
import { servicesData } from '../constants/data';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    // FIX: id="services" added here for navigation
    <div id="services" data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-20 bg-zinc-900 text-white rounded-t-3xl border-t border-zinc-700">
      <div className="px-10 md:px-20 mb-10 border-b border-zinc-700 pb-8">
        <h1 className="text-[4vw] font-['Neue_Montreal']">Our Services</h1>
      </div>

      <div className="px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {servicesData.map((service, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10, backgroundColor: "#CDEA68", color: "#000" }}
            transition={{ duration: 0.3 }}
            className="card p-8 border border-zinc-600 rounded-xl min-h-[300px] flex flex-col justify-between cursor-pointer group bg-zinc-800/50"
          >
            <div className="icon text-4xl mb-5">{service.icon}</div>
            <div>
              <h3 className="text-2xl font-['Founders_Grotesk_X-Condensed'] font-bold uppercase mb-3">{service.title}</h3>
              <p className="font-['Neue_Montreal'] text-sm opacity-80 group-hover:opacity-100 group-hover:font-medium">
                {service.description}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center mt-5 self-end opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;