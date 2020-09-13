import React from "react";
import './about.css';

const AboutMe = props =>{
    return(
        <div className = "bg-about">
            <div className = "about-me">
                <img className = "portrait-image" src={require("../../img/por.jpg")} alt=""/>
                <div className = "about-text">
                    <h1>ACTOR</h1>
                    <p className = "about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, in dicta? Sit, ullam facilis. 
                        Cupiditate, sequi! A aspernatur iste quisquam laboriosam accusamus amet nisi, quos libero quo, ex, 
                        voluptatibus nesciunt.
                    </p>
                </div>
            </div> 
        </div>  
    )
}

export default AboutMe;