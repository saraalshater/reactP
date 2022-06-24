import React from "react";


import logoSmall from "../assets/logo.png";
import "./HeaderHome.css";


import {Link} from  "react-router-dom";

import Burger from "./Burger";
import RightNav from "./RightNav";


function HeaderHome(props) {
  
  return (
    <>
    {/* <div>
      <Link to="/" className="logo">
        <img src={logoSmall} alt="logo"/>
      </Link>
    </div> */}


  

    


    <Burger />
        
     </>
  );
}

export default HeaderHome;
