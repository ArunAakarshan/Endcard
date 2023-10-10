import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logof.jpg';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Register() {
  const [FormData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (FormData.password !== FormData.confirmPassword) {
      alert('Passwords do not match');
    } else {
      const user = {
        username: FormData.username,
        email: FormData.email,
        password: FormData.password,
      };
      const requestbody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };

      const response = await fetch('http://localhost:8202/signup', requestbody);
      const responseData = await response.text();

      if (responseData === 'Already available') {
        alert('User exists');
      } else {
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setTimeout(() => {
          toast('🐱‍👤Register Success!', {
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
        navigate('/Form');
      }
    }
  };

  return (
    <section>
      <div className='register2'>
      <nav className='navbar'>
        <Link to="/" className='navbar-link'>
          Home
        </Link>
      </nav>
        <h1 className='heading'>Task Bender</h1>
        <p className='head2'>Helps you keep organized</p>
        <h2 id='h22'>Register</h2>
        <p id='p1'>
          Already have an account? <Link to='/Form'>Sign In</Link>
        </p>
        <form id='form' className='flex flex-col'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={FormData.username}
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={FormData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={FormData.password}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={FormData.confirmPassword}
            onChange={handleChange}
          />
          <button className='btn' onClick={handleRegistration}>
            Register
          </button>
        </form>
        <img src={logo1} alt='registration' id='ig' />
      </div>
    </section>
  );
}

export default Register;
