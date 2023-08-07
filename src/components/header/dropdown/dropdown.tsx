import React, { useRef } from 'react';
import './dropdown.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDetectOutsideClick } from '../../../useDetectOutsideClick';

export default function DropDownMenu({ setToken }: any) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <AccountCircleIcon style={{ color: '#C5C7CD' }} />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setToken(null);
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
