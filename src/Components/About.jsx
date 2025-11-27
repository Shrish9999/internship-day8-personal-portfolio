import React from 'react';
import { personalDetails, skillsData } from '../constants/data'; 

// 1. Apni Photo Import karo (Make sure file src/assets/ folder mein ho)
// Agar error aaye to check karna file ka naam aur extension (.jpg/.png) sahi hai ya nahi
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  return (
    // 2. Yahan 'id="about"' add kiya taaki Navbar link yahan scroll kare
    <div id="about" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight mb-10">
        {personalDetails.bio}
      </h1>

      <div className="w-full border-t-[1px] pt-10 border-[#a1b562] flex flex-col md:flex-row gap-5">
        
        <div className="w-full md:w-1/2">
            <h1 className="text-4xl mb-5">My Skills:</h1>
            <div className="flex flex-wrap gap-2">
                {skillsData.map((skill, index) => (
                    <span key={index} className="px-4 py-2 border border-black/20 rounded-full text-sm font-['Neue_Montreal'] uppercase hover:bg-black hover:text-[#CDEA68] transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        <div className="w-full md:w-1/2 h-[60vh] rounded-3xl bg-[#b0c859] overflow-hidden relative group">
            {/* 3. Yahan src variable use kiya */}
            <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src={profileImg} 
                alt="Shrish Tiwari" 
            />
        </div>

      </div>
    </div>
  );
};

export default About;