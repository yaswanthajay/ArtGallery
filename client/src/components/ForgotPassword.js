import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';
import { Link } from 'react-router-dom';
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/forgot-password', { email });
            console.log('Forgot Password response:', response.data);

            if (response.data.success) {
                setMessage('Password reset link has been sent to your email.');
            } else {
                setMessage('Email not found. Please try again.');
            }
        } catch (error) {
            console.error('Error during password reset:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-box">
                <h2>Forgot Password</h2>
                <div className="input input">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your registered email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">
                    <Link to="/EnterOTP" className="forget-password-link">
                    Send Reset Link    </Link> </button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

export default ForgotPassword;
