import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        {<SideDrawer open={this.state.sideDrawerOpen} />}
        {this.state.sideDrawerOpen && <Backdrop backdropClickHandler={this.backdropClickHandler} />}
      </div>
    );
  }
}

export default App;
