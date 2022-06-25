import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WebHeader.css";
import logoBlack from "../assets/logoBlack.png";

function WebHeader() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <header className={header}>
        <div>
          <Link to="/" className="logoBlack">
            <img src={logoBlack} alt="logoblack" />
          </Link>
        </div>
        <div>
          <ul className="white-ul">
            <Link to="/" className="home-mobile">
              <li>HOME</li>
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
        </div>
      </header>
    </>
  );
}

export default WebHeader;
