import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/loginRegister.css';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(
      user =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (matchedUser) {
      localStorage.setItem('loggedInUser', matchedUser.email);
      toast.success('Login successful');
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 1500);
    } else {
      toast.error('Enter your details correctly');
    }
  };

  return (
    <div className="auth-wrapper centered">
      <Helmet>
        <title>Login / Grocery Store</title>
      </Helmet>
      <h2 className="text-center mt-3">Customer Log In</h2>
      <div className="form-area">
        <label>Email Address</label>
        <input
          name="email"
          placeholder="Enter your Email Id"
          onChange={handleChange}
        />
        <label>Password</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <i
            className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <button className="btn btn-success btn-narrow" onClick={handleLogin}>
          Sign In
        </button>
      </div>
      <div className="form-side-info">
        <h4>Create An Account</h4>
        <p>Sign Up for a new Account</p>
        <button
          className="btn btn-success btn-narrow"
          onClick={() => navigate('/Register')}
        >
          Register
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
