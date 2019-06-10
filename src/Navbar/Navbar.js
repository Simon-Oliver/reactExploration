import React from 'react';
import './Navbar.css';
import logo from '../newLogoIdea.svg';

const Navbar = props => (
  <nav className="mainHeader">
    <img className="logo" src={logo} alt=" " />
    <ul>
      <li>Home</li>
      <li>Portfolio</li>
      <li>About</li>
    </ul>
  </nav>
);

export default Navbar;
