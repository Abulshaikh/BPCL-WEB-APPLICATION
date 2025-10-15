import React from "react";
import "./Safety.css";

const safetyData = [
  {
    title: "2 x 1600 KL Water Tanks",
    description: "Dedicated fire water storage tanks with a total capacity of 1600 kilolitres (KL) are installed to provide an uninterrupted water supply for firefighting operations, sustaining up to 4 hours of continuous use. The system features high-capacity pumps, automated controls, and is seamlessly connected to the facility’s fire hydrant and sprinkler network, ensuring a rapid and effective response in case of a fire emergency. To guarantee operational reliability, regular inspection, testing, and maintenance activities are conducted as per safety standards, ensuring the system remains fully functional and ready at all times.",
    image: "/Images/water-tank.jpg",
  },
  {
    title: "Fire Water Pumps",
    description: "The fire protection system includes 2 jockey pumps and 3 diesel engine pumps to ensure complete area coverage. The jockey pumps operate automatically, maintaining a constant system pressure of 7 kg/cm². When there is a significant pressure drop, the diesel engine pumps start automatically to deliver high-volume water for firefighting. This setup ensures reliable and efficient water supply under varying conditions, providing effective fire protection throughout the facility. Regular monitoring and maintenance keep the pumps in optimal working condition.",
    image: "/Images/fire-pumps.jpg",
  },
  {
    title: "Sprinkler System",
    description: "Sprinkler systems are installed in the gantry and pump house to ensure immediate and effective fire response. These systems form a key part of active fire protection, consisting of a dedicated water supply network designed to deliver adequate pressure and flow to the fire sprinklers. In the event of a fire, the sprinkler heads activate automatically, discharging water directly onto the affected area to control or extinguish the flames. This rapid response helps minimize damage and enhances safety. Regular checks ensure the system remains functional and ready for use.",
    image: "/Images/sprinkler.jpg",
  },
  {
    title: "Fire Extinguishers",
    description: "The facility is equipped with fire extinguishers and accessories compliant with OISD (Oil Industry Safety Directorate) standards, ensuring safety and preparedness in case of fire emergencies. Both Dry Chemical Powder (DCP) type and Carbon Dioxide (CO₂) extinguishers are strategically placed across critical areas to address different classes of fires effectively. DCP extinguishers are suitable for flammable liquids and electrical fires, while CO₂ types are ideal for electrical and sensitive equipment fires. Regular inspection, refilling, and maintenance are conducted to ensure all units are operational and ready for immediate use.",
    image: "/Images/fire-extinguisher.jpg",
  },
  {
    title: "24x7 CCTV Surveillance",
    description: "The Aviation Fuel Farm is equipped with a 24x7 CCTV surveillance system to ensure continuous monitoring and enhanced safety across the facility. High-resolution cameras are strategically installed to cover critical areas, including fuel storage, pumping stations, and operational zones. This round-the-clock surveillance helps in real-time detection of any unauthorized access, safety breaches, or emergency situations, enabling immediate response. The footage is recorded and stored for review, supporting incident investigations and compliance with safety standards. Regular checks ensure the system remains fully functional and reliable at all times.",
    image: "/Images/cctv.jpg",
  },
  {
    title: "19 ESB Points",
    description: "Emergency Shutdown Buttons (ESBs) are strategically located throughout the facility, including the apron area, to ensure quick access during critical situations. In case of an emergency, the ESB must be activated to immediately trip the fuel pumps, stopping operations and preventing potential hazards. This system is crucial for ensuring rapid response and enhancing overall safety during incidents such as fuel leaks or fires. Regular inspection and functional testing of the ESBs are conducted to ensure their readiness and reliability in emergency scenarios, aligning with standard safety protocols.",

    image: "/Images/esb.jpg",
  },
  {
    title: "10 ESD Points",
    description: "Emergency Shutdown Devices (ESDs) are integrated into the Aviation Fuel Farm (AFF) system to ensure swift and safe response during critical situations. In the event of an emergency, activating the ESD initiates a complete system shutdown, including all fuel pumps, MOVs (Motor Operated Valves), and ROSOVs (Remote Operated Shut-Off Valves), while also tripping the electricity supply. This immediate action prevents escalation of hazardous conditions and ensures personnel and equipment safety. Regular testing and maintenance are carried out to keep the ESD system fully functional and compliant with safety regulations.",
    image: "/Images/esd.jpg",
  },
  {
    title: "EMERGENCY TROLLY",
    description: "The emergency trolley in the fuel farm is a vital component of the safety system, equipped with essential emergency response tools to handle critical situations effectively. It includes items such as emergency ladders, stretchers, fire axes, fire extinguishers, first aid kits, and proximity suits for firefighting personnel. Strategically placed for quick access, the trolley ensures immediate availability of life-saving equipment during incidents like fire, fuel leaks, or accidents. Regular inspection and maintenance are conducted to keep all items in working condition, ensuring prompt and effective emergency response at all times.",
    image: "/Images/emergencytrolly.jpg",
  },
];

const Safety = () => {
  return (
    <div className="safety-page">
      <h1 className="header">Safety Measures at Our Facility</h1>
      <p className="subheader">
        Ensuring 24x7 safety and compliance as per OISD standards.
      </p>

      <div className="grid-container">
        {safetyData.map((item, index) => (
          <div key={index} className="safety-card">
            <img src={item.image} alt={item.title} className="safety-image" />
            <div className="safety-content">
              <h3 className="safety-title">{item.title}</h3>
              <p className="safety-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Safety;
