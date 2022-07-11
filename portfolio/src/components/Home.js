import ResponsivePlayer from "./ResponsivePlayer";
import HeaderHome from "./HeaderHome";

import contactIcon from "../assets/contactIcon.png";
import "./Home.css";
import Card from "./Card";
import example from "../assets/2.png"

import foto from "../assets/foto.jpg"
import examplefoto from "../assets/examplefoto.jpg"
import contactIconSmall from "../assets/contactIconSmall.png"

import data from "./Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactBtn from "./ContactBtn";

function Home() {
  const [cardItem, setMenuItem] = useState(data);
  return (
    <>
      
      <HeaderHome />
     
   
        <div><ResponsivePlayer /></div> 
       



        <div className="container">
          <div className="name-card">
            <h1>Sara Alshater</h1>
            <p>
              UX/UI Designer and Web Developer that has multiple interests, and
              passion for design and arts.
            </p>
            <button >Contact me</button>
          </div>
        </div>


        <div className="lastest-projects-container">
          <div className="lastest-projects-contants">
            <h1>Lastest Projects</h1>
            
                 <Card cardItem={cardItem} />
               
                
            </div>

          </div>
        


        
      
     
    </>
  );
}

export default Home;
