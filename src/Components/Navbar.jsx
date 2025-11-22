import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">K72 clone</div>
      <div className="links">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} href={`#${item}`} className={`link ${index === 4 && "contact-btn"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;