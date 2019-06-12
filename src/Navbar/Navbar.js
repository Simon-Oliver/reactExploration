import React from 'react';
import './Navbar.css';
import logo from '../logo.svg';
import MenuBtn from './MenuBtn';

const Navbar = props => {
  const menuItems = () => {
    if (!props.showMenuButton)
      return (
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
      );

    return null;
  };
  return (
    <nav className="mainHeader">
      {props.showMenuButton && (
        <MenuBtn
          sideDrawerOpen={props.sideDrawerOpen}
          drawerToggleClickHandler={props.drawerToggleClickHandler}
        />
      )}
      <img className="logo" src={logo} alt=" " />
      {menuItems()}
    </nav>
  );
};

export default Navbar;
