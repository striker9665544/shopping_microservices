// src/components/CartPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig';

const CartPage = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    // In a real app, you'd get this from auth context/local storage after login
    const userId = "user123"; 

    // Function to fetch the latest cart data
    const fetchCart = () => {
        setLoading(true);
        axios.get(`${API_BASE_URLS.CART}/cart/${userId}`)
            .then(response => {
                setCart(response.data);
                setLoading(false);
            })
            .catch(error => {
                // If the cart doesn't exist yet for the user, the backend creates it.
                // An error might mean the service is down.
                console.error("Error fetching cart:", error);
                setCart(null); // Set cart to null on error
                setLoading(false);
            });
    };

    // Fetch the cart when the component mounts
    useEffect(() => {
        fetchCart();
    }, []);

    // Function to handle updating an item's quantity
    const handleUpdateQuantity = (itemId, newQuantity) => {
        axios.put(`${API_BASE_URLS.CART}/cart/${userId}/items/${itemId}`, { quantity: newQuantity })
            .then(() => fetchCart()) // Refresh cart after update
            .catch(error => console.error("Error updating quantity:", error));
    };

    // Function to handle removing an item completely
    const handleRemoveItem = (itemId) => {
        axios.delete(`${API_BASE_URLS.CART}/cart/${userId}/items/${itemId}`)
            .then(() => fetchCart()) // Refresh cart after removal
            .catch(error => console.error("Error removing item:", error));
    };

    if (loading) return <p>Loading your cart...</p>;
    if (!cart || !cart.items || cart.items.length === 0) return <h2>Your shopping cart is empty.</h2>;

    const calculateTotal = () => {
        return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Shopping Cart</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid black' }}>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Product</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Quantity</th>
                        <th style={{ textAlign: 'right', padding: '8px' }}>Price</th>
                        <th style={{ textAlign: 'right', padding: '8px' }}>Subtotal</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.items.map(item => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                            <td style={{ padding: '8px' }}>{item.productName}</td>
                            <td style={{ textAlign: 'center', padding: '8px' }}>
                                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                            </td>
                            <td style={{ textAlign: 'right', padding: '8px' }}>${item.price.toFixed(2)}</td>
                            <td style={{ textAlign: 'right', padding: '8px' }}>${(item.price * item.quantity).toFixed(2)}</td>
                            <td style={{ textAlign: 'center', padding: '8px' }}>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default CartPage;