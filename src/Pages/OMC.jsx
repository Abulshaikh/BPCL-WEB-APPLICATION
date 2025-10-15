import React from 'react';
import './OMC.scss'; // Using SCSS for enhanced styling

const OMC = () => {
  return (
    <div className="omc-fullscreen">
     <div className="omc-card">
      <div className="card-header">
        <h2>Airline Fuel Suppliers Distribution</h2>
        <div className="legend">
          <span className="legend-item domestic">DOMESTIC</span>
          <span className="legend-item international">INTERNATIONAL</span>
        </div>
      </div>

      <div className="table-container">
        <table className="supplier-table">
          <thead>
            <tr>
              <th>CUSTOMER</th>
              <th>SUPPLIER</th>
              <th>SHARE</th> 
              <th>DATE</th> 
            </tr>
          </thead>
          <tbody>
            <CategoryHeader title="DOMESTIC" type="domestic" />
            <TableRow customer="SPICE JET" supplier="BPCL" share="100%" date="25-08-25"/>

            <TableGroup 
              customer="INDIGO" 
              suppliers={[
                { name: "SHELL", share: "75%",  date: "31-03-26" },
                { name: "HPCL", share: "25%",  date : "15-01-25" },
              ]}
            />

            <TableRow customer="AKASA AIR" supplier="SHELL" share="100%" date="31-03-26" />
            

            <TableGroup 
              customer="STAR AIR" 
              suppliers={[
                { name: "BPCL", share: "50%", date : "25-08-25" },
                { name: "HPCL", share: "50%",date : "25-08-25"  }
              ]}
            />

            <TableRow customer="FLY 91" supplier="SHELL" share="100%"  date="31-03-26"/>
            <TableRow customer="AIR INDIA" supplier="SHELL" share="100%" date="31-03-26" />

            <CategoryHeader title="INTERNATIONAL" type="international" />
            <TableRow customer="AIR INDIA " supplier="SHELL" share="80%" date="31-03-26" />

            
            <TableRow customer="AIR INDIA " supplier="HPCL" share="20%" date="31-03-26"/>
            <TableRow customer="QATAR" supplier="BPCL" share="100%" date="Regular" />
            <TableRow customer="AIR ARABIA" supplier="IOCL" share="100%" date="31-03-26"/>
            <TableRow customer="OMAN AIR" supplier="IOCL" share="100%" date="25-08-25"/>
            <TableRow customer="AEROFLOT" supplier="IOCL" share="100%" date="30-06-25" />
          </tbody>
        </table>
      </div>
     </div>
    </div>
  );
};

// Reusable components for better organization
const TableRow = ({ customer, supplier, share , date }) => (
  <tr>
    <td>{customer}</td>
    <td>{supplier}</td>
    <td>
      <span className={`share-badge ${!customer ? 'no-customer' : ''}`}>
        {share}
      </span>
    </td>
    <td>{date}</td>
  </tr>
);

const TableGroup = ({ customer, suppliers }) => (
  <>
    {suppliers.map((supplier, index) => (
      <tr key={index}>
        {index === 0 && <td rowSpan={suppliers.length}>{customer}</td>}
        <td>{supplier.name}</td>
        <td>
          <span className="share-badge">{supplier.share}</span>
        </td>
        <td>
          <span className="date-badge">{supplier.date}</span>
        </td>
      </tr>
    ))}
  </>
);

const CategoryHeader = ({ title, type }) => (
  <tr className={`category-header ${type}`}>
    <td colSpan="4">
      {title}
    </td>
  </tr>
);

export default OMC;