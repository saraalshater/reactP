import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";
import logoMobile from "../assets/logoMobile.png";
import logoSmall from "../assets/logo.png";

import styled from 'styled-components';
const Div = styled.div`
@media only screen and (max-width: 700px) {
 transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
}

`;
function RightNav({ open }) {
  return (
    <>
    <nav className="nav">
    <div>
      <Link to="/" className="logo">
        <img src={logoSmall} alt="logo"/>
      </Link>
    </div>

      <div>
        <img className="logo-mobile" src={logoMobile} alt="logo" />
      </div>

      <Div className="rightNav-container" open={open}>
        <ul className="ul">
          <Link to="/" className="home-mobile">
            <li >HOME</li>
          </Link>

          <Link to="/uxui">
            <li className="li">UXUI</li>
          </Link>

          <Link to="/programming">
            <li className="li">PROGRAMMING</li>
          </Link>

          <Link to="/arts">
            <li className="li">ARTS</li>
          </Link>

          <Link to="/about">
            <li className="li">ABOUT ME</li>
          </Link>
        </ul>
      </Div>
      </nav>
    </>
  );
}

export default RightNav;
