import BurgerWeb from "./BurgerWeb";
import Contact from "./Contact";
import { useEffect, useRef } from "react";
import "./AboutMe.css";
import foto from "../assets/handspuzzle2.png";
import uniJoLogo from "../assets/University_of_Jordan_Logo_2.png";
import isiLogo from "../assets/isi_logo_2.png";
import codeLogo from "../assets/code_fellows_logo.png";
import googleLogo from "../assets/Google_Logo.png";

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef();

  const scrollBottom = (e) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="about-illstration-container">
        <div className="about-illstration-caption">
          <h1 className="qoute">
            “I am not what I am, I am what I do with my hands.“
          </h1>
          <p>-Louise Bourgeois</p>
        </div>
      </div>

      <div className="about-project-container">
        <div className="about-project">
          <br />
          <img
            src={foto}
            alt="img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginTop: "3rem",
            }}
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
          <h2>Education</h2>

          <div className="edu-contant">
            <div
              style={{
                flexGrow: "0.25",
                textAlign: "left",
                paddingTop: "1rem",
              }}
            >
              <img
                src={uniJoLogo}
                alt="University of Jordan logo"
                width={"80px"}
              />
            </div>

            <div style={{ flexGrow: "8", paddingLeft: "1rem" }}>
              <h3>The University of Jordan</h3>
              <p>Becholar of Visual Arts/Multimedia</p>
              <p>Amman - Jordan</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "right", padding: "40px 0" }}
            >
              <h3>2019</h3>
            </div>
          </div>

          <div className="edu-contant">
            <div
              style={{
                flexGrow: "0.25",
                textAlign: "right",
                paddingTop: "1rem",
              }}
            >
              <img src={isiLogo} alt="isi denpasar logo" width={"80px"} />
            </div>

            <div style={{ flexGrow: "8", paddingLeft: "1rem" }}>
              <h3>Indonesian Institute of the Arts, Denpasar</h3>
              <p>Fine Arts and Culture </p>
              <p>Bali - Indonesia</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "right", padding: "40px 0" }}
            >
              <h3>2021</h3>
            </div>
          </div>
        </div>

        <div className="Edu-container">
          <h2>Certification</h2>

          <div className="edu-contant">
            <div
              style={{
                flexGrow: "0.25",
                textAlign: "left",
                paddingTop: "1rem",
              }}
            >
              <img src={codeLogo} alt="code fellows logo" width={"80px"} />
            </div>

            <div style={{ flexGrow: "8", paddingLeft: "1rem" }}>
              <h3>Code Fellows</h3>
              <p>Full-stack software development</p>
              <p>Amman - Jordan</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "right", padding: "40px 0" }}
            >
              <h3>2021</h3>
            </div>
          </div>

          <div className="edu-contant">
            <div
              style={{
                flexGrow: "0.25",
                textAlign: "left",
                paddingTop: "1rem",
              }}
            >
              <img src={googleLogo} alt="Google logo" width={"80px"} />
            </div>

            <div style={{ flexGrow: "8", paddingLeft: "1rem" }}>
              <h3>Google</h3>
              <p>Google UX Design Professional Certificate</p>
              <p>Coursera</p>
            </div>
            <div
              style={{ flexGrow: "1", textAlign: "right", padding: "40px 0" }}
            >
              <h3>On going</h3>
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
