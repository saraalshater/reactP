import Card from "./Card";
import example from "../assets/2.png";
import { Routes, Route, useParams } from "react-router-dom";
import foto from "../assets/foto.jpg";
import examplefoto from "../assets/examplefoto.jpg";
import Burger from "./Burger";
import "./BurgerWeb.css";
import BurgerWeb from "./BurgerWeb";
import "./UxUi.css";
import RightNav from "./RightNav";
import uxillus from "../assets/uxuiIllustration.png";
import uxillusAlign from "../assets/uxillusAlign.png";
import { useState } from "react";
import data from "./Data";
// import ProjectView from "./ProjectView";

function UxUi(params) {
  const [cardItem, setCardItem] = useState(data);
  const { id } = useParams();

  return (
    <>
      <BurgerWeb />
      <div className="illstration-container">
        <div className="illstration-caption">
          <h1>UX is about empathy</h1>
          <p>
            UX/UI Designer and Web Developer that has multiple interests, and
            passion for design and arts.
          </p>
        </div>

        <div className="uxDrawing">
          <img
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
          ></img>
        </div>
      </div>

      <div className="ux-projects-container">
        <div className="ux-projects-contants">
          <h1>UX</h1>
          <div className="ux-Cards-container">
          <Card cardItem={cardItem} />
          </div>
        </div>
      </div>

      <div className="ui-projects-container">
        <div className="ui-projects-contants">
          <h1>UI</h1>
          <div className="ui-Cards-container">
            <Card cardItem={cardItem} />
          
          </div>
        </div>
      </div>
{/* <Routes>
      <Route path="projectview" element={<ProjectView/>} />
      </Routes> */}
    </>
  );
}

export default UxUi;
