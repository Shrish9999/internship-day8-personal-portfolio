import React from 'react';
import './Cards.scss';

const Cards = () => {
  return (
    <div className="cards-section">
      <div className="card-container full-width">
        <div className="card large">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Ochi" />
            <button>&copy; 2019-2022</button>
        </div>
      </div>
      
      <div className="card-container half-width">
        <div className="card small dark">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Clutch" />
            <button>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card small dark">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Academy" height="100"/>
            <button>BUSINESS BOOTCAMP</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;