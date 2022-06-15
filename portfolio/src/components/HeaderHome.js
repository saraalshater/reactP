import React from "react";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logo.png"
import './HeaderHome.css';

function HeaderHome(props) {
  return (
    <nav className="nav">
      <div>
        <a href="/" className="logo">
          <img src={logoSmall} />
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
      </div>
    </nav>
  );
}

export default HeaderHome;
