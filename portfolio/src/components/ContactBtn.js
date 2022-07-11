import { Link } from "react-router-dom";


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