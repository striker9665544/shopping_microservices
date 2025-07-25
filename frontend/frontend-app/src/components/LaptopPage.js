//src/components/LaptopPage.js
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

    const getLaptopImage = (name) => {
        if (name.toLowerCase().includes('macbook')) return '/images/MacBook.png';
        if (name.toLowerCase().includes('dell')) return '/images/Dell.png';
        if (name.toLowerCase().includes('hp')) return '/images/HP.png';
        return '/images/HomepageLaptop.png'; // A default laptop image
    };

    if (loading) return <p>Loading laptops...</p>;

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Laptops</h2>
            {/* 1. Use the .product-grid class for the grid layout */}
            <div className="product-grid">
                {laptops.map(laptop => (
                    // 2. Use the .product-card class for the card styling
                    <div key={laptop.id} className="product-card">
                        {/* 3. Add the product image */}
                        <img src={getLaptopImage(laptop.name)} alt={laptop.name} />
                        <h3>{laptop.name}</h3>
                        {/* 4. Add the .price class for styling */}
                        <p className="price">${laptop.price}</p>
                        <button onClick={() => handleAddToCart(laptop)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LaptopPage;