import data from "./Data";

import "./Card.css";
import Button from "./Button";
import { useState } from "react";
import "./Button.css";
import Card from "./Card";
import watering from "../assets/wateing-png.png";
import uxillusAlign from "../assets/uxillusAlign.png";
import "./Art.css";
import BurgerWeb from "./BurgerWeb";
import Img from './Img';
import Contact from "./Contact";
import ContactBtn from "./ContactBtn";



const allCategories = ["All", ...new Set(data.filter(id=> id.id < 70 ).map((item) => item.category))];
// const allCategories = ["All", ...new Set(data.filter(type => type.category === 'Film photography' && 'Collages' && 'Multimedia'|| 'Sketches' || 'Filmmaking' ).map((item) => item.category))];
// const withoutDuplicates = [...new Set(data.category)];
function Arts() {
  const [cardItem, setCardItem] = useState(data);
  const [buttons, setButtons] = useState(allCategories);

  
  const uniqueIds = [];



  
  const filter = (button) => {
    if (button === "All"  ) {
      setCardItem(data);
      return;
    } 
    const filteredData = data.filter((item) => item.category === button);
    filteredData.sort((a,b)=>a.category < b.category)
    setCardItem(filteredData);

  };

  const uniqueCat = cardItem.filter(element => {
    const isDuplicate = uniqueIds.includes(element.category);

    if (!isDuplicate) {
      uniqueIds.push(element.category);

      return true;
    }

    return false;
  });



  console.log(uniqueCat);


  return (
    <>
      <BurgerWeb />
      <ContactBtn/> 
      <div className="illstration-container">
        <div className="illstration-caption">
          <h1>Arts</h1>
          <p>lorem</p>
        </div>

        <div className="uxDrawing">
          <img  className="pic1" src={watering} alt="." style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
             <img className="pic2"src={watering} alt="l" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
        </div>
      </div>

      <div className="fltr-container">
        <Button button={buttons} filter={filter} />
      </div>

      <div className="art-container">
        {uniqueCat.filter(id=> id.id < 70 ).map((item , i) => {
          return item.category === "Filmmaking" ||item.category === "Multimedia" ? (
            <div key={i}>
  <div className="art-projects-contants">
              <h2>
                
                {item.category}
              
                
                </h2>
             <Card cardItem={cardItem} cat={item.category} />
            </div>
            </div>
          ) :  <>
                <div className="art-projects-contants">
 
               <h2>{item.category}</h2> 
               <Img cardItem={cardItem} cat={item.category}  />
               </div>
               </>
     
        })} 
      </div>



     
    </>
  );
}

export default Arts;
