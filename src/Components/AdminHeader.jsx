import React from 'react';
import { useSelector } from 'react-redux';
import './Adminheader.css';
export default function AdminHeader() {
  const { isAuthenticated, username } = useSelector((state) => state.user);

  return (
    <div>
      <div className="navbar1">
        <a className="TaskBender1" href="/about">
          TaskBender
        </a>
        {isAuthenticated && (
          <a className="profile" href="/profile">
            Profile: {username}
          </a>
        )}
        <a className="logout me-auto" href="/">
          Logout
        </a>
      </div>
    </div>
  );
}
