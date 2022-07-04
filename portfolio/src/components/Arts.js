import data from "./Data";
import "./Card.css";
import Button from "./Button";
import { useState } from "react";
import "./Button.css";
import Card from "./Card";
import watering from "../assets/wateing-png.png";
import uxillusAlign from "../assets/uxillusAlign.png";
import"./Art.css";


const allCategories = ['All', ...new Set(data.map(item => item.category))];

function Arts() {
  const [cardItem, setCardItem] = useState(data);
  const [buttons, setButtons] = useState(allCategories);

const filter = (button) => {
  
  if(button === 'All'){
    setCardItem(data);
    return;
  }
  const filteredData = data.filter(item => item.category === button)
  setCardItem(filteredData)
}

  
  return (
    <>
    <div className="illstration-container">
  
   
  <div className="illstration-caption">
             <h1>UX is about empathy</h1>
             <p>
               UX/UI Designer and Web Developer that has multiple interests, and
               passion for design and arts.
             </p>
           </div>
 
           <div className="uxDrawing">
             <img  className="pic1" src={watering} alt="people holding phones" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
             <img className="pic2"src={watering} alt="people holding phones" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
           </div>
 
          
         </div>

<div className="fltr-container">
      <Button button={buttons} filter={filter}/>
      </div>
      <div className="art-container">
      { cardItem.map((item) =>{
        return (
          <>
          <h2>{item.category}</h2>
      <Card cardItem={cardItem}/>
      </>
        )
    })
  }
  </div>

    </>
  );
}

export default Arts;
