import ProjectView from "./ProjectView";
import { useEffect, useState } from "react";
import data from "./Data";
import BurgerWeb from "./BurgerWeb";
import Card from "./Card";
import ContactBtn from "./ContactBtn";
import prog from "../assets/prog.png";

function Programming(params) {
  const [cardItem, setCardItem] = useState(data);

  const uniqueIds = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div className="illstration-container">
        <div className="illstration-caption">
          <h1>Programming</h1>
          <p>Lorem</p>
        </div>

        <div className="uxDrawing">
          <img
            className="pic1"
            src={prog}
            alt="people holding phones"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
          <img
            className="pic2"
            src={prog}
            alt="people holding phones"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          ></img>
        </div>
      </div>



      <div className="ux-projects-container">
        <div className="ux-projects-contants">
          {uniqueCat
            .filter((id) => id.id > 11)
            .map((item, i) => {
              return (
                <div key={i}>
                  <h2>{item.category}</h2>
                  <Card cardItem={cardItem} cat={item.category} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Programming;
