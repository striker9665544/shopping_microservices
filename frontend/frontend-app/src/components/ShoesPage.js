// src/components/ShoesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig'; // <-- Import the API config

const ShoesPage = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = "user123"; // Hardcoded for now

    useEffect(() => {
        // CORRECTED: Call the central search service
        axios.get(`${API_BASE_URLS.SEARCH}/search?q=`)
            .then(response => {
                // CORRECTED: Filter the results for the "Shoes" category
                const shoeProducts = response.data.filter(p => p.category === 'Shoes');
                setShoes(shoeProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching shoes:", error);
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

    if (loading) return <p>Loading shoes...</p>;

    return (
        <div>
            <h2>Shoes</h2>
            <div className="product-list">
                {shoes.map(shoe => (
                    <div key={shoe.id} className="product-item" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h3>{shoe.name}</h3>
                        <p>Price: ${shoe.price}</p>
                        {/* CORRECTED: Hook up the onClick event */}
                        <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoesPage;