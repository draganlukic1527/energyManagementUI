import './App.css';
import LoginPage from './components/Login/login';
import Header from './components/header/header';
import DashboardCard from './components/Dashboard/dashboardcard/dashboardCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component, useState } from 'react';
import '@fontsource/mulish';
import useToken from './useToken';

export interface ILoginProp {
  userData: any;
}

function App() {
  const { token, setToken } = useToken();

  let loginProp: ILoginProp = {
    userData: {},
  };

  console.log('token app:', token);
  if (!token?.UserID) {
    return <LoginPage setToken={setToken} />;
  }
  if (token) {
    loginProp = {
      userData: token,
    };

    console.log('Token Login:', token);
    return (
      <div className="App">
        <Header setToken={setToken} userData={loginProp.userData}></Header>
        <DashboardCard></DashboardCard>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="App">
              <LoginPage setToken={setToken} />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="App">
              <Header
                setToken={setToken}
                userData={loginProp.userData}
              ></Header>
              <DashboardCard></DashboardCard>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
