import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => (
  <nav className={`sideDrawer ${props.open ? 'open' : ''}`}>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
