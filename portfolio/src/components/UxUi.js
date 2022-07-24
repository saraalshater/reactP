import Card from "./Card";

import { Link,Routes, Route, useParams } from "react-router-dom";
import data from "./Data";
import foto from "../assets/foto.jpg";
import examplefoto from "../assets/examplefoto.jpg";
import Burger from "./Burger";
import "./BurgerWeb.css";
import BurgerWeb from "./BurgerWeb";
import "./UxUi.css";
import RightNav from "./RightNav";
import uxillus from "../assets/hands-holding-phone.png";
import uxillusAlign from "../assets/hands-phone-2.png";
import { Fragment, useState, useEffect } from "react";
import ContactBtn from "./ContactBtn";
import ProjectView from "./ProjectView";

function UxUi(params) {
  const [cardItem, setCardItem] = useState(data);

  const uniqueIds = [];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      <ContactBtn/>
      <div className="illstration-container">
        <div className="illstration-caption">
          <h1>The best thing designers can use to create a good user experience is to empathize </h1>
          <p></p>
        </div>

        <div className="uxDrawing">
          <img
            className="pic1"
            src={uxillusAlign}
            alt="people holding phones"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
          <img
            className="pic2"
            src={uxillusAlign}
            alt="people holding phones"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
        </div>
      </div>

      <div className="ux-projects-container">
       
         
        {uniqueCat.filter(id=> id.id > 73  && id.id < 79).map((item , i) => {
          return (
            <div key={i}>
              <div className="ux-projects-contants">
  
              <h2>
                
                {item.category}
              
                
                </h2>
             <Card cardItem={cardItem} cat={item.category} />
            </div>
        </div>
          );
        })}
      </div>
     


    </>
  );
}

export default UxUi;
