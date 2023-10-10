import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logof.jpg';
import { useNavigate } from 'react-router-dom';
import './Form.css';
// import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Form() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [FormData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  const navigatetoTask = useNavigate();
  // const handleSignIn = () => {

  //   if (username.trim() !== '' && password.trim() !== ''){
  //   // window.location.href="/Tasklist";
  //   navigatetoTask('/Tasklist')
    
  //   }
  //   else{
  //     setTimeout(() => {
  //       toast.error('🦄 Incorrect/Missing Credentials!', {
  //         position: 'top-right',
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: 'light',
  //       });
  //     }, 0); 
  //   }
  //   setTimeout(() => {
  //     toast('🐱‍👤Login Success!', {
  //       position: 'top-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //     });
  //   }, 0);
  // };
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (FormData.username.trim() === '' || FormData.password.trim() === '') {
      alert('Username and password are required');
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
  
      const response = await fetch('http://localhost:8202/Login', requestbody);
      const responseData = await response.text();
  
      if (responseData === 'Ok') {
        alert('User not found');
      }
       else {
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setTimeout(() => {
          toast('🐱‍👤Login Success!', {
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
        navigatetoTask('/Tasklist');
      }
    }
  };
  
  return (
    <div className='register'>
      <nav className='navbar'>
        <Link to="/" className='navbar-link'>
          Home
        </Link>
      </nav>
        <h1 className='heading'>Task Bender</h1>
        <p className='head2'>Helps you keep organized</p>
        <h2 id='h2'>Sign In</h2>
        <p id='sp'>
          Don't have an account? <Link to="/Register">Sign Up</Link>
        </p>
        <form id='form' className='flex flex-col'>
          <input
            type="text"
            placeholder='Username'
            name='username'
            value={FormData.username}
            onChange={handleChange}
           />
             <input
            type="email"
            placeholder="Email"
            name='email'
            value={FormData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder='Password'
            name='password'
            value={FormData.password}
            onChange={handleChange}
          />
          <button className='btn' onClick={handleSignIn}>
            Sign In
          </button>
          {/* {error && <p className='error'>{error}</p>} */}
        </form>
        <img id='ai' src={logo1} alt="signin" />
    </div>
);
}

export default Form;
