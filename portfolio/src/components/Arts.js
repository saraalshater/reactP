import data from "./Data";

import "./Card.css";
import Button from "./Button";
import { useEffect,useState } from "react";
import "./Button.css";
import Card from "./Card";
import watering from "../assets/wateing-png.png";
import uxillusAlign from "../assets/uxillusAlign.png";
import "./Art.css";
import BurgerWeb from "./BurgerWeb";
import Img from './Img';
import Contact from "./Contact";
import ContactBtn from "./ContactBtn";
import Footer from "./Footer";
import ContactbtnMobile from "./ContactbtnMobile";
import artIllmob from "../assets/white-bg-wtring.png";

const allCategories = ["All", ...new Set(data.filter(id=> id.id < 73 ).map((item) => item.category))];
// const allCategories = ["All", ...new Set(data.filter(type => type.category === 'Film photography' && 'Collages' && 'Multimedia'|| 'Sketches' || 'Filmmaking' ).map((item) => item.category))];
// const withoutDuplicates = [...new Set(data.category)];
function Arts() {
  const [cardItem, setCardItem] = useState(data);
  const [buttons, setButtons] = useState(allCategories);

  
  const uniqueIds = [];


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
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
      <ContactbtnMobile/>
      <div className="art-illstration-container">
        <div className="art-illstration-caption">
          <p className="category-intro">Art is my way to express myself and how I see the world. I get inspired by people, nature and music.</p>
          <p></p>
        </div>

        <div className="artDrawing">
          <img  className="pic1" src={watering} alt="hand watering a plant" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
             <img className="pic2"src={artIllmob} alt="hand watering a plant" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
        </div>
      </div>

      
      <h1 className="cat-mob-view">Categories</h1>
      <div className="fltr-container">
     
        <Button button={buttons} filter={filter} />
      </div>

      <div className="art-container">
        {uniqueCat.filter(id=> id.id < 73 ).map((item , i) => {
          return item.category === "Filmmaking" ||item.category === "Graphic Design" ? (
            <div key={i}>
  <div className="art-projects-contants">
              <h1>
                
                {item.category}
              
                
                </h1>
             <Card cardItem={cardItem} cat={item.category} />
            </div>
            </div>
          ) :  <>
                <div className="art-projects-contants">
 
               <h1>{item.category}</h1> 
               <Img cardItem={cardItem} cat={item.category}  />
               </div>
               </>
     
        })} 
      </div>



      <Footer />
    </>
  );
}

export default Arts;
