import data from "./Data";

import "./Card.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import "./Button.css";
import Card from "./Card";
import watering from "../assets/wateing-png.png";
import "./Art.css";
import BurgerWeb from "./BurgerWeb";
import Img from "./Img";
import ContactBtn from "./ContactBtn";
import Footer from "./Footer";
import ContactbtnMobile from "./ContactbtnMobile";
import artIllmob from "../assets/white-bg-wtring.png";

const allCategories = [
  "All",
  ...new Set(data.filter((id) => id.id < 71).map((item) => item.category)),
];

function Arts() {
  const [cardItem, setCardItem] = useState(data);
  const [buttons, setButtons] = useState(allCategories);

  const uniqueIds = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filter = (button) => {
    if (button === "All") {
      setCardItem(data);
      return;
    }
    const filteredData = data.filter((item) => item.category === button);
    filteredData.sort((a, b) => a.category < b.category);
    setCardItem(filteredData);
  };

  const uniqueCat = cardItem.filter((element) => {
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
      <ContactBtn />
      <ContactbtnMobile />
      <div className="art-illstration-container">
       

        <div className="artDrawing">
          <img
            className="pic1"
            src={watering}
            alt="hand watering a plant"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
          <img
            className="pic2"
            src={watering}
            alt="hand watering a plant"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
        </div>

        <div className="art-illstration-caption">
          <p className="category-intro">
            Art is my way to express myself and how I see the world. I get
            inspired by people, nature and music.
          </p>
          
        </div>
      </div>

      <h1 className="cat-mob-view">Categories</h1>
      <div className="fltr-container">
        <Button button={buttons} filter={filter} />
      </div>

      <div className="art-container">
        {uniqueCat
          .filter((id) => id.id < 71)
          .map((item, i) => {
            return item.category === "Filmmaking" ||
              item.category === "Multimedia" ? (
              <div key={i}>
                <div className="art-projects-contants">
                  <h1>{item.category}</h1>
                  <Card cardItem={cardItem} cat={item.category} />
                </div>
              </div>
            ) : (
              
                <div key={i} className="art-img-projects-contants" >
                  <h1>{item.category}</h1>
                  <Img cardItem={cardItem} cat={item.category} />
                </div>
              
            );
          })}
      </div>

      <Footer />
    </>
  );
}

export default Arts;
