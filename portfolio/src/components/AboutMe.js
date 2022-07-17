import BurgerWeb from "./BurgerWeb";
import Contact from "./Contact";
import { useRef } from "react";
import "./AboutMe.css";
import foto from "../assets/foto.jpg";
import uniJoLogo from "../assets/University_of_Jordan_Logo_2.png";
import isiLogo from "../assets/isi_logo_2.png";
import codeLogo from "../assets/code_fellows_logo.png";
import googleLogo from "../assets/Google_Logo.png"




function AboutMe() {
  const scrollRef = useRef();

  const scrollBottom = (e) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <BurgerWeb />
      <div className="illstration-container">
        <div className="illstration-caption">
          <h1 className="qoute">
            “I am not what I am, I am what I do with my hands.“

          </h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Louise Bourgeois</p>
        </div>
      </div>

      <div className="about-project-container">
        <div className="about-project">
          <br />
          <img
            src={foto}
            alt="img"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <p>
            {" "}
            describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco{" "}
          </p>

          <p>
            {" "}
            describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco{" "}
          </p>

          <p>
            describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
      </div>

      <div className="Edu-Cer-container">
        <div className="Edu-container">
          <h1>Education</h1>

          <div className="edu-contant">
            <div style={{ flexGrow: "1", textAlign: "left" }}>
              <img
                src={uniJoLogo}
                alt="University of Jordan logo"
                width={"100px"}
              />
            </div>

            <div style={{ flexGrow: "8" }}>
              <h2>The University of Jordan</h2>
              <p>Becholar of Visual Arts/Multimedia</p>
              <p>Amman - Jordan</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "center", padding: "70px 0" }}
            >
              <h2>2019</h2>
            </div>
          </div>

          <div className="edu-contant">
            <div style={{ flexGrow: "1",  textAlign: "left" }}>
              <img
                src={isiLogo}
                alt="University of Jordan logo"
                width={"100px"}
              />
            </div>

            <div style={{ flexGrow: "8" }}>
              <h2>Indonesian Institute of the Arts, Denpasar</h2>
              <p>Fine Arts and Culture </p>
              <p>Bali - Indonesia</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "center", padding: "70px 0" }}
            >
              <h2>2021</h2>
            </div>
          </div>
        </div>

        <div className="Edu-container">
          <h1>Certification</h1>

          <div className="edu-contant">
            <div style={{ flexGrow: "1",  textAlign: "left" }}>
              <img
                src={codeLogo}
                alt="University of Jordan logo"
                width={"100px"}
              />
            </div>

            <div style={{ flexGrow: "8" }}>
              <h2>Code Fellows</h2>
              <p>Full-stack software development</p>
              <p>Amman - Jordan</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "center", padding: "70px 0" }}
            >
              <h2>2021</h2>
            </div>
          </div>

          <div className="edu-contant">
            <div style={{ flexGrow: "1", textAlign: "left", padding: "1.5rem 2.1rem 1rem 1.3rem" }}>
              <img
                src={googleLogo}
                alt="University of Jordan logo"
                width={"100px"}
              />
            </div>

            <div style={{ flexGrow: "8" }}>
              <h2>Google</h2>
              <p>Google UX Design Professional Certificate</p>
              <p>Coursera</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "center", padding: "70px 0" }}
            >
              <h2>On going</h2>
            </div>
          </div>


        </div>
      </div>

      <a className="contactIcon text" onClick={() => scrollBottom(scrollRef)}>
        {" "}
        <p className="pInBtn">Contact me</p>{" "}
      </a>

      <div ref={scrollRef}>
        <Contact />
      </div>
    </>
  );
}

export default AboutMe;
