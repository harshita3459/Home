import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="login-page">
      <video autoPlay muted loop id="background-video">
        <source src={require('./assets/Green Abstract Welcome To My Channel Video (1).mp4')} type="video/mp4" />
      </video>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <article id="F1">
        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div><center>
        <button type="submit">Login</button></center>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        </article>
      </form>
    </div>
  );
}

export default Login;
