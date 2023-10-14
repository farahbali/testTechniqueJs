import React, { useState } from 'react';

const SignupPage=()=> {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Submitted: ', formData);
  };

  // Styles
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

  const buttonStyle = {
    cursor:"pointer",
    padding: '10px',
    backgroundColor: '#b19cd9',
    color: 'white',
    marginTop:"5%",
    border: 'none',
    borderRadius: '5px',
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h2>Sign Up and join us 😊</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle} onClick={()=>alert("you have signed up with success !")}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;