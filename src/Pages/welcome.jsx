// src/Pages/Welcome.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const [isFlying, setIsFlying] = useState(false);

  const handleClick = () => {
    setIsFlying(true);
    setTimeout(() => {
      navigate('/ProductTab');
    }, 2500); // wait for animation to finish
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome to the BPCL Aviation Fuel Farm Mopa</h1>
      <div className="welcome-card">
        <p>Explore modules like Safety, Hydrant, Mobile, Sales and more.</p>
        <div className={`airplane-icon ${isFlying ? 'fly' : ''}`} onClick={handleClick}>
          ✈️
        </div>
      </div>
    </div>
  );
};

export default Welcome;
