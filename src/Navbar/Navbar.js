import React from 'react';
import './Navbar.css';
import logo from '../newLogoIdea.svg';
import MenuBtn from './MenuBtn';

const Navbar = props => (
  <nav className="mainHeader">
    <MenuBtn drawerToggleClickHandler={props.drawerToggleClickHandler} />
    <img className="logo" src={logo} alt=" " />
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

export default Navbar;
