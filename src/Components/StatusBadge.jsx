import React from 'react';

const StatusBadge = () => {
  return (
    <div className="fixed bottom-10 left-10 z-40 hidden md:flex items-center gap-3 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-white/80">
        Available for Freelance
      </span>
    </div>
  );
};

export default StatusBadge;