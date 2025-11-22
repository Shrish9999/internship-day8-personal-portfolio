import React, { useEffect, useState } from 'react';
import './Eyes.scss';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Mouse Move Logic
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Center point nikal rahe hain screen ka
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Angle calculate kar rahe hain (Radians to Degrees)
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // -180 isliye taaki aankhein seedhi mouse ki taraf dekhein
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes-section">
      <div className="eyes-container">
        
        {/* Left Eye */}
        <div className="eye">
          <div className="pupil-bg">
            <div 
              className="line" 
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
            >
              <div className="pupil"></div>
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className="eye">
          <div className="pupil-bg">
            <div 
              className="line" 
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
            >
              <div className="pupil"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Eyes;