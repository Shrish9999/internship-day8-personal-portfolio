import React from 'react';
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import Marquee from '../Components/Marquee'; 
import About from '../Components/About';
import Experience from '../Components/Experience';
import Eyes from '../Components/Eyes';
import Projects from '../Components/Projects';
import Services from '../Components/Services'; 
import Contact from '../Components/Contact';
import { motion } from 'framer-motion';
// 1. New Import for SEO tags
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-zinc-900"
    >
        {/* 2. SEO Meta Tags - Google Search ke liye */}
        <Helmet>
            <title>Shrish Tiwari | Full Stack Developer</title>
            <meta name="description" content="Portfolio of Shrish Tiwari - MERN Stack & Django Developer based in India. Specialized in building scalable web applications." />
            <meta name="keywords" content="Shrish Tiwari, Full Stack Developer, MERN Stack, Django, React Developer, Portfolio, Kuchoriya TechSoft" />
        </Helmet>

        <Landing />
        <Marquee />
        <About />
        
        {/* Internship & Education */}
        <Experience /> 

        <Eyes />
        <Projects />
        <Services />
        <Contact />
    </motion.div>
  );
};

export default Home;