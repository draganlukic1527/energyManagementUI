import React from 'react';
import './header.css';
import Toolbar from '@material-ui/core/Toolbar';
import DropDownMenu from './dropdown/dropdown';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header({ setToken }: any) {
  return (
    <Toolbar className="toolbar">
      <h2 className="title-text">Energy Use Overview</h2>
      <div className="toolbar-content">
        <NotificationsIcon style={{ color: '#C5C7CD' }} />
        <div className="break-line"></div>
        <span className="welcome-text">Hello, John Doe</span>
        <DropDownMenu setToken={setToken}></DropDownMenu>
      </div>
    </Toolbar>
  );
}
