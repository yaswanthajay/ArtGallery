// src/Admin.js
import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faImages, faClipboardList, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
function Admin() {
  return (
    <div className="admin-dashboard">
      <div className="main-content">
        <header className="header">
          <h1>Welcome, Admin!</h1>
          <div className="profile">
            <span>Admin</span>
          </div>
        </header>
        <section className="content">
          <div className="cardq">
            <h3>Total Users</h3>
            <p>150</p>
          </div>
          <div className="cardq">
            <h3>Artworks</h3>
            <p>80</p>
          </div>
          <div className="cardq">
            <h3>Orders</h3>
            <p>45</p>
          </div>
          <div className="cardq">
            <h3>Revenue</h3>
            <p>$10,000</p>
          </div>
        </section>
        <section className="admin-options">
          <button className="option-button">
          <Link to="/manage"><FontAwesomeIcon icon={faUsers} />Users </Link></button>
          <button className="option-button">Artworks</button>
          <button className="option-button">Orders</button>
          <button className="option-button">Revenue</button>
        </section>
      </div>
    </div>
  );
}

export default Admin;
