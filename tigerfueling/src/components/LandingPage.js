import React, { Component, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import Family from "../images/family.png"
import team from "../images/team.jpg"


class LandingPage extends Component {
    constructor(props) {
        super (props);
        this.state={};
    }

    render() {
          return (
            <div className='d-flex justify-content-center align-items-center vh-100 landingPage'>
            <div className='p-3 rounded w-35 vh-50 border landingForm'>
  <form>
  <h2 className="text-center">Welcome to Hartwell Marina Company!</h2>
  <h3 className="text-center">Please use the navigation links above as our landing page is currently being remodeled.</h3>
  </form>
  </div>
          </div>
        );
      };
    }

export default LandingPage;