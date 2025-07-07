// src/components/ProtectedLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../App.css'; 

const ProtectedLayout = () => {
  return (
    <div>
      <header className="App-header">
        <h1>
          <Link to="/selection" style={{ textDecoration: 'none' }}>
            <span>MULTI</span> SHOP
          </Link>
        </h1>
        <SearchBar />
        <nav>
          <Link to="/cart">
            <img src="/images/Cartlogo.png" alt="Cart" />
            Cart
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;