// src/components/CartPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URLS from '../apiConfig';
import './CartPage.css'; // <-- Import the new CSS file

const CartPage = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = "user123";

    const fetchCart = () => {
        setLoading(true);
        axios.get(`${API_BASE_URLS.CART}/cart/${userId}`)
            .then(response => {
                setCart(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching cart:", error);
                setCart(null);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const handleUpdateQuantity = (itemId, newQuantity) => {
        axios.put(`${API_BASE_URLS.CART}/cart/${userId}/items/${itemId}`, { quantity: newQuantity })
            .then(() => fetchCart())
            .catch(error => console.error("Error updating quantity:", error));
    };

    const handleRemoveItem = (itemId) => {
        axios.delete(`${API_BASE_URLS.CART}/cart/${userId}/items/${itemId}`)
            .then(() => fetchCart())
            .catch(error => console.error("Error removing item:", error));
    };

    if (loading) return <p className="empty-cart-message">Loading your cart...</p>;
    if (!cart || !cart.items || cart.items.length === 0) return <h2 className="empty-cart-message">Your shopping cart is empty.</h2>;

    const calculateTotal = () => {
        return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th style={{ textAlign: 'center' }}>Quantity</th>
                        <th style={{ textAlign: 'right' }}>Price</th>
                        <th style={{ textAlign: 'right' }}>Subtotal</th>
                        <th style={{ textAlign: 'center' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.items.map(item => (
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>
                                <div className="quantity-controls">
                                    <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </td>
                            <td style={{ textAlign: 'right' }}>${item.price.toFixed(2)}</td>
                            <td style={{ textAlign: 'right' }}>${(item.price * item.quantity).toFixed(2)}</td>
                            <td className="actions-cell" style={{ textAlign: 'center' }}>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-total">
                Total: ${calculateTotal()}
            </div>
        </div>
    );
};

export default CartPage;