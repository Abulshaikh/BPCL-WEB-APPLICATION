import React from "react";
import "./Approvals.css";

function Approvals() {
  return (
    <div className="approvals-container">
      <div className="approvals-wrapper">
        <div className="approvals-header">
          <span role="img" aria-label="documents" className="approvals-icon">📢</span>
          <h1 className="approvals-title">🚨 Important Documents - Mopa Fuel Farm, Goa 🚨</h1>
        </div>
        <div className="approval-card flashy-border">
          <ol className="approval-list">
            <li><a href="files/DGCA_LICENCE.pdf" target="_blank" className="approval-link">DGCA Licence</a></li>
            <li><a href="files/petroleum_explosive_station.pdf" target="_blank" className="approval-link">Petroleum & Explosive Safety Organization Licence - Station</a></li>
            <li><a href="files/pollution_control_board.pdf" target="_blank" className="approval-link">Pollution Control Board Licence</a></li>
            <li><a href="files/factory_licence.pdf" target="_blank" className="approval-link">Factory Licence</a></li>
            <li><a href="files/fire_licence.pdf" target="_blank" className="approval-link">Fire Licence</a></li>
            <li><a href="files/legal_metrology_master_meter.pdf" target="_blank" className="approval-link">Legal Metrology Certificate - Master Meter</a></li>
            <li><a href="files/legal_metrology_proving_vessel.pdf" target="_blank" className="approval-link">Legal Metrology Certificate - Proving Vessel</a></li>
            <li><a href="files/legal_metrology_20L_5L.pdf" target="_blank" className="approval-link">Legal Metrology Certificate - 20L & 5L Can</a></li>
            <li><a href="files/mopa_airport_noc.pdf" target="_blank" className="approval-link">Mopa Airport Development Authority - NOC</a></li>
            <li><a href="files/airport_authority_noc.pdf" target="_blank" className="approval-link">Airport Authority of India - NOC</a></li>
            <li><a href="files/central_electrical_licence.pdf" target="_blank" className="approval-link">Central Electrical Authority Licence</a></li>
            <li><a href="files/labour_licence.pdf" target="_blank" className="approval-link">Labour Licence</a></li>
            <li><a href="files/emergency_disaster_certificate.pdf" target="_blank" className="approval-link">Emergency Res. & Disaster Management Plan - Certificate</a></li>
            <li><a href="files/fuel_farm_security.pdf" target="_blank" className="approval-link">Fuel Farm Security Program</a></li>
            <li><a href="files/peso_round_clock_permission.pdf" target="_blank" className="approval-link">PESO Round the Clock Operation Permission</a></li>
            <li><a href="files/occupancy_certificate_mopa.pdf" target="_blank" className="approval-link">Occupancy Certificate - Mopa Airport Development Authority</a></li>
            <li>
              <a href="files/central_excise_warehouse.pdf" target="_blank" className="approval-link">Central Excise Reg for Warehouse</a>
              </li><li>
              <a href="files/central_excise_dealer.pdf" target="_blank" className="approval-link">Central Excise Reg for Dealer</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Approvals;
