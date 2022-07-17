
import "./Card.css";
import foto from "../assets/foto.jpg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Card({ cardItem, cat }) {
  return (
    <>
      <div className="Cards-container">
        {cardItem.map((item,i) => {
          return item.category === cat ? (
            <div className="card-container" key={i}>
              <img src={item.img} alt="example" className="card-img" />
              <h2>{item.title}</h2>
              <p className="category">{item.category}</p>

              <Link to={`/projectview/${item.id}`}>
                <button className="card-btn">Veiw</button>
              </Link>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
// { cardItem.filter(type => type.category == "Film photography").map((item) =>{
//   return (
//     <>
//     <h2>{item.category}</h2>
// <Card cardItem={cardItem}/>
// </>
//   )
// })
// }

export default Card;
