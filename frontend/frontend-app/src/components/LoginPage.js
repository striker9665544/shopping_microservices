// src/components/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // For testing without backend: comment out the try-catch and uncomment the line below
        // navigate('/selection'); 

        try {
            const response = await axios.post('http://localhost:8081/loginpage/login', {
                username,
                password
            });
            localStorage.setItem('jwtToken', response.data.token);
            
            // **MODIFICATION**: Redirect to the new selection page
            navigate('/selection'); 

        } catch (err) {
            setError('Invalid username or password');
            console.error("Login failed:", err);
        }
    };

    return (
        <div>
            <h2>Login To Continue</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LoginPage;