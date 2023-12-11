import React from "react";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navigation">
          <a href="/" className="brand-name">
            Tiger Fueling
          </a>
          <div
            className="navigation-menu">
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }