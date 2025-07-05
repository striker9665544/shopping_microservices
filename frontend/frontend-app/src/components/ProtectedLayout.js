// src/components/ProtectedLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // We will use the SearchBar here
import '../App.css'; // We can reuse the same header styles

const ProtectedLayout = () => {
  return (
    <div>
      {/* This is the header that will appear on all protected pages */}
      <header className="App-header">
        <h1>
          <Link to="/selection" style={{ color: 'white', textDecoration: 'none' }}>
            E-Commerce Store
          </Link>
        </h1>
        <SearchBar />
        <nav>
          <Link to="/cart" style={{ color: 'white', marginLeft: '20px' }}>Cart</Link>
        </nav>
      </header>

      {/* The <Outlet> component will render the specific child route (e.g., /selection, /mobiles) */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;