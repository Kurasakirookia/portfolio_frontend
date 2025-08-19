// components/LoadingScreen.js
import React from 'react';
import '../css/LoadingScreen.css'; // We'll create this CSS file

const LoadingScreen = ({ 
  message = "Loading...", 
  size = "40px",
  color = "#007bff",
  minHeight = "60vh",
  className = ""
}) => {
  return (
    <div 
      className={`loading-container ${className}`}
      style={{ minHeight }}
    >
      <div 
        className="loading-spinner"
        style={{
          width: size,
          height: size,
          borderTopColor: color
        }}
      ></div>
      <h2 className="loading-text">{message}</h2>
    </div>
  );
};

export default LoadingScreen;