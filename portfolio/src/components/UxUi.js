import Card from "./Card";
import example from "../assets/2.png";
import { Link,Routes, Route, useParams } from "react-router-dom";
import data from "./Data";
import foto from "../assets/foto.jpg";
import examplefoto from "../assets/examplefoto.jpg";
import Burger from "./Burger";
import "./BurgerWeb.css";
import BurgerWeb from "./BurgerWeb";
import "./UxUi.css";
import RightNav from "./RightNav";
import uxillus from "../assets/uxuiIllustration.png";
import uxillusAlign from "../assets/uxillusAlign.png";
import { Fragment, useState } from "react";

import ProjectView from "./ProjectView";

function UxUi(params) {
  const [cardItem, setCardItem] = useState(data);

  const uniqueIds = [];


  const uniqueCat = cardItem.filter(element => {
    const isDuplicate = uniqueIds.includes(element.category);

    if (!isDuplicate) {
      uniqueIds.push(element.category);

      return true;
    }

    return false;
  });
  return (
    <>
      <BurgerWeb />
      <div className="illstration-container">
        <div className="illstration-caption">
          <h1>UX </h1>
          <p>Lorem</p>
        </div>

        <div className="uxDrawing">
          {/* <img
            className="pic1"
            src={uxillus}
            alt="people holding phones"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
          <img
            className="pic2"
            src={uxillusAlign}
            alt="people holding phones"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img> */}
        </div>
      </div>

      <div className="ux-projects-container">
        <div className="ux-projects-contants">
       
         
        {uniqueCat.filter(id=> id.id > 8 ).map((item , i) => {
          return (
            <div key={i}>
  
              <h2>
                
                {item.category}
              
                
                </h2>
             <Card cardItem={cardItem} cat={item.category} />
            </div>
          );
        })}
        </div>
      </div>
     


    </>
  );
}

export default UxUi;
