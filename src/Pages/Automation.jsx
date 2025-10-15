// src/Pages/Automation.jsx
import React from 'react';
import './Automation.css';
import tfmsImg from '/Images/tfms.jpg';
import plcImg from '/Images/plc.jpg';
import serverImg from '/Images/server.jpeg';
import radarImg from '/Images/radar.png';
import servoImg from '/Images/servo.jpeg';

const Automation = () => {
  return (
    <div className="automation-container">
      <h1 className="automation-title">Automation & Control Room</h1>

      <p className="automation-intro">
        BPCL's Fuel Farm at the airport is equipped with advanced automation systems managed by <strong>Honeywell</strong>. The control room oversees tank levels, safety, and system performance in real time.
      </p>

      <div className="automation-section">
        <h2>🛠️ Core System Overview</h2>
        <div className="automation-grid">
          <div className="automation-card">
            <img src={tfmsImg} alt="TFMS" />
            <p><strong>Tank Farm Management System (TFMS):</strong> Supervises fuel inventory, alarms, and real-time monitoring.</p>
          </div>
          <div className="automation-card">
            <img src={serverImg} alt="Servers" />
            <p><strong>2 Redundant Servers:</strong> Backup and fault-tolerant infrastructure for high availability.</p>
          </div>
          <div className="automation-card">
            <img src={plcImg} alt="PLC" />
            <p><strong>2 Safety PLCs:</strong> Ensure fail-safe operation with emergency shutdown capability.</p>
          </div>
        </div>
      </div>

      <div className="automation-section">
        <h2>📡 Auto Level Gauging</h2>
        <div className="automation-grid">
          <div className="automation-card">
            <img src={servoImg} alt="Servo Gauge" />
            <p><strong>Servo Gauges:</strong> High-accuracy fuel level and temperature monitoring.</p>
          </div>
          <div className="automation-card">
            <img src={radarImg} alt="Radar Gauge" />
            <p><strong>Radar Gauges:</strong> Contactless measurement ideal for explosive environments.</p>
          </div>
        </div>
      </div>

      <div className="automation-footer">
        <p>BPCL and Honeywell ensure reliability, safety, and smart fuel automation through world-class control systems.</p>
      </div>
    </div>
  );
};

export default Automation;
