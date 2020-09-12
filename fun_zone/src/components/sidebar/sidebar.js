import React from "react";
import "./sidebar.css";

const sideBar = props => {
  let sideBarNav = 'side-bar';
  if (props.show){
    sideBarNav = 'side-bar open';
  }

  return (
    <nav className={sideBarNav}>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ACTOR</a></li>
            <li><a href="/">DEMO REEL</a></li>
            <li><a href="/">GALLERY</a></li>
            <li><a href="/">NEWS</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default sideBar;