// src/components/SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = "user123"; // Hardcoded for now

    useEffect(() => {
        if (query) {
            setLoading(true);
            axios.get(`${API_BASE_URLS.SEARCH}/search?q=${query}`)
                .then(response => {
                    setResults(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching search results:", error);
                    setLoading(false);
                });
        }
    }, [query]);

    // CORRECTED: Add the handleAddToCart function
    const handleAddToCart = (product) => {
        const itemRequest = {
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: 1
        };
        axios.post(`${API_BASE_URLS.CART}/cart/${userId}/items`, itemRequest)
            .then(() => alert(`${product.name} has been added to your cart!`))
            .catch(error => alert("Failed to add item to cart."));
    };

    if (loading) return <p>Searching for "{query}"...</p>;

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <div className="product-list">
                {results.length > 0 ? (
                    results.map(product => (
                        <div key={`${product.category}-${product.id}`} className="product-item" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                            <h3>{product.name}</h3>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            {/* CORRECTED: Hook up the onClick event */}
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;