
import example from "../assets/2.png"
import "./Card.css";
import foto from "../assets/foto.jpg"
import {Link } from "react-router-dom";


function Card({cardItem}) {

    return(
        <>
        <div className="Cards-container">
          { cardItem.map((item) =>{
            return (
      <div className="card-container" key={item.id}>
        <img src={item.img} alt="example" className="card-img" />
        <h2>{item.title}</h2>
        <p className="category">{item.category}</p>
       
      <Link to={`/projectview/${item.id}`} >
        <button className="card-btn" >Veiw</button>
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