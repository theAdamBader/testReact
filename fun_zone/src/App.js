import React, { Component } from 'react';
import Navigation from './components/nav_bar/navbar';
import Sidebar from './components/sidebar/sidebar';
import About from './components/about/about';
import Sliding from './components/swiper/swiper';
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

        <About />

        <Sliding />
        
      </div>
    );
  }
}

export default App;