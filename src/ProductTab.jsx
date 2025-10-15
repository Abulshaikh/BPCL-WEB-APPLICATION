import React from "react";
import Product from "./Product";
import "./ProductTab.css";

function ProductTab() {
  const products = [
    {
      title: "Home",
      image: "./Images/Home.jpg",
      description: "Welcome to the home of aviation excellence.",
      link: "/home",
    },
    {
      title: "Journey",
      image: "./Images/Journey.jpg",
      description: "Explore the journey of innovation in the skies.",
      link: "/journey",
    },
    {
      title: "Approvals",
      image: "./Images/Approvals.jpg",
      description: "Streamlined approval processes for better efficiency.",
      link: "/Approvals",
    },
    {
      title: "OMC And Shares",
      image: "./Images/OMC.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/omc",
    },
    {
      title: "Airlines",
      image: "./Images/Airlines.jpeg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Airlines",
    },
    {
      title: "Static",
      image: "./Images/Static.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Static",
    },
    {
      title: "Hydrant",
      image: "./Images/Hydrant.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Hydrant",
    },
    {
      title: "Automation",
      image: "./Images/Automation.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Automation",
    },
    {
      title: "Mobile",
      image: "./Images/Mobile.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Mobile",
    },
    {
      title: "Safety",
      image: "./Images/Safety.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Safety",
    },
    {
      title: "Sales",
      image: "./Images/Sales.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Sales",
    },
    {
      title: "Documents",
      image: "./Images/Documents.jpg",
      description: "Operations Management Center ensuring smooth operations.",
      link: "/Documents",
    },
  ];

  return (
    <div className="ProductTab">
      <header className="site-header">
        <div className="logo-container">
          <img src="./Images/BPCLLOGO.png" alt="BPCL Logo" className="bpcl-logo" />
          <h1>BPCL Aviation Fuel Farm Goa <br/><h2 className="isosize">ISO 9001:2015,ISO 14001:2015,ISO 45001:2018 CERTIFIED</h2></h1>
        </div>
      </header>
      

      <div className="product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            image={product.image}
            description={product.description}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductTab;