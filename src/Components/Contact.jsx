import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightUpLine, RiGithubFill, RiLinkedinFill, RiTwitterXFill, RiInstagramLine } from 'react-icons/ri';

const Contact = () => {
  return (
    // Fixed position aur z-0 (peeche) set kiya hai
    <section id="contact" className="fixed bottom-0 left-0 w-full h-screen bg-zinc-950 flex flex-col justify-end px-6 pb-10 z-0">
      
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 mb-20">
        
        {/* Big Text */}
        <div className="mb-20">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[12vw] leading-[0.8] font-bold text-white uppercase tracking-tighter"
          >
            Let's <br /> <span className="text-zinc-700">Work</span> <span className="text-accent">Together</span>
          </motion.h1>
        </div>

        {/* Links & Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-t border-white/10 pt-10">
            
            <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Drop a line</p>
                <a href="mailto:hello@nexus.com" className="text-2xl md:text-3xl font-sans text-white hover:text-accent transition-colors flex items-center gap-2 group">
                    hello@nexus.com
                    <RiArrowRightUpLine className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
            </div>

            <div className="flex gap-6">
                {[RiGithubFill, RiLinkedinFill, RiTwitterXFill, RiInstagramLine].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                        <Icon size={20} />
                    </a>
                ))}
            </div>

            <div className="text-right hidden md:block">
                <p className="text-gray-500 text-sm uppercase tracking-widest">Local Time</p>
                <p className="text-white text-xl font-sans">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>

        </div>

        {/* Copyright */}
        <div className="mt-20 text-center md:text-left text-zinc-800 text-[10vw] md:text-[14vw] font-display font-bold leading-none select-none opacity-20">
            NEXUS
        </div>

      </div>
    </section>
  );
};

export default Contact;