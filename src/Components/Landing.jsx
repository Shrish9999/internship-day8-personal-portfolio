import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; // Agar install nahi hai to simple useEffect use karein
import './Landing.scss';

const Landing = () => {
  // Simple useEffect for animation
  React.useEffect(() => {
    gsap.fromTo(".mask h1", 
      { y: 100 }, 
      { y: 0, duration: 1, ease: "power4.out", stagger: 0.1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="landing-page">
      <div className="text-structure">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="mask">
              <h1>{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-top"></div>
      <div className="sub-text">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <div className="start-btn">Start the Project</div>
      </div>
    </div>
  );
};

export default Landing;