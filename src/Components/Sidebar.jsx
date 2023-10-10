import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className={`bar ${expanded ? 'bar1' : ''}`}></div>
        <div className={`bar ${expanded ? 'bar2' : ''}`}></div>
        <div className={`bar ${expanded ? 'bar3' : ''}`}></div>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Register">Sign Up</a></li>
        <li>
          Login
          <ul className="sub-menu">
            <li><a href="/AdminSign">Admin</a></li>
            <li><a href="/Form">Employee</a></li>
          </ul>
        </li>
        <li><a href="/About">About</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
