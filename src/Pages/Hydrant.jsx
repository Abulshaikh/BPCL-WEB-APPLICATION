import React from 'react';
import './Hydrant.css';
import { FaWater, FaTachometerAlt, FaFlask, FaArrowDown, FaArrowUp, FaMapMarkedAlt } from 'react-icons/fa';
import hydrantImage from '/Images/hydrant-line.jpg'; // Place your image in src/assets

const Hydrant = () => {
  return (
    <div className="page-container">
      <div className="hydrant-box">
        <div className="image-container">
          <img src={hydrantImage} alt="Hydrant Line" className="hydrant-image" />
        </div>

        <div className="info-section">
          <h2 className="hydrant-title">Hydrant System Overview</h2>

          <div className="hydrant-item"><FaMapMarkedAlt className="icon" /><span>Hydrant Line: <strong>2.7 km (loop line)</strong></span></div>
          <div className="hydrant-item"><FaMapMarkedAlt className="icon" /><span>Hydrant Line diameter: <strong>12 inch</strong></span></div>
          <div className="hydrant-item"><FaTachometerAlt className="icon" /><span>Pressure: <strong>9–10 kg/cm²</strong></span></div>
          <div className="hydrant-item"><FaWater className="icon" /><span>Hydrant Pits: <strong>20</strong></span></div>
          <div className="hydrant-item"><FaFlask className="icon" /><span>Test Rigs / Simulation Points: <strong>2</strong></span></div>
          <div className="hydrant-item"><FaArrowDown className="icon" /><span>Low Points: <strong>5</strong></span></div>
          <div className="hydrant-item"><FaArrowUp className="icon" /><span>High Points: <strong>4</strong></span></div>
        </div>
      </div>
    </div>
  );
};

export default Hydrant;
