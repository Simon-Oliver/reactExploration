import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideDrawer />
        <Backdrop />
      </div>
    );
  }
}

export default App;
