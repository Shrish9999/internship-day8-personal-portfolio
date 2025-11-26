import React, { useState, useEffect } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HackerText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);

  const handleMouseOver = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseOver={handleMouseOver} className={className}>
      {displayText}
    </span>
  );
};

export default HackerText;