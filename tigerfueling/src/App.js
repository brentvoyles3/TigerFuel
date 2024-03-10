import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./components/ContactUs"
import Login from "./components/Login"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Fueling from "./components/Fueling"
import BaitTackle from "./components/BaitTackle"
import Towing from "./components/Towing"
import ShoppingCart from "./components/ShoppingCart"
import LandingPage from "./components/LandingPage"
import React from 'react';

function App() {
  return (
      <>
          {/* This is the alias of BrowserRouter i.e. Router */}
          <Router>
          <Navbar />
              <Routes>
                  {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
       <Route
                        exact path="/"
                        element={<LandingPage/>}
                    />

                    <Route  
                      path="/landingpage"
                      element={<LandingPage />}
                  />   

                   <Route
                      path="/login"
                      element={<Login />}
                  />

                   <Route
                      path="/register"
                      element={<Register />}
                  />

                    <Route  
                      path="/services"
                      element={<Services />}
                  />

                  <Route
                      path="/contactus"
                      element={<Contact />}
                  />

                    <Route  
                      path="/fueling"
                      element={<Fueling />}
                  />

<Route  
                      path="/baittackle"
                      element={<BaitTackle />}
                  />

<Route  
                      path="/towing"
                      element={<Towing />}
                  />
<Route  
                      path="/shoppingcart"
                      element={<ShoppingCart />}
                  />                  

                  {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
                  {/* <Redirect to="/" /> */}
                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
              {/*<Footer />*/}
          </Router>
      </>
  );
}

export default App;
