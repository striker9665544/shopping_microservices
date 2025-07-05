// src/components/SelectionPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SelectionPage.css'; // We will create this CSS file next

const SelectionPage = () => {
  return (
    <div>
      <h2>Please Choose a Category</h2>
      <div className="selection-container">
        {/* Left Section */}
        <div className="selection-item">
          <h3>Mobiles</h3>
          <p>Latest and greatest smartphones.</p>
          <Link to="/mobiles">
            <button>Shop Mobiles</button>
          </Link>
        </div>

        {/* Middle Section */}
        <div className="selection-item">
          <h3>Laptops</h3>
          <p>Powerful laptops for work and play.</p>
          <Link to="/laptops">
            <button>Shop Laptops</button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="selection-item">
          <h3>Shoes</h3>
          <p>Stylish and comfortable footwear.</p>
          <Link to="/shoes">
            <button>Shop Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;