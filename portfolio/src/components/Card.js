import "./Card.css";

import { Link } from "react-router-dom";

function Card({ cardItem, cat }) {
  return (
    <>
      <div className="Cards-container">
        {cardItem.map((item, i) => {
          return item.category === cat ? (
            <div key={i} className="card-container" >
              <img src={item.img} alt="example" className="card-img" />
              <h2>{item.title}</h2>
              <p className="category">{item.subcategory}</p>

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

export default Card;
