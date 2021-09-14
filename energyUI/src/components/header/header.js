import React, {Component} from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default function Header() {
        return(
              <Toolbar className='toolbar'>
              <div className='buttonGroup'>
              <Button color="inherit" className='button'>HOME</Button>
                <Button color="inherit" className='button'>SETTINGS</Button>
              </div>
              </Toolbar>
        );
}