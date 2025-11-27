import React, { useEffect, useState, useRef } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Mouse move logic
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Screen ke center se difference nikalna
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Angle Calculation (Radians to Degrees)
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // -180 isliye taaki aankhein seedhi mouse ki taraf dekhein
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function zaroori hai memory leak rokne ke liye
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      {/* Background Image Container */}
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        
        {/* Eyes Container (Centered) */}
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          
          {/* Left Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              
              {/* Rotating Line */}
              {/* Added 'ease-out' and 'duration-200' for smoothness */}
              <div 
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 transition-transform duration-100 ease-linear"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
              
            </div>
          </div>

          {/* Right Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              
              {/* Rotating Line */}
              <div 
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 transition-transform duration-100 ease-linear"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;