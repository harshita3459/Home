import React, { useState } from 'react';
import './AuthForm.css'; // Ensure to include the correct path to your CSS

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="authform-container">
      <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
      
      {isLogin ? (
        <form className="authform">
          <div className="form-group">
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
          <div className="links">
            <button type="button" onClick={handleFormToggle}>
              Don't have an account? Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form className="authform">
          <div className="form-group">
            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-confirm-password">Confirm Password:</label>
            <input type="password" id="signup-confirm-password" name="confirmPassword" required />
          </div>
          <button type="submit">Sign Up</button>
          <div className="links">
            <button type="button" onClick={handleFormToggle}>
              Already have an account? Sign In
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
