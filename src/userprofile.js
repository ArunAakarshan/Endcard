import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  // Assuming you have user information in your Redux store
  const { username, email } = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        {/* Add more user profile information here */}
      </div>
    </div>
  );
}
