import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/loginRegister.css';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      alert('Login successful');
      navigate('/');
      window.location.reload();
    } else {
      alert('Enter your details correctly');
    }
  };

  return (
    <div className="auth-wrapper centered">
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
    </div>
  );
}