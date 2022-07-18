import { Link } from "react-router-dom";
import "./ContactBtn.css"

function ContactBtn(){

return (
    <>
    <Link to="/contact">
        <a  className="contactIcon text"> <p className="pInBtn">Contact me</p> </a>
        </Link>
    </>
)

}
 export default ContactBtn;