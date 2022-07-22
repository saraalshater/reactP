import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound(params) {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Not Found</p>
            <p>Back to the home page...</p>
            <Link to="/"><button className="homebtn">Home</button></Link>
        </div>
    )
}

export default NotFound;