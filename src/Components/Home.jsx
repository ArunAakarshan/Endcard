import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Sidebar from './Sidebar';
import { useState } from 'react';

function Home() {
  return (
    <div className="home-container">
      <Sidebar/>
      <h1 className="header">Task Bender</h1>
      <div className="card-container1">
        <div className="card1">
          <h2>Are you admin?</h2>
          <p>Click here if you are an admin</p>
          <Link to="/AdminSign">Admin Dashboard</Link>
        </div>
        <div className="card1">
          <h2>Are you Employee?</h2>
          <p>Click here if you are an employee</p>
          <Link to="/Form">Employee Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
