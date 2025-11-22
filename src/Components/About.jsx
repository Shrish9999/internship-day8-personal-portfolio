import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-section">
      <h1 className="heading">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      
      <div className="border-line"></div>

      <div className="details">
        <div className="left-col">
          <h3>Our Approach:</h3>
          <button className="read-more">
            READ MORE
            <div className="circle"></div>
          </button>
        </div>
        
        <div className="right-col">
          {/* Sarthak ne yahan ek image lagayi hai */}
          <img 
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" 
            alt="About Ochi" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;