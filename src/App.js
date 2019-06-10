import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideDrawer />
      </div>
    );
  }
}

export default App;
