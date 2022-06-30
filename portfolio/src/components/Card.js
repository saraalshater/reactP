import { Link } from "react-router-dom";
import example from "../assets/2.png"
import "./Card.css";
import foto from "../assets/foto.jpg"

function Card(props) {
    return(
        <>
      <div className="card-container">
        <img src={props.img} alt="example" className="card-img" />
        <h2>{props.title}</h2>
        <p className="category">{props.category}</p>
        <Link to="/">   
        <button className="card-btn">Veiw</button>
        </Link>
      </div>
      
        </>
    )
}


export default Card;