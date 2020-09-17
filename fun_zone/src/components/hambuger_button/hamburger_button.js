import React from 'react';
import "./hamburger_button.css";

const hamburgerButton = props => (
    <div>
        <input id="hamburger-toggle" type="checkbox" />

        <label onClick = {props.click} className="hamburger-btn" htmlFor="hamburger-toggle">
            <span />
        </label>
    </div>
);

export default hamburgerButton;