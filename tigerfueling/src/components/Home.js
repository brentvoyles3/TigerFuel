// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import "../App.css"
import tiger from "../tiger.jpeg"
 
const Home = () => {
    return (
        <div className="landingBodyy">
            <div className="picContainer">
                <img src={tiger} className = "tigger"></img>
            </div>
             <div className="landingContainer">
        <article>
          <h1> About Us </h1>
          </article>
        </div>        
        </div>
    );
};
 
export default Home;