import React from 'react';
import './Mobile.css';
import dispenserD65 from '/Images/dispenserD65.jpg';
import dispenserD66 from '/Images/dispenserD66.jpg';
import dispenserD67 from '/Images/dispenserD67.jpg';
import dispenserD68 from '/Images/dispenserD68.jpg';
import dispenserD69 from '/Images/dispenserD69.jpg';
import dispenserD70 from '/Images/dispenserD70.jpg';
import dispenserD71 from '/Images/dispenserD71.jpg';
import dispenserD72 from '/Images/dispenserD72.jpg';
import mahindraev from '/Images/mahindra-ev.jpg';
import mahindrajeep from '/Images/mahaindrajeep.jpg';
import refuellerR140 from '/Images/refuellerR140.jpg';
import refuellerR268 from '/Images/refuellerR268.jpg';
import refuellerR269 from '/Images/refuellerR269.jpg';
import refuellerR270 from '/Images/refuellerR270.jpg';
import dispenserImg from '/Images/dispenser.png';
import refueller16Img from '/Images/refueller16.jpg';
import refueller25Img from '/Images/refueller25.jpeg';
import Yodha from '/Images/Yodha.jpg';
const vehicleData = [
  { id: "D65", type: "Dispenser with Platform", img: dispenserD65, vehicleNo: "GA11-T-5068" },
  { id: "D66", type: "Dispenser with Platform", img: dispenserD66, vehicleNo: "GA11-T-5066" },
  { id: "D67", type: "Dispenser with Platform", img: dispenserD67, vehicleNo: "GA11T5065" },
  { id: "D68", type: "Dispenser without Platform", img: dispenserD68, vehicleNo: "GA11-T-5067" },
  { id: "D69", type: "Dispenser without Platform", img: dispenserD69, vehicleNo: "GA11-T-4823" },
  { id: "D70", type: "Dispenser without Platform", img: dispenserD70, vehicleNo: "GA11-T-4820" },
  { id: "D71", type: "Dispenser without Platform", img: dispenserD71, vehicleNo: "GA11-T-4821" },
  { id: "D72", type: "Dispenser without Platform", img: dispenserD72, vehicleNo: "GA11-T-4822" },
  { id: "R268", type: "Refueller - 16 KL", img: refuellerR268, vehicleNo: "GA11T3981" },
  { id: "R269", type: "Refueller - 16 KL", img: refuellerR269, vehicleNo: "GA11T3979" },
  { id: "R270", type: "Refueller - 16 KL", img: refuellerR270, vehicleNo: "GA11T3980" },
  { id: "R140", type: "Refueller - 25 KL", img: refuellerR140, vehicleNo: "GJ12AY5486" },
  { id: "S04", type: "QC Vehicle", img: refueller25Img, vehicleNo: "GA11-T-4226" },
  { id: "MAHINDRA XUV 4OO", type: "OFFICERS", img: mahindraev, vehicleNo: "GJ01WQ3076" },
   { id: "YODHA", type: "ITP OPERATION", img: Yodha, vehicleNo: "GA11-T-3965" },
    { id: "MAHINDRA JEEP", type: "ITP OPERATION", img: mahindrajeep, vehicleNo: "GA11-A-6370" },
];

const Mobile = () => {
  return (
    <div className="mobile-wrapper">
      <h2 className="mobile-title">BPCL Mobile Assets</h2>
      <div className="vehicle-grid">
        {vehicleData.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <img src={vehicle.img} alt={vehicle.type} className="vehicle-img" />
            <div className="vehicle-info">
              <h3>{vehicle.id}</h3>
              <p><strong>Vehicle No:</strong> {vehicle.vehicleNo}</p>
              <p><strong>Type:</strong> {vehicle.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;