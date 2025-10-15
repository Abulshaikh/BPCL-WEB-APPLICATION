import React, { useState } from "react";
import "./Static.css";

function Static() {
  const [activeTab, setActiveTab] = useState("receipt");

  const imageMap = {
    receipt: "/Images/Receipt.png",
    storage: "/Images/storage.png",
    delivery: "/Images/delivery.png",
  };

  return (
    <div className="static-wrapper">
      <div className="modern-header">
        <button
          className={activeTab === "receipt" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("receipt")}
        >
          Receipt
        </button>
        <button
          className={activeTab === "storage" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("storage")}
        >
          Storage Tanks
        </button>
        <button
          className={activeTab === "delivery" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("delivery")}
        >
          Delivery
        </button>
      </div>

      <div className="image-viewer">
        <img src={imageMap[activeTab]} alt={activeTab} />
      </div>
    </div>
  );
}

export default Static;
