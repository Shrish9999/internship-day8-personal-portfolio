import React from 'react';
import Hero from '../Components/Hero';
import Marquee from '../Components/Marquee';
import About from '../Components/About';
import Services from '../Components/Services';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import HorizontalGallery from '../Components/HorizontalGallery'; // New Import
import Testimonials from '../Components/Testimonials'; // New Import

const Home = () => {
  return (
    <div className="w-full">
      
      {/* WRAPPER FOR SCROLLABLE CONTENT (Footer Reveal Logic) */}
      <div className="relative z-10 bg-primary shadow-2xl rounded-b-[50px] mb-[100vh]">
        
        <Hero />
        
        <About />
        
        {/* Cinematic Horizontal Scroll Section */}
        <HorizontalGallery /> 
        
        <Services />
        
        <Work />
        
        {/* Social Proof / Reviews */}
        <Testimonials /> 
        
        <Marquee />
        
        {/* Extra Space at bottom for rounded effect */}
        <div className="h-20 bg-primary rounded-b-[50px]"></div>
      </div>

      {/* STICKY FOOTER (Fixed Behind Content) */}
      <Contact />
      
    </div>
  );
};

export default Home;