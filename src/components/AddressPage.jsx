import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../assets/css/Address.css';

const Address = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    street: '',
    city: '',
    state: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'Enter valid 10-digit mobile number';
    if (!form.street.trim()) newErrors.street = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.state.trim()) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('address', JSON.stringify(form));
      navigate('/payment');
    }
  };

  return (
    <>
      <div className="py-5 step-nav mt-5">
        <h2 className="cart-title mt-5">Cart</h2>
        <div className="steps">
          <NavLink to="/address" className="step active" style={{ pointerEvents: 'none', cursor: 'default' }}>
            BAG
          </NavLink>

          <span className="arrow">›</span>
          <span className="step active">ADDRESS</span>
          <span className="arrow">›</span>
          <NavLink to="/address" className="step text-muted" style={{ pointerEvents: 'none', cursor: 'default' }}>
            PAYMENT
          </NavLink>

        </div>
      </div>

      <div className="address-container">
        <h2>Contact Details</h2>
        <form onSubmit={handleSubmit} className="address-form">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            className="form-input"
            type="text"
            name="mobile"
            placeholder="Enter your mobile number"
            value={form.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <h2>Address</h2>
          <input
            className="form-input"
            type="text"
            name="street"
            placeholder="Door no, Building no, Street name,"
            value={form.street}
            onChange={handleChange}
          />
          {errors.street && <p className="error">{errors.street}</p>}

          <div className="city-state">
            <input
              className="form-input"
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
            />
          </div>
          {(errors.city || errors.state) && (
            <p className="error">
              {errors.city ? errors.city + ' ' : ''}
              {errors.state}
            </p>
          )}

          <button type="submit" className="add-btn">ADD ADDRESS</button>
        </form>
      </div>
    </>
  );
};

export default Address;
