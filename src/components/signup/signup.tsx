import React, { useState } from 'react';
import './signup.scss';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { SlClose } from 'react-icons/sl';
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

    console.log(e);
    const userCredentials = {
      EmailAddress: username,
      PasswordHash: password,
      EnergyProvider: energyProvider,
      FirstName: fullName,
      MiddleName: null,
      LastName: fullName,
      RegisteredDate: null,
      LastLogin: null,
      StreetAddress: streetAddress,
      Zip: zipCode,
      City: city,
      State: state,
    };

    const newUser = await signUp(userCredentials);

    if (newUser?.uid) {
      console.log('Hello User: ', newUser?.uid);
    }
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  async function signUp(credentials: any) {
    console.log('Credentials:', credentials);
    return await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(data => data.json())
      .catch(error => console.log('ERROR:', error));
  }

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
              Sign Up!
            </Button>
          </div>
        </form>
        <span className="close-modal" onClick={toggleModal}>
          <SlClose />
        </span>
      </div>
    </div>
  );
}

export default Signup;
