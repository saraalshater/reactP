import { uiData } from "./Data";
import { useState } from "react";
import Card from "./Card";

function Ui(params) {
  const [cardItem, setCardItem] = useState(uiData);

  return (
    <div className="ui-projects-container">
      <div className="ui-projects-contants">
        {cardItem.map((item) => {
          return (
            <>
              <h1>{item.category}</h1>
              <div className="ui-Cards-container">
                <Card cardItem={cardItem} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Ui;
