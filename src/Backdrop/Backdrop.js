import React from 'react';
import './Backdrop.css';

const Backdrop = props => <div className="backDrop" onClick={props.backdropClickHandler} />;

export default Backdrop;
