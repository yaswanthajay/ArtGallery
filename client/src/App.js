// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import SignIn from './components/login';
import SignUp from './components/Signup';
import VirtualTour from './components/Virtualtour';
import Gallery from './Artist/Gallery';
import SwiperSlider from './components/SwiperSlider';
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import UserAccount from './components/UserAccount';
import Admin from './Admin/admin';

import ManageUsers from './Admin/ManageUsers';
import Orders from './Admin/Oders';
import Reports from './Admin/Reports';
import BuyNow from './components/Buynow';
import Addtocart from './components/Addtocart';
import UploadArt from './Artist/uploadart';
import Artist from './Artist/Artist';
import EnterOTP from './components/EnterOTP';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication state

    const handleLogin = () => {
        setIsLoggedIn(true); // Update state when the user logs in
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Update state when the user logs out
    };

    return (
        <Router>
            {/* Pass the isLoggedIn state and handleLogout function to Navbar */}
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
               
                <Route path="/signin" element={<SignIn onLogin={handleLogin} />} /> {/* Call handleLogin on successful login */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/VirtualTour" element={<VirtualTour />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/SwiperSlider" element={<SwiperSlider />} />
                <Route path="/user-account" element={<UserAccount />} />
                <Route path="/admin" element={<Admin />} />
               
                <Route path="/manage" element={<ManageUsers />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/buynow" element={<BuyNow />} />
                <Route path="/addtocart" element={<Addtocart />} />
                <Route path="/uploadart" element={<UploadArt />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/EnterOTP" element={<EnterOTP />} />
            </Routes>
        </Router>
    );
}

export default App;
