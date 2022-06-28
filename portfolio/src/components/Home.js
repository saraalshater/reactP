import ResponsivePlayer from "./ResponsivePlayer";
import HeaderHome from "./HeaderHome";

import { Routes, Route } from "react-router-dom";
import UxUi from "./UxUi";
import Programming from "./Programming";
import Arts from "./Arts";
import AboutMe from "./AboutMe";
import "./Home.css";
import Card from "./Card";

function Home(props) {
  return (
    <>
      <header>
        <div>
          <HeaderHome />
          <Routes>
            <Route path="/uxui" element={<UxUi />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
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
                 <Card/>
                 <Card/> 
                 <Card/>
                
            </div>

          </div>
        


        </div>
      </body>
      
    </>
  );
}

export default Home;
