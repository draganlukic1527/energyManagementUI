import './App.css';
import Header from '../src/components/header/header';
import { makeStyles } from '@material-ui/core/styles';
import DashboardCard from '../src/components/Dashboard/dashboardcard/dashboardCard.js';
import React, { Component } from 'react';


class App extends Component { 
    render() {
      return (
        <div className="App">
          <Header></Header>
          <DashboardCard></DashboardCard>
        </div>
      );
    }
}

export default App;
