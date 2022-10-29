import './login.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>
);

async function loginUser(credentials: any) {
  console.log('Credentials:', credentials);
  return await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(data => data.json())
    .catch(error => console.log('ERROR:', error));
}

export default function LoginPage({ setToken }: any, customToken?: any) {
  console.log('CUSTOM', customToken);
  if (customToken.length > 0) {
    console.log('CUSTOM', customToken);
    setToken(customToken);
  }
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await loginUser({
      EmailAddress: username,
      PasswordHash: password,
    });
    console.log('TOKEN: ', token);
    setToken(token);
  };

  return (
    <Card sx={{ minWidth: 400 }} className="login-card">
      <CardContent className="card-content">
        <h1>Energy Management Dashboard</h1>
        <p className="card-title">Enter your email and password below</p>
        <form onSubmit={handleSubmit}>
          <label className="label-content">
            <p className="text-field-title">Email</p>
            <TextField
              id="outlined-email-input"
              type="text"
              autoComplete="current-email"
              className="text-field"
              onChange={(e: any) => setUserName(e.target.value)}
            />
          </label>
          <label className="label-content">
            <p className="text-field-title">Password</p>
            <TextField
              id="outlined-password-input"
              type="password"
              autoComplete="current-password"
              className="text-field"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button className="card-submit" type="submit">
              Log In
            </button>
          </div>
        </form>
      </CardContent>
      <CardActions>
        <p className="card-sign-up">
          Don't have an account? <span className="sign-up-text">Sign Up!</span>
        </p>
      </CardActions>
    </Card>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
