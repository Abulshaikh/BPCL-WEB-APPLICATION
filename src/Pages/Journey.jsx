import React from "react";
import './Journey.css';

function Journey() {
  const events = [
    { year: "2000", description: "Discussions began to explore the need for a second airport in Goa due to increasing congestion at Dabolim Airport." },
    { year: "2007", description: "Government of Goa approved the proposal for a new airport at Mopa in North Goa." },
    { year: "2010", description: "Environmental clearance granted by the Ministry of Environment, Forest, and Climate Change." },
    { year: "2016", description: "GMR Goa International Airport Limited (GGIAL) won the bid to develop and operate the airport under a Public-Private Partnership (PPP) model." },
    { year: "2018", description: "Construction work began after resolving legal and environmental challenges." },
    { year: "Oct 2022", description: "Trial runs of airport operations conducted." },
    { year: "Dec 2022", description: "Inauguration by Prime Minister Narendra Modi." },
    { year: "Jan 2023", description: "Commercial operations commenced." },
    { year: "2021", description: "GMR awarded BPCL to build and operate Fuel Farm." },
    { year: "2022", description: "BPCL construction started." },
    { year: "5 Jan 2023", description: "First refueling done by BPCL." },
    { year: "Dec 2023", description: "Crossed more than 10,000 KL monthly sales — a rare achievement." },
    { year: "Future (2045)", description: "Reaching a capacity of 13.1 million passengers annually." }
  ];

  return (
    <div className="journey-card">
      <h2>Airport and BPCL Fuel Farm Journey</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
