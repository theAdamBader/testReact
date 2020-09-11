import React, { Component } from 'react';
import Navigation from './components/nav_bar/navbar';
import Sidebar from './components/sidebar/sidebar';

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
    let sideNavBar;

    if(this.state.sidebarOpen){ 
      sideNavBar = <Sidebar />
    }

    return(
      <div style = {{height: '100%'}}>
        
        <Navigation sideNavHandler = {this.sidebarToggleClickHandler} />

        {sideNavBar}
        
      </div>
    );
  }
}

export default App;