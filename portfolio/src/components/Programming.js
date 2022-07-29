
import { useEffect, useState } from "react";
import data from "./Data";
import BurgerWeb from "./BurgerWeb";
import Card from "./Card";
import ContactBtn from "./ContactBtn";
import prog from "../assets/prog.png";
import Footer from "./Footer";
import ContactbtnMobile from "./ContactbtnMobile";
import "./UxUi.css";
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
      <ContactbtnMobile/>
      <div className="illstration-container">
        <div className="illstration-caption">
          <p className="category-intro">These projects were done working in teams, where mostly my role was on frontend side.</p>
         
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
            .filter((id) => id.id > 78 && id.id <82)
            .map((item, i) => {
              return (
                <div key={i}>
                  <h1>{item.category}</h1>
                  <Card cardItem={cardItem} cat={item.category} />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Programming;
