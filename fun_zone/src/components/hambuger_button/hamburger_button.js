import React from 'react';
import "./hamburger_button.css";

const hamburgerButton = props => (
    <div>
        <input id="hamburger-toggle" type="checkbox" />

        <label onClick = {props.click} class="hamburger-btn" for="hamburger-toggle">
            <span />
        </label>
    </div>
);

export default hamburgerButton;