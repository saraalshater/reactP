import Card from "./Card";
import Footer from "./Footer";
import { Link,Routes, Route, useParams } from "react-router-dom";
import data from "./Data";
import foto from "../assets/foto.jpg";
import examplefoto from "../assets/examplefoto.jpg";
import Burger from "./Burger";
import "./BurgerWeb.css";
import BurgerWeb from "./BurgerWeb";
import "./UxUi.css";
import RightNav from "./RightNav";
import uxillus from "../assets/uxhands-whitebg.png";
import uxillusAlign from "../assets/hands-phone-2.png";
import { Fragment, useState, useEffect } from "react";
import ContactBtn from "./ContactBtn";
import ProjectView from "./ProjectView";
import ContactbtnMobile from "./ContactbtnMobile";
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
      <ContactbtnMobile/>
      <div className="illstration-container">
        <div className="illstration-caption">
        
          <p className="category-intro">I like this field because it’s a combination of design, technology and human computer interaction.</p>
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
            src={uxillus}
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
  
              <h1>
                
                {item.category}
              
                
                </h1>
             <Card cardItem={cardItem} cat={item.category} />
            </div>
        </div>
          );
        })}
      </div>
     

      <Footer />
    </>
  );
}

export default UxUi;
