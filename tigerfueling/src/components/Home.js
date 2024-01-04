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
          Dock and Boat owner Brent and Rivers, frustrated with high prices at marine gas stations, manual fueling, and bait runs, join forces to revolutionize the marine industry.  Their collaboration yields innovative solutions like an algorithm optimizing shipping routes for efficiency and environmental sustainability, addressing the challenges they faced personally. Explore our services designed to make your weekend on the water much more pleasant.
          </article>
        </div>        
        </div>
    );
};
 
export default Home;