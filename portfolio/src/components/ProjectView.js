import ReactPlayer from "react-player";
import foto from "../assets/foto.jpg";
import "./ProjectView.css";
import Footer from "./Footer";
import BurgerWeb from "./BurgerWeb";
import sky from "../assets/sky.png";
import Card from "./Card";
import { useParams } from "react-router-dom";
import data, { uxData } from "./Data";
import { useEffect, useState } from "react";
import ContactBtn from "./ContactBtn";
import linkicon from "../assets/linkicon.png"
// import examplefoto from "../assets/examplefoto.jpg";
import ContactbtnMobile from "./ContactbtnMobile";
function ProjectView() {
  const [cardItem, setCardItem] = useState(data);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const uniqueIds = [];
  const selectedPrject = data.filter((item) => item.id == id);

  const uniqueCat = cardItem.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.category);

    if (!isDuplicate) {
      uniqueIds.push(element.category);

      return true;
    }

    return false;
  });

  console.log(selectedPrject);

  return (
    <>
      <BurgerWeb />

      <ContactBtn />
      <ContactbtnMobile/>
      {selectedPrject.map((item, i) => {
        return (
          <>
            <div className="project" key={i}>
              <div className="row">
                <div className="intro-bg">
                  <div className="intro">
                    <h4 className="cat">{item.subcategory}</h4>
                    <h1 className="title">{item.title}</h1>
                    <h3 className="brif-intro">{item.brief}</h3>
                    <h4 className="para">{item.introPara}</h4>
                    {item.url ? (<a href={item.url} style={{fontWeight:"bold", textDecoration:"underline",   }}>Check out project link <img src={linkicon} width="13px" /></a>) : null}
                  </div>
                </div>

                <div className="overview-img-container">
                  <img
                    src={item.img}
                    alt="proj-pic"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {item.video ? (
                <div className="video-wrapper">
                  <ReactPlayer
                    className="react-p"
                    url={item.video}
                    width="100%"
                    height="100%"
                    playing={false}
                  />
                </div>
              ) : null}

              <div className="about-project-container">
                <div className="about-project">
                  {item.header1 ? <h2 className="h2-headers">{item.header1}</h2> : null}

                  {item.ul1
                    ? item.ul1.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}

                  {item.header2 ? <h2 className="h2-headers" >{item.header2}</h2> : null}

                  {item.ul2
                    ? item.ul2.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}

                  {item.header3 ? <h1 className="h1-headers">{item.header3}</h1> : null}
                  {item.para3 ? <p>{item.para3}</p> : null}

                  {item.profoto1
                    ? item.profoto1.map((foto, i) => {
                        return (
                          <div key={i}>
                            <img
                              src={foto}
                              alt="img"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        );
                      })
                    : null}

                  {item.header4 ? <h2 className="h2-headers">{item.header4}</h2> : null}
                  {item.ul4
                    ? item.ul4.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}

                  {item.header5 ? <h2 className="h2-headers">{item.header5}</h2> : null}
                  {item.ul5
                    ? item.ul5.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}

                  {item.header6 ? <h2 className="h2-headers">{item.header6}</h2> : null}
                  {item.ul6
                    ? item.ul6.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}

                  {item.header7 ? <h1 className="h1-headers" >{item.header7}</h1> : null}
                  {item.para7 ? <p>{item.para7}</p> : null}
                  {item.profoto2
                    ? item.profoto2.map((foto, i) => {
                        return (
                          <div key={i}>
                            <img
                              src={foto}
                              alt="img"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        );
                      })
                    : null}

                  {item.header8 ? <h2 className="h2-headers">{item.header8}</h2> : null}
                  {item.ul8
                    ? item.ul8.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}
                  {item.header9 ? <h2 className="h2-headers">{item.header9}</h2> : null}
                  {item.ul9
                    ? item.ul9.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}

                  {item.header10 ? <h2 className="h2-headers">{item.header10}</h2> : null}
                  {item.ul10
                    ? item.ul10.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}


{item.header11 ? <h1 className="h1-headers">{item.header11}</h1> : null}
                  {item.para11 ? <p>{item.para11 }</p> : null}
                  {item.profoto3
                    ? item.profoto3.map((foto, i) => {
                        return (
                          <div key={i}>
                            <img
                              src={foto}
                              alt="img"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        );
                      })
                    : null}

{item.header12 ? <h2 className="h2-headers">{item.header12}</h2> : null}
                  {item.ul12
                    ? item.ul12.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}
                    {item.header13 ? <h2 className="h2-headers">{item.header13}</h2> : null}
                  {item.ul13
                    ? item.ul13.map((li, i) => {
                        return (
                          <ul key={i} className="proj-ul">
                            <li>{li}</li>
                          </ul>
                        );
                      })
                    : null}


                 
                </div>
              </div>

              <div className="project-pictures-bg">
                <h2>Project pictures</h2>
                <div className="project-pictures">
                  {item.pics.map((pic, i) => {
                    return (
                      <div className="img-frame" key={i}>
                        <img src={pic} alt="img" className="img-pro" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="related-projects-container">
              <div className="related-projects-contants">
                <h1>Check out related projects</h1>

                {cardItem
                  .filter((id) => id.id === item.id + 2)
                  .map((item, i) => {
                    return (
                      <div key={i}>
                        <div className="art-projects-contants">
                          
                          <Card cardItem={cardItem} cat={item.category} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
}

export default ProjectView;
