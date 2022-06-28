import { Link } from "react-router-dom";
import example from "../assets/2.png"
import "./Card.css";
import foto from "../assets/foto.jpg"

function Card(params) {
    return(
        <>
      <div className="card-container">
        <img src={foto} alt="example" className="card-img" />
        <h2>Project name</h2>
        <p className="category">Category</p>
        <Link to="/uxui">   
        <button className="card-btn">Veiw</button>
        </Link>
      </div>
      
        </>
    )
}


export default Card;