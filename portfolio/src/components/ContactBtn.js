import { Link } from "react-router-dom";
import "./ContactBtn.css"

function ContactBtn(){

return (
    <>
    <Link to="/contact" className="contactIcon text">
         <p className="pInBtn">Contact me</p> 
        </Link>
    </>
)

}
 export default ContactBtn;