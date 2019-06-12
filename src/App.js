import React, { Component } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    windowWith: window.innerWidth
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleResize = event => {
    this.setState({ windowWith: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  showMenuButton() {
    return this.state.windowWith < 720;
  }

  render() {
    return (
      <div className="App">
        <Navbar
          drawerToggleClickHandler={this.drawerToggleClickHandler}
          showMenuButton={this.showMenuButton()}
          sideDrawerOpen={this.state.sideDrawerOpen}
        />
        <CSSTransition
          in={this.state.sideDrawerOpen}
          timeout={200}
          classNames="backdrop"
          unmountOnExit
        >
          <Backdrop backdropClickHandler={this.backdropClickHandler} />
        </CSSTransition>
        <CSSTransition
          in={this.state.sideDrawerOpen}
          timeout={200}
          classNames="sidedrawer"
          unmountOnExit
        >
          <SideDrawer open={this.state.sideDrawerOpen} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
