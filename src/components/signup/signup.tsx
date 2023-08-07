import React, { useState } from 'react';
import './signup.scss';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Signup(props: any) {
  const toggleModal = () => {
    props.toggleModal(false);
  };

  const [fullName, setFullName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [zipCode, setZipCode] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [county, setCounty] = useState();
  const [energyProvider, setEnergyProvider] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-label">
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
            <label className="label-content">
              <p className="text-field-title">Full Name</p>
              <TextField
                id="outlined-fullName-input"
                type="fullName"
                autoComplete="current-fullName"
                className="text-field"
                onChange={(e: any) => setFullName(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">Phone Number</p>
              <TextField
                id="outlined-phoneNumber-input"
                type="phoneNumber"
                autoComplete="current-phoneNumber"
                className="text-field"
                onChange={(e: any) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">Country</p>
              <TextField
                id="outlined-country-input"
                type="country"
                autoComplete="current-country"
                className="text-field"
                onChange={(e: any) => setCountry(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">Address</p>
              <TextField
                id="outlined-address-input"
                type="address"
                autoComplete="current-address"
                className="text-field"
                onChange={(e: any) => setStreetAddress(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">Zip Code</p>
              <TextField
                id="outlined-zipcode-input"
                type="zipcode"
                autoComplete="current-zipcode"
                className="text-field"
                onChange={(e: any) => setZipCode(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">State</p>
              <TextField
                id="outlined-state-input"
                type="state"
                autoComplete="current-state"
                className="text-field"
                onChange={(e: any) => setState(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">City</p>
              <TextField
                id="outlined-city-input"
                type="city"
                autoComplete="current-city"
                className="text-field"
                onChange={(e: any) => setCity(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">County</p>
              <TextField
                id="outlined-county-input"
                type="county"
                autoComplete="current-county"
                className="text-field"
                onChange={(e: any) => setCounty(e.target.value)}
              />
            </label>
            <label className="label-content">
              <p className="text-field-title">Energy Provider</p>
              <TextField
                id="outlined-energyProvider-input"
                type="energyProvider"
                autoComplete="current-energyProvider"
                className="text-field"
                onChange={(e: any) => setEnergyProvider(e.target.value)}
              />
            </label>
          </div>
          <div className="card-bottom">
            <Button
              className="card-submit"
              type="submit"
              variant="contained"
              onClick={handleClick}
            >
              Log In
            </Button>
          </div>
        </form>
        <button className="close-modal" onClick={toggleModal}>
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default Signup;
