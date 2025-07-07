// src/components/SelectionPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SelectionPage.css';

const SelectionPage = () => {
  return (
    <div className="selection-page">
      <div className="main-banner">
        <img src="/images/HomepageLaptop.png" alt="Main Banner" />
        <div className="banner-text">
          <h1>SPECIAL OFFERS</h1>
          <p>Top quality products at unbeatable prices.</p>
        </div>
      </div>
      <h2>CATEGORIES</h2>
      <div className="selection-container">
        <Link to="/mobiles" className="selection-item">
          <img src="/images/HomepageMobile.png" alt="Mobiles" />
          <h3>Mobiles</h3>
        </Link>
        <Link to="/laptops" className="selection-item">
          <img src="/images/Dell.png" alt="Laptops" />
          <h3>Laptops</h3>
        </Link>
        <Link to="/shoes" className="selection-item">
          <img src="/images/HomepageShoes.png" alt="Shoes" />
          <h3>Shoes</h3>
        </Link>
      </div>
    </div>
  );
};

export default SelectionPage;