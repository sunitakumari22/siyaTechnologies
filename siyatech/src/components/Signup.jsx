import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        setError('');
        setMessage('');

        if (!name || !email || !mobile || !password) {
            setError('All fields are required.');
            return;
        }

        const newUser = { name, email, mobile, password };

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            setMessage('User registered successfully!');
            setName('');
            setEmail('');
            setMobile('');
            setPassword('');
        } catch (err) {
            setError(err.message || 'Signup failed. Please try again.');
        }
    };

    const cardStyle = {
        width: '90%',
        maxWidth: '400px',
        margin: '100px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
        fontSize: '14px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: 'green',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '15px',
        fontSize: '14px',
        transition: 'background-color 0.3s ease'
    };

    const buttonHover = {
        backgroundColor: '#0056b3'
    };

    const [hover, setHover] = useState(false);

    return (
        <div style={cardStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '22px', color: '#333' }}>Create an Account</h2>
            <label style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px', display: 'block' }}>Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                placeholder="Enter your name"
            />
            <label style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px', display: 'block' }}>Email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="Enter your email"
            />
            <label style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px', display: 'block' }}>Mobile</label>
            <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={inputStyle}
                placeholder="Enter your mobile number"
            />
            <label style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px', display: 'block' }}>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="Enter your password"
            />
            {error && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center', fontSize: '14px' }}>{error}</div>}
            {message && <div style={{ color: 'green', marginTop: '10px', textAlign: 'center', fontSize: '14px' }}>{message}</div>}
            <button
                onClick={handleSignup}
                style={{ ...buttonStyle, ...(hover ? buttonHover : {}) }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                Sign Up
            </button>
            <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
                Already have an account? <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link>
            </div>
        </div>
    );
}
