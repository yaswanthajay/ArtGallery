// src/components/Home.js
import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className="home-page1">
 
      <h1 className="gallery1-title">Welcome to Our Art Gallery</h1>
      <p className="gallery1-description">Explore a curated collection of stunning artwork from talented artists.</p>
      <Link to="/SwiperSlider" className="animated-button">Get Started</Link>
      
    </div>
    
  );
}

export default Home;
