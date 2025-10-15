import React from "react";
import "./Home.css";

const Home = () => {
  const officers = [
    { name: "SARFARAZ HUSSAIN", photo:"./Images/Sarfaraz.jpeg", description: "Sarfaraz Hussain is a dynamic professional with over 18 years of experience in BPCL's Aviation Business. A civil engineer by qualification, he has played a pivotal role in several key aviation infrastructure projects, including commissioning India’s first self-bunded Aviation Fuelling Station in Nanded and establishing a remote fuelling station for the Indian Army in Arunachal Pradesh. He also led operations at BPCL’s first open-access fuelling station in Kannur and currently manages the state-of-the-art hydrant refuelling facility at MOPA, Goa.Beyond his professional excellence, Sarfaraz is a former National Boxer, a mentor to young athletes, and has contributed internationally, volunteering at the 2016 Rio Olympics and supporting the 2017 World Youth Women's Boxing Championship.His journey is a testament to BPCL’s values of innovation, leadership, and community impact." },
    { name: "GOPALA KRISHNA", photo: "./Images/gopala.jpg", description: "Gopala Krishna began his career after completing his Mechanical Engineering he played a key role in various aviation fuel farm operations. He initially joined the organization at the Chennai AFS, where he took on responsibilities as a Shift In-Charge, handling day-to-day operations with dedication and precision. Later, he was transferred to the Mumbai Aviation Fuel Farm, where he gained extensive experience in handling maintenance . Currently posted at the Mopa Aviation Fuel Farm, Gopala Krishna is in charge of maintenance activities. He has made vital contributions to equipment upkeep, preventive maintenance planning, and ensuring seamless operation of all mechanical systems. His technical knowledge and hands-on approach continue to support the smooth functioning of the fuel farm." },
    { name: "VASANTHA KUMARA", photo: "./Images/Vasantha.jpg", description: "Vasantha Kumar S completed his Mechanical Engineering in 2017 and began his career the same year. He initially joined the organization at the Kochi AFS, where he independently handled responsibilities as a Shift In-Charge.Subsequently, he was transferred to the Mumbai Aviation Fuel Farm, where he demonstrated strong expertise in operating integrated fuel farm systems. Vasantha showcased exceptional skills in automation and efficiently managed hydrant operations while continuing as a Shift In-Charge.Later, he was transferred to the Mopa Aviation Fuel Farm, where he played an active role in the commissioning of the fuel farm. He made significant contributions to the control room automation processes and currently oversees quality control activities at the fuel farm." },
    { name: "RAKESH KUMAR", photo: "./Images/Rakesh.jpg", description: "Rakesh Kumar is a seasoned professional with over 7 years of experience in the oil and gas industry. He began his career as an Executive Trainee at Ashok Leyland and soon joined Bharat Petroleum Corporation Limited (BPCL), where he has progressively advanced through key roles. Starting as an Aviation Officer in Pune, he demonstrated strong technical and operational capabilities, which led to his promotion as Assistant Manager at the Mumbai Aviation Fuel Farm. Over the next four years, he played a crucial role in managing operations and ensuring fuel quality and safety. Currently, he serves as a Manager at the Goa Aviation Fuel Farm, leading on-site operations with a focus on performance and compliance.Rakesh holds a B.Tech in Mechanical Engineering from NIT Arunachal Pradesh and has further enhanced his leadership and managerial skills through an Executive Program in General Management at the Indian Institute of Management, Calcutta" },
    { name: "GANESH LAWAR", photo:"./Images/Ganesh Lawar.jpg", description: "🌟We proudly recognize Mr. Ganesh Lawar, Instrumentation Engineer and safety champion, for his outstanding contributions to the aviation fuel industry. With 12+ years of experience, including key roles in the commissioning of MAFFFL and MOPA AFF, Ganesh now leads HSSE and Control Room Operations at MOPA.Thanks to his dedication and leadership, Team MOPA clinched the Corporate HSSE Award 2023-24 and the NSC Award 2024.Thank you, Ganesh, for your unwavering commitment to safety and excellence!#ProudBPCLian #HSSEChampion #SafetyFirst #MOPAExcellence #LeadershipInAction" },
    { name: "ROHIT SHINDE", photo:"./Images/rohit.jpg", description: "Rohit Shinde is an experienced engineering professional currently working as an Executive Engineer at Bharat Petroleum Corporation Limited (BPCL), stationed at Chhatrapati Shivaji Maharaj International Airport, Mumbai since June 2024. With a strong background in management and leadership, he plays a vital role in on-site operations and technical execution in the aviation fuel domain.Previously, he worked as a Quality Control Officer at Reliance Industries Limited for over 4 years (Dec 2017 – Mar 2022), where he gained extensive experience in quality assurance and control processes in a high-standard industrial environment.Rohit holds a Bachelor of Technology (B.Tech) in Mechanical Engineering from the Institution of Engineers India (2016–2019), where he also served as the PTC Chairman. Additionally, he has completed a diploma in Aircraft Maintenance Engineering (2012–2015), specializing in aviation and airway management operations.His blend of technical knowledge, aviation expertise, and leadership skills make him a versatile and valuable asset in the petroleum and aerospace sectors" },
    ];

  return (
    <div className="plant-page">
      <div className="plant-section">
        <h1>BPCL OFFICERS</h1>
        <img
          src="./Images/BPCL OFFICERS.jpeg"
          alt="Plant"
          className="plant-image"
        />
        <p className="plant-description">
         BPCL Aviation Fuel Farm 

The BPCL Aviation Fuel Farm at the airport serves as a critical node in the aviation fuel supply chain, ensuring timely and efficient refueling operations for both domestic and international flights. Strategically located within the airport premises, the facility is designed for seamless integration with airside operations, minimizing turnaround time for aircraft.

BPCL maintains the fuel farm to the highest standards, with a strong emphasis on safety, operational efficiency, and environmental compliance. The facility is equipped with modern infrastructure for storage, quality control, and secure fuel handling, supporting uninterrupted service round the clock.

With strict adherence to aviation safety protocols and environmental regulations, the fuel farm plays a vital role in maintaining the reliability and sustainability of airport operations
        </p>
      </div>

      <div className="officers-section">
        <h2>BPCL Officers</h2>
        <div className="officers-list">
          {officers.map((officer, index) => (
            <div
              key={index}
              className={`officer-details ${
                index % 2 === 0 ? "officer-row" : "officer-row reverse-row"
              }`}
            >
              <img
                src={officer.photo}
                alt={officer.name}
                className="officer-photo-large"
              />
              <div className="officer-info">
                <h3 className="officer-name">{officer.name}</h3>
                <p className="officer-description">{officer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;