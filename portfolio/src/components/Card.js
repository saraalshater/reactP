import { Link } from "react-router-dom";
import example from "../assets/2.png"
import "./Card.css";
import foto from "../assets/foto.jpg"

function Card({cardItem}) {

  
    return(
        <>
        <div className="Cards-container">
          { cardItem.map((item) =>{
            return (
      <div className="card-container">
        <img src={item.img} alt="example" className="card-img" />
        <h2>{item.title}</h2>
        <p className="category">{item.category}</p>
        <Link to="/uxui">   
        <button className="card-btn">Veiw</button>
        </Link>
      </div>
      );
       })
      }
      </div>
        </>
    )
}


export default Card;