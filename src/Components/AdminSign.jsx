import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo1 from '../assets/Admin.jpg';
import { useNavigate } from 'react-router-dom';
import './AdminSign.css';
import { useDispatch } from 'react-redux';
import AdminDashboard from './Admindashboard';
import { login } from '../Action/userAction';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function AdminSign() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const navigatetoTask = useNavigate();
  const handleSignIn = () => {if (username === 'User' && password === 'password'){
    const userInfo = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      // Add other user information as needed
    };
    dispatch(login(username,password));
    // window.location.href="/Tasklist";
    navigatetoTask('/AdminDashboard')
    
    }
    else{
      setTimeout(() => {
        toast.error('🦄 Incorrect/Missing Credentials!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }, 0); 
    }
    setTimeout(() => {
      toast('✔Login Success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }, 0);
  };


  return (
      <div className='register1'>
          <nav className='navbar'>
        <Link to="/" className='navbar-link'>
          Home
        </Link>
      </nav>
          <h1 className='heading'>Task Bender</h1>
          <p className='head2'>Helps you keep organized</p>
          <h2 id='h2'>Sign In</h2>
          {/* <span>
            Don't have an account? <Link to="/Register">Sign Up</Link>
          </span> */}
          <form id='form' className='flex flex-col'>
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn' onClick={handleSignIn}>
              Sign In
            </button>
            {/* {error && <p className='error'>{error}</p>} */}
          </form>
          <img src={logo1} alt="signin" />
      </div>
  );
}

export default AdminSign;
