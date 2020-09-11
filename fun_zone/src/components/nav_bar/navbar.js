import React from "react";
import HamburgerNav from '../../components/hambuger_button/hamburger_button';
import "./nav_bar.css";

const navigationbar = props => (
    <header className = "nav-bar">
        <nav className = "navigation">
            <div>
                <HamburgerNav click = {props.sideNavHandler} />
            </div>
            <div className = "logo"><a href="/">LOGO</a></div>
            <div className = "nav-space" />
            <div className = "nav-items">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">ACTOR</a></li>
                    <li><a href="/">DEMO REEL</a></li>
                    <li><a href="/">GALLERY</a></li>
                    <li><a href="/">NEWS</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navigationbar;