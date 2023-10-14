import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  // Inline styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const linkButtonStyle = {
    display: 'inline-block',
    padding: '10px 15px',
    color: 'white',
    backgroundColor: '#b19cd9',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h2>Welcome Back!</h2>
      <div style={formStyle}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={inputStyle}
          />
        </div>
        <Link to="/" style={linkButtonStyle}> 
          Login
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;