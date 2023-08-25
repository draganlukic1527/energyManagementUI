import './loginPage.scss';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdArrowDropDown } from 'react-icons/md';
import { SlMenu } from 'react-icons/sl';
import Signup from '../signup/signup';

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
  const [modal, setModal] = useState(false);

  const toggleModal = (data: any) => {
    setModal(!modal);
    console.log('data:', data, 'modal: ', modal);
  };

  const showModal = modal;
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  console.log('CUSTOM', customToken);
  if (customToken.length > 0) {
    setToken(customToken);
  }
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  let token: any = null;
  let shouldHideNoUserPopover: boolean = false;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    token = await loginUser({
      EmailAddress: username,
      PasswordHash: password,
    });

    if (!token?.UserID) {
      shouldHideNoUserPopover = true;
    }
    setToken(token);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const selectHeaderButton = (event: any) => {
    console.log('event: ', event);
  };
  const open = Boolean(anchorEl) && shouldHideNoUserPopover;
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="login-page">
      <div className="login-header">
        <a className="login-header-button" onClick={selectHeaderButton}>
          Pricing <MdArrowDropDown />
        </a>
        <a className="login-header-button" onClick={selectHeaderButton}>
          Products <MdArrowDropDown />
        </a>
        <a className="login-header-button" onClick={selectHeaderButton}>
          Enterprise <MdArrowDropDown />
        </a>
        <a className="login-header-button" onClick={selectHeaderButton}>
          Partners <MdArrowDropDown />
        </a>
        <a className="login-header-button" onClick={selectHeaderButton}>
          Company <MdArrowDropDown />
        </a>
      </div>
      <Card sx={{ minWidth: 400 }} className="login-card">
        <CardContent className="card-content">
          <h1 className="card-parent-title">Energy Management Dashboard</h1>
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
            <div className="card-bottom">
              <Button
                className="card-submit"
                type="submit"
                variant="contained"
                onClick={handleClick}
                aria-describedby={id}
              >
                Log In
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Typography sx={{ p: 2 }}>
                  User email or password does not exist
                </Typography>
              </Popover>
            </div>
          </form>
        </CardContent>
        <CardActions>
          <p className="card-sign-up">
            Don't have an account?{' '}
            <span className="sign-up-text" onClick={toggleModal}>
              Sign Up!
            </span>
          </p>
        </CardActions>
      </Card>
      {showModal && <Signup toggleModal={toggleModal} />}
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
