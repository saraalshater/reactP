import React from "react";


import logoSmall from "../assets/logo.png";
import "./HeaderHome.css";
import burgerMenu from "../assets/burger-menu.png";
// import { FaBeer } from "react-icons/fa";
import logoMobile from "../assets/logoMobile.png";
import {Link} from  "react-router-dom";


function HeaderHome(props) {
  
  return (
    <nav className="nav">
    <div>
      <Link to="/" className="logo">
        <img src={logoSmall} alt="logo"/>
      </Link>
    </div>
    <div>
      <Link to="/" className="logo-mobile">
        <img src={logoMobile} alt="logo"/>
      </Link>
    </div>
    <div>
      <ul>
        
          <Link to="/uxui">
            <li>UXUI</li>
          </Link>
        
        
          <Link to="/programming">
            <li>PROGRAMMING</li>
          </Link >
        
       
          <Link to="/arts">
            <li>ARTS</li>
          </Link>
        
        
          <Link to="/about">
            <li>ABOUT ME</li>
          </Link>
        
      </ul>

      <Link to="/" className="burger-menu">
      <img src={burgerMenu} alt="burger-menu"/>
      </Link>
    </div>
  </nav>
  );
}

export default HeaderHome;
