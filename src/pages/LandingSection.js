import React, { useEffect, useState } from 'react';
import '../css/LandingSection.css';
import TejasImage from '../assests/Tejas.png';




const LandingSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale/shrink effect
  const scale = Math.max(1 - scrollY / 600, 0.6); // 1 → 0.5 as you scroll

  return (
    <div className="landing-container">
        <div className="imgContainer">
            <img
                src={TejasImage}
                alt="Tejas"
                className="landing-image"
                style={{ transform: `scale(${scale})` }}
            />
        </div>
      {/* <div className="landing-graphics" style={{ opacity: scale }}>
        <h1>Hello, I'm Tejas</h1>
        <p>Scroll to explore</p>
      </div> */}
    </div>
  );
};

export default LandingSection;
