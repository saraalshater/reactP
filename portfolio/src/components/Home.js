import ResponsivePlayer from "./ResponsivePlayer";
import HeaderHome from "./HeaderHome";


import "./Home.css";
import Card from "./Card";
import example from "../assets/2.png"

import foto from "../assets/foto.jpg"
import examplefoto from "../assets/examplefoto.jpg"


function Home(props) {
 
  return (
    <>
      <header>
      <HeaderHome />
      </header>

      <body>
        <div><ResponsivePlayer /></div>

        <div className="container">
          <div className="name-card">
            <h1>Sara Alshater</h1>
            <p>
              UX/UI Designer and Web Developer that has multiple interests, and
              passion for design and arts.
            </p>
            <button>Contact me</button>
          </div>
        </div>


        <div className="lastest-projects-container">
          <div className="lastest-projects-contants">
            <h1>Lastest Projects</h1>
            <div className="Cards-container">
                 <Card img={foto} title="project1" category="Ux" />
                 <Card img={example} title="project2" category="Ui"/> 
                 <Card img={examplefoto} title="project3" category="Ui"/>
                
            </div>

          </div>
        


        </div>
      </body>
     
    </>
  );
}

export default Home;
