import React from 'react';
import './MenuBtn.css';

const MenuBtn = props => (
  <div
    className={`menuBtn ${props.sideDrawerOpen ? 'open' : ''}`}
    onClick={props.drawerToggleClickHandler}
  >
    <div className="menuLine" />
    <div className="menuLine" />
    <div className="menuLine" />
  </div>
);

export default MenuBtn;
