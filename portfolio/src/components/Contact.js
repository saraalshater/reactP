import "./Contact.css";
import mail from "../assets/Mail.png";
import Linkedin from "../assets/Linkedin.png";
import Behance from "../assets/Behance.png";
import GitHub from "../assets/GitHub.png";
import { useEffect, useState } from "react";
import { send } from "emailjs-com";
import contactill from "../assets/contactill.png";
import mailVector from "../assets/mailVector.png";
import BurgerWeb from "./BurgerWeb";
import Footer from "./Footer";
function Contact() {
  const [sender_email, set_sender_email] = useState("");
  const [sender_subject, set_sender_subject] = useState("");
  const [message, set_message] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const handleSubject = (e) => {
    set_sender_subject(e.target.value);
  };

  const handleMessage = (e) => {
    set_message(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_dn5iweq",
      "template_3kw07on",
      { sender_email, sender_subject, message },
      "-QPT4Zr0DpXV6rqh1"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
        setStatus("Success");
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_sender_email("");
    set_sender_subject("");
    set_message("");
  };

  const renderAlert = () => (
    <div className="alert">
      <p>Your message has been sent successfully!</p>
    </div>
  );

  useEffect(() => {
    if (status === "Success") {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  }, [status]);

  return (
    <>
      <BurgerWeb />
      <div className="contact-container">
        <div className="contact-box">
          <h1 className="contacth1"> Contact me</h1>
          {status && renderAlert()}
          <form onSubmit={sendMail}>
            <label>
              Your email address<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="sender_email"
              value={sender_email}
              onChange={handleEmail}
              required
            ></input>

            <label>
              Subject<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="sender_subject"
              value={sender_subject}
              onChange={handleSubject}
              required
            ></input>

            <label>
              Your message<span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              type="text"
              id="message"
              name="sender_message"
              value={message}
              onChange={handleMessage}
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>

        <div className="conactill">
          <img
            alt="contact-illustration"
            src={contactill}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="icon-container">
        <div className="mail-con">
          <img src={mailVector} style={{ width: "16px" }} />
          &nbsp; Gleave.alshater@gmail.com
        </div>

        <div className="icon-flex">
          <div>
            <a href="https://www.linkedin.com/in/sara-alshater-a7092a225/">
              <img src={Linkedin} style={{ width: "50px" }} />
            </a>
          </div>
          <div>
            <a href="https://www.behance.net/saraalshater">
              <img src={Behance} style={{ width: "50px" }} />
            </a>
          </div>
          <div>
            <a href="https://github.com/saraalshater">
              <img src={GitHub} style={{ width: "50px" }} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
