import "./Contact.css";
import mail from "../assets/Mail.png";
import Linkedin from "../assets/Linkedin.png";
import Behance from "../assets/Behance.png";
import GitHub from "../assets/GitHub.png";
import { useState } from "react";
import { send } from "emailjs-com";
function Contact() {

 const [sender_email, set_sender_email] = useState('');
 const [sender_subject, set_sender_subject] = useState('');
 const [message, set_message] = useState('');


 const handleEmail = (e) => {

    set_sender_email(e.target.value)
 }

 const handleSubject = (e) => {
    set_sender_subject(e.target.value)
 }

 const handleMessage = (e) => {
    set_message(e.target.value)
}



const sendMail = (e) => {
    e.preventDefault();
send(
    'service_dn5iweq',
    'template_3kw07on',
    {sender_email, sender_subject, message },
    '-QPT4Zr0DpXV6rqh1'
)
.then((response) => {
    console.log('Message sent successfully', response.status, response.text)
})
.catch((err) => {
    console.log('Failed', err)
})


}
    return (
        <>
        <div className="contact-container" >
        <div className="contact-box"> 
        <div className="contact-content">
       <div className="contact-float-left">
        <h1> Contact me</h1>
 
 <form onSubmit={sendMail}>
    <label >Your email address</label>
    <input type="email" id="email" name="sender_email" value={sender_email} onChange={handleEmail} required></input>

    <label >Subject</label>
    <input type="text" id="subject" name="sender_subject" value={sender_subject} onChange={handleSubject} required></input>

    <label >Your message</label>
    <textarea type="text" id="message" name="sender_message" value={message} onChange={handleMessage} required></textarea>

<button type="submit">Send</button>
 </form>


        </div>


{/* 
        <div>
      <a><img src={mail} style={{width:"70px"}}/>Gleave.alshater@hotmail.com</a>
      </div>
      <div>
      <a><img src={Linkedin}/></a>
      </div>
      <div>
      <a><img src={Behance}/></a>
      </div>
      <div>
      <a><img src={GitHub}/></a>

      </div> */}



        </div>
            
        </div>
        </div>
        </>
     )

}

export default Contact;