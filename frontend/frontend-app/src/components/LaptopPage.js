// src/components/LaptopPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig'; // <-- Import the API config

const LaptopPage = () => {
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = "user123"; // Hardcoded for now

    useEffect(() => {
        // CORRECTED: Call the central search service
        axios.get(`${API_BASE_URLS.SEARCH}/search?q=`) 
            .then(response => {
                // CORRECTED: Filter the results for the "Laptops" category
                const laptopProducts = response.data.filter(p => p.category === 'Laptops');
                setLaptops(laptopProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching laptops:", error);
                setLoading(false);
            });
    }, []);

    // CORRECTED: Add the handleAddToCart function
    const handleAddToCart = (product) => {
        const itemRequest = {
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: 1
        };
        axios.post(`${API_BASE_URLS.CART}/cart/${userId}/items`, itemRequest)
            .then(() => {
                alert(`${product.name} has been added to your cart!`);
            })
            .catch(error => {
                console.error("Error adding to cart:", error);
                alert("Failed to add item to cart.");
            });
    };

    if (loading) return <p>Loading laptops...</p>;

    return (
        <div>
            <h2>Laptops</h2>
            <div className="product-list">
                {laptops.map(laptop => (
                    <div key={laptop.id} className="product-item" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h3>{laptop.name}</h3>
                        <p>Price: ${laptop.price}</p>
                        {/* CORRECTED: Hook up the onClick event */}
                        <button onClick={() => handleAddToCart(laptop)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LaptopPage;