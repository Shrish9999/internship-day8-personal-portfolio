// src/Components/Cards.jsx
import React from 'react';

const Cards = () => {
  return (
    <div className="w-full py-20 px-6 bg-primary flex flex-col items-center gap-5">
      
      {/* Title */}
      <div className="w-full max-w-7xl border-b border-white/10 pb-8 mb-8">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
            Client <span className="text-stroke">Feedback</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-5 h-auto md:h-[50vh]">
        
        {/* Big Card (Green) */}
        <div className="card-container w-full md:w-1/2 h-[40vh] md:h-full">
            <div className="relative w-full h-full bg-[#004d43] rounded-2xl flex items-center justify-center group overflow-hidden border border-white/5 hover:scale-[1.02] transition-transform duration-500">
                <img className="w-32 z-10" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Ochi" />
                <button className="absolute left-5 bottom-5 px-4 py-1 border border-[#cdea68] text-[#cdea68] rounded-full text-xs font-sans tracking-widest uppercase hover:bg-[#cdea68] hover:text-black transition-colors z-20">
                    &copy; 2019-2022
                </button>
                {/* Decoration */}
                <div className="absolute w-full h-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
        </div>
        
        {/* Small Cards (Dark) */}
        <div className="card-container w-full md:w-1/2 flex flex-col md:flex-row gap-5 h-full">
            
            {/* Card 2 */}
            <div className="relative w-full md:w-1/2 h-[40vh] md:h-full bg-[#212121] rounded-2xl flex items-center justify-center group border border-white/10 hover:border-accent/50 transition-colors">
                <img className="w-24 opacity-80 group-hover:opacity-100 transition-opacity" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Clutch" />
                <button className="absolute left-5 bottom-5 px-4 py-1 border border-white text-white rounded-full text-xs font-sans tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                    Rating 5.0
                </button>
            </div>
            
            {/* Card 3 */}
            <div className="relative w-full md:w-1/2 h-[40vh] md:h-full bg-[#212121] rounded-2xl flex items-center justify-center group border border-white/10 hover:border-accent/50 transition-colors">
                <img className="w-24 opacity-80 group-hover:opacity-100 transition-opacity" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Academy" />
                <button className="absolute left-5 bottom-5 px-4 py-1 border border-white text-white rounded-full text-xs font-sans tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                    Bootcamp
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;