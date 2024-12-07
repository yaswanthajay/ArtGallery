import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';

function EnterOTP() {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/verify-otp', { otp });
            console.log('OTP verification response:', response.data);

            if (response.data.success) {
                setMessage('OTP verified successfully! You can now reset your password.');
                // Redirect to the reset password page if needed
            } else {
                setMessage('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-box">
                <h2>Enter OTP</h2>
                <div className="input">
                    <label>OTP</label>
                    <input
                        type="text"
                        name="otp"
                        placeholder="Enter the OTP sent to your email"
                        required
                        value={otp}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Verify OTP</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

export default EnterOTP;
