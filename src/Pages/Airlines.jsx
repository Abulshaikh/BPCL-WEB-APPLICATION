import React from "react";
import "./Airlines.css";

const Airlines = () => {
  const airlines = [
    { name: "IndiGo", logo:"./Images/IndiGo.jpeg"},
    { name: "Air India", logo: "./Images/Air India.jpg" },
    { name: "Vistara", logo: "./Images/Vistara.jpeg" },
    { name: "Oman Air", logo: "./Images/Oman Air.png"  },
    { name: "Star Air", logo: "./Images/Star Air.png"  },
    { name: "SpiceJet", logo: "./Images/Spice Jet.png"  },
    { name: "Akasa Air", logo:"./Images/Akasa Air.jpeg"  },
    { name: "Fly 91", logo: "./Images/Fly 91.png"  },
    { name: "Qatar Airways", logo: "./Images/Qatar Airways.png"  },
  ];

  return (
    <div className="airlines-page">
      <h1 className="page-title">Our Airline Partners</h1>
      <div className="airlines-grid">
        {airlines.map((airline, index) => (
          <div className="airline-logo-card" key={index}>
            <img
              src={airline.logo}
              alt={`${airline.name} logo`}
              className="airline-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airlines;