// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                style={{ padding: '8px', width: '300px' }}
            />
            <button type="submit" style={{ padding: '8px' }}>Search</button>
        </form>
    );
};

export default SearchBar;