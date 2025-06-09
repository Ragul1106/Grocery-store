import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/css/loginRegister.css';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!user.name.trim()) newErrors.name = 'Full name is required';

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!user.password) newErrors.password = 'Password is required';
    if (!user.confirmPassword)
      newErrors.confirmPassword = 'Confirm Password is required';
    if (
      user.password &&
      user.confirmPassword &&
      user.password !== user.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleRegister = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const { name, email, password } = user;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(u => u.email === email);

      if (userExists) {
        setErrors({ email: 'Account already exists. Please log in.' });
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      navigate('/Login');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="auth-wrapper centered">
      <Helmet>
        <title>Register Page / Grocery Store</title>
      </Helmet>
      <h2 className="text-center mt-3">Customer Registration</h2>
      <div className="form-area">
        <label>Full Name</label>
        <input
          name="name"
          placeholder="Enter your full name..."
          value={user.name}
          onChange={handleChange}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        <label>Email Address</label>
        <input
          name="email"
          placeholder="Enter your Email Id"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <label>Password</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Create a password"
            value={user.password}
            onChange={handleChange}
          />
          <i
            className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        {errors.password && <small className="text-danger">{errors.password}</small>}

        <label>Confirm Password</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && (
          <small className="text-danger">{errors.confirmPassword}</small>
        )}

        <button
          className="btn btn-success btn-narrow mt-3"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>

      <div className="form-side-info">
        <h4>Log In</h4>
        <p>If you already have an account, Login here</p>
        <button
          className="btn btn-success btn-narrow"
          onClick={() => navigate('/Login')}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
