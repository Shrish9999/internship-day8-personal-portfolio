import React from 'react';
import { experienceData, educationData } from '../constants/data';

const Experience = () => {
  return (
    <div className="w-full py-20 bg-zinc-900 text-white rounded-t-3xl border-t border-zinc-700">
      <div className="px-10 md:px-20 border-b border-zinc-700 pb-10 mb-10">
        <h1 className="text-[4vw] font-['Neue_Montreal']">Experience & Education</h1>
      </div>

      <div className="px-10 md:px-20">
        
        {/* Experience Section */}
        <h3 className="text-2xl font-['Founders_Grotesk_X-Condensed'] uppercase text-[#CDEA68] mb-5">Current Role</h3>
        {experienceData.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-10 border-b border-zinc-800 pb-10 mb-10">
                <div className="w-full md:w-1/4">
                    <p className="font-['Neue_Montreal'] text-gray-400">{exp.duration}</p>
                    <p className="text-sm mt-2 text-[#CDEA68] border border-[#CDEA68] rounded-full px-3 py-1 w-fit">{exp.type}</p>
                </div>
                <div className="w-full md:w-3/4">
                    <h2 className="text-4xl font-['Founders_Grotesk_X-Condensed'] uppercase font-bold">{exp.company}</h2>
                    <h4 className="text-xl font-['Neue_Montreal'] mt-2">{exp.role}</h4>
                    <p className="text-gray-400 mt-5 font-['Neue_Montreal']">{exp.description}</p>
                    <p className="text-sm text-gray-500 mt-2">{exp.location}</p>
                </div>
            </div>
        ))}

        {/* Education Section */}
        <h3 className="text-2xl font-['Founders_Grotesk_X-Condensed'] uppercase text-[#CDEA68] mb-5 mt-20">Education</h3>
        {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between border-b border-zinc-800 py-5">
                <h4 className="text-xl font-['Neue_Montreal']">{edu.institution}</h4>
                <div className="text-right">
                    <p className="text-gray-300">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
            </div>
        ))}

      </div>
    </div>
  );
};

export default Experience;