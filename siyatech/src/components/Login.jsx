import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        setError('');
        setMessage('');

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const users = await response.json();

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                setMessage(`Welcome, ${user.email}`);
            } else {
                setError('Invalid email or password.');
            }
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        }
    };

    const cardStyle = {
        width: '400px',
        margin: '100px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '5px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '15px',
        fontWeight: 'bold'
    };

    const errorStyle = {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
        fontWeight: 'bold'
    };

    const messageStyle = {
        color: 'green',
        textAlign: 'center',
        marginTop: '10px',
        fontWeight: 'bold'
    };

    const signupLinkStyle = {
        textAlign: 'center',
        marginTop: '15px',
        color: '#007bff',
        cursor: 'pointer'
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>

            <div>
                <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={inputStyle} 
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={inputStyle} 
                    placeholder="Enter your password"
                />
            </div>

            {error && <div style={errorStyle}>{error}</div>}
            {message && <div style={messageStyle}>{message}</div>}

            <button onClick={handleLogin} style={buttonStyle}>Login</button>

            {/* Signup Link */}
            <div style={signupLinkStyle}>
                Don't have an account? <Link to="/signup"> Sign Up</Link> 
            </div>
        </div>
    );
}
