// src/components/ShoesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig';

const ShoesPage = () => {
    // This component uses 'shoes' as its state variable
    const [shoes, setShoes] = useState([]); 
    const [loading, setLoading] = useState(true);
    const userId = "user123";

    useEffect(() => {
        axios.get(`${API_BASE_URLS.SEARCH}/search?q=`)
            .then(response => {
                const shoeProducts = response.data.filter(p => p.category === 'Shoes');
                setShoes(shoeProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching shoes:", error);
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
            .then(() => alert(`${product.name} has been added to your cart!`))
            .catch(error => alert("Failed to add item to cart."));
    };
    
    // Helper function for images
    const getShoeImage = (name) => {
        if (name.toLowerCase().includes('nike')) return '/images/Nike.png';
        if (name.toLowerCase().includes('adidas')) return '/images/Adidas.png';
        if (name.toLowerCase().includes('sparx')) return '/images/Sparx.png';
        return '/images/HomepageShoes.png'; // Default image
    };

    if (loading) return <p>Loading shoes...</p>;

    // === THIS IS THE CORRECTED RETURN BLOCK ===
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Shoes</h2>
            <div className="product-grid">
                {/* Use the 'shoes' variable, not 'results' */}
                {shoes.map(shoe => ( 
                    <div key={shoe.id} className="product-card">
                        {/* Pass 'shoe.name' to the image helper */}
                        <img src={getShoeImage(shoe.name)} alt={shoe.name} />
                        <h3>{shoe.name}</h3>
                        <p className="price">${shoe.price}</p>
                        {/* Pass the 'shoe' object to the handler */}
                        <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoesPage;