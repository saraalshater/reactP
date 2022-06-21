import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import logoSmall from "../assets/logo.png";
import "./HeaderHome.css";
import burgerMenu from "../assets/burger-menu.png"
// import { FaBeer } from "react-icons/fa";
import logoMobile from "../assets/logoMobile.png"

function HeaderHome(props) {
  return (
    <nav className="nav">
    <div>
      <a href="/" className="logo">
        <img src={logoSmall} />
      </a>
    </div>
    <div>
      <a href="/" className="logo-mobile">
        <img src={logoMobile}/>
      </a>
    </div>
    <div>
      <ul>
        <li>
          <a href="/uxui">UXUI</a>
        </li>
        <li>
          <a href="/programming">PROGRAMMING</a>
        </li>
        <li>
          <a href="/arts">ARTS</a>
        </li>
        <li>
          <a href="/about-me">ABOUT ME</a>
        </li>
      </ul>
      <a href="/" className="burger-menu">
      <img src={burgerMenu} />
      </a>
    </div>
  </nav>
  );
}

export default HeaderHome;
