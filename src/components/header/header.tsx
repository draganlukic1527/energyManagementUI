import React from 'react';
import './header.scss';
import Toolbar from '@material-ui/core/Toolbar';
import DropDownMenu from './dropdown/dropdown';

export default function Header(prop: any) {
  return (
    <Toolbar className="toolbar">
      <h2 className="title-text">Energy Use Overview</h2>
      <div className="toolbar-content">
        <span className="welcome-text">Hello, {prop.userData?.FirstName}</span>
        <DropDownMenu setToken={prop.setToken}></DropDownMenu>
      </div>
    </Toolbar>
  );
}
