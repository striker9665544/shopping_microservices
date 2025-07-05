// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import new components
import LoginPage from './components/LoginPage';
import SelectionPage from './components/SelectionPage';
import ProtectedLayout from './components/ProtectedLayout';
import MobilePage from './components/MobilePage';
import LaptopPage from './components/LaptopPage';
import ShoesPage from './components/ShoesPage';
import SearchBar from './components/SearchBar';
import SearchResultsPage from './components/SearchResultsPage';
import CartPage from './components/CartPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            {/* Route 1: The Login Page. This stands alone. */}
            <Route path="/" element={<LoginPage />} />
          
            {/* Route 2: The Protected Area. This uses our new layout component. */}
            {/* All routes nested inside here will be rendered inside ProtectedLayout's <Outlet> */}
            <Route element={<ProtectedLayout />}>
              <Route path="/selection" element={<SelectionPage />} />
              <Route path="/mobiles" element={<MobilePage />} />
              <Route path="/laptops" element={<LaptopPage />} />
              <Route path="/shoes" element={<ShoesPage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          
            {/* A fallback route can redirect to the login page */}
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;