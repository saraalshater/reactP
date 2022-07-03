import example from "../assets/2.png";
import foto from "../assets/foto.jpg";
import "./ProjectView.css";
import BurgerWeb from "./BurgerWeb";
import sky from "../assets/sky.png";
import Card from "./Card";

import examplefoto from "../assets/examplefoto.jpg"
function ProjectView() {
  return (
    <>
      <BurgerWeb />
      <div className="row">
        <div className="intro-bg">
          <div className="intro">
            <h4>category</h4>
            <h1>project name</h1>
            <h3>brief intro</h3>
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

        <div className="overview-img-container">
          <img
            src={sky}
            alt="proj-pic"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="about-project-container">
        <div className="about-project">
          <p>
            describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco </p>

           <p> describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco</p>
             <img src={foto} alt="img" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          <p>  describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco </p>

           <p> describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco </p>

            <p>describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
      </div>



      <div className="project-pictures-bg">
        <h2>Project pictures</h2>
<div className="project-pictures"> 
<div className="img-frame">
<img src={foto} alt="img" className="img-pro" />
</div>

<div className="img-frame">
<img src={sky} alt="img" className="img-pro"/>
</div>

<div className="img-frame">
<img src={example} alt="img" className="img-pro"/>
</div>

<div className="img-frame">
<img src={foto} alt="img" className="img-pro"/>
</div>

<div className="img-frame">
<img src={foto} alt="img" className="img-pro"/>
</div>

<div className="img-frame">
<img src={foto} alt="img" className="img-pro"/>
</div>



</div>
      </div>

      <div className="related-projects-container">
          <div className="related-projects-contants">
            <h2>Check out related prohects</h2>
            <div className="Cards-container">
                 <Card img={foto} title="project1" category="Ux" />
                 <Card img={example} title="project2" category="Ui"/> 
                 <Card img={examplefoto} title="project3" category="Ui"/>
                
            </div>

          </div>
        


        </div>

      
    </>
  );
}

export default ProjectView;