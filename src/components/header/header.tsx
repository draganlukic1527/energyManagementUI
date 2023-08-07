import React from 'react';
import './header.scss';
import Toolbar from '@material-ui/core/Toolbar';
import DropDownMenu from './dropdown/dropdown';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header(prop: any) {
  return (
    <Toolbar className="toolbar">
      <h2 className="title-text">Energy Use Overview</h2>
      <div className="toolbar-content">
        <NotificationsIcon style={{ color: '#C5C7CD' }} />
        <div className="break-line"></div>
        <span className="welcome-text">Hello, {prop.userData?.FirstName}</span>
        <DropDownMenu setToken={prop.setToken}></DropDownMenu>
      </div>
    </Toolbar>
  );
}
