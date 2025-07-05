// src/components/MobilePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig';

const MobilePage = () => {
    const [mobiles, setMobiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = "user123"; // Hardcoded for now

    useEffect(() => {
        // This now calls the search service to get all mobiles
        axios.get(`${API_BASE_URLS.SEARCH}/search?q=`) // Empty query gets all
            .then(response => {
                // Filter results to only show mobiles
                const mobileProducts = response.data.filter(p => p.category === 'Mobiles');
                setMobiles(mobileProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching mobiles:", error);
                setLoading(false);
            });
    }, []);

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

    if (loading) return <p>Loading mobiles...</p>;

    return (
        <div>
            <h2>Mobiles</h2>
            <div className="product-list">
                {mobiles.map(mobile => (
                    <div key={mobile.id} className="product-item" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h3>{mobile.name}</h3>
                        <p>Price: ${mobile.price}</p>
                        <button onClick={() => handleAddToCart(mobile)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobilePage;