import Card from "./Card";
import example from "../assets/2.png"

import foto from "../assets/foto.jpg"
import examplefoto from "../assets/examplefoto.jpg"
import Burger from "./Burger";
import "./BurgerWeb.css"
import BurgerWeb from "./BurgerWeb";
import "./UxUi.css";
import RightNav from "./RightNav";

function UxUi(params) {
  return(
 <>
 

 <BurgerWeb />
 <div className="illstration-container">
          <div className="illstration">
            <h1>Sara Alshater</h1>
            <p>
              UX/UI Designer and Web Developer that has multiple interests, and
              passion for design and arts.
            </p>
          </div>
        </div>
 
 <div className="ux-projects-container">
          <div className="ux-projects-contants">
            <h1>UX</h1>
            <div className="ux-Cards-container">
                 <Card img={foto} title="project1" category="Ux" />
                 <Card img={example} title="project2" category="Ui"/> 
                 <Card img={examplefoto} title="project3" category="Ui"/>
                 <Card img={examplefoto} title="project3" category="Ui"/>
            </div>

          </div>
        


        </div>

        <div className="ui-projects-container">
          <div className="ui-projects-contants">
            <h1>UI</h1>
            <div className="ui-Cards-container">
                 <Card img={foto} title="project1" category="Ux" />
                 <Card img={example} title="project2" category="Ui"/> 
                 <Card img={examplefoto} title="project3" category="Ui"/>
                
            </div>

          </div>
        


        </div>
      </>
  )
}


export default UxUi;