import React, { useState, useEffect } from 'react';
import './VerticalTextAnimation.css'; // Import CSS for styling

const VerticalTextAnimation = ({ text, duration }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset === -100 ? 0 : prevOffset - 25)); // Change 25 to control speed
    }, duration);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div className="vertical-text-container">
      <div className="vertical-text" style={{ top: `${offset}%` }}>
        {text}
      </div>
    </div>
  );
};

export default VerticalTextAnimation;