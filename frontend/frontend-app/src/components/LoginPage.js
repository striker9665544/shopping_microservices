// src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API_BASE_URLS from '../apiConfig';
import './LoginPage.css';

// --- THE DEFINITIVE FIX: Import images as modules from the 'src' folder ---
import loginBanner from '../assets/LoginPageBanner.PNG';
import shoppingLogo from '../assets/shoppinglogo.PNG';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URLS.LOGIN}/loginpage/login`, {
                username,
                password
            });
            localStorage.setItem('jwtToken', response.data.token);
            navigate('/selection');
        } catch (err) {
            setError('Invalid username or password. Please try again.');
        }
    };

    // Use the imported image variable directly in the style object.
    // Webpack will replace `loginBanner` with the correct path during the build.
    const backgroundStyle = {
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url(${loginBanner})`
    };

    return (
        <div className="login-page-wrapper" style={backgroundStyle}>
            <div className="login-form-container">
                <img src={shoppingLogo} alt="Shopping Cloud Logo" className="login-logo" />
                <h2>Sign In</h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            id="username" 
                            className="login-input" 
                            placeholder="Email or username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            id="password" 
                            className="login-input" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="login-button netflix-style">Sign In</button>
                    
                    <div className="login-options">
                        <span>
                            <input type="checkbox" id="rememberMe" defaultChecked />
                            <label htmlFor="rememberMe" style={{ marginLeft: '5px' }}>Remember me</label>
                        </span>
                        <Link to="/help">Forgot password?</Link>
                    </div>
                </form>

                <div className="sign-up-link">
                    New to Shopping Cloud? <Link to="/register">Sign up now.</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;