import React, { Component } from 'react';
import Navigation from './components/nav_bar/navbar';
import Sidebar from './components/sidebar/sidebar';
import './css/img.css'

class App extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  render(){
    return(
      <div style = {{height: '100%'}}>
        
        <Navigation sideNavHandler = {this.sidebarToggleClickHandler} />

        <Sidebar show = {this.state.sidebarOpen} />
        
        <img src={require('./img/pic.jpg')} alt = "" id = "images" />

        <p>HELLO WORLD</p>

        
      </div>
    );
  }
}

export default App;