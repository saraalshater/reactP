import ResponsivePlayer from "./ResponsivePlayer";
import HeaderHome from "./HeaderHome";

import contactIcon from "../assets/contactIcon.png";
import "./Home.css";
import Card from "./Card";

import Footer from "./Footer";
import foto from "../assets/foto.jpg"
import examplefoto from "../assets/examplefoto.jpg"
import contactIconSmall from "../assets/contactIconSmall.png"
import "./Card.css";
import data from "./Data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [cardItem, setMenuItem] = useState(data);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const uniqueIds = [];


  const uniqueCat = cardItem.filter(element => {
    const isDuplicate = uniqueIds.includes(element.category);

    if (!isDuplicate) {
      uniqueIds.push(element.category);

      return true;
    }

    return false;
  });
  return (
    <>
      
      <HeaderHome />
     
   
        <div><ResponsivePlayer /></div> 
       



        <div className="container">
          <div className="name-card">
            <h1>Sara Alshater</h1>
            <p>
              UX/UI Designer and Web Developer that has multiple interests, and
              passion for design and arts.
            </p>
            <Link to="/contact">
            <button >Contact me</button>
            </Link>
          </div>
        </div>


        <div className="lastest-projects-container">
          <div className="lastest-projects-contants">
            <h1>Lastest Projects</h1>
            <div className="Cards-container">      
        {cardItem.filter(id=> id.id === 74 || id.id === 78 || id.id === 79 ).map((item , i) => {
          return (
            <div key={i}>
  
      
         
            <div className="card-container" >
              <img src={item.img} alt="example" className="card-img" />
              <h2>{item.title}</h2>
              <p className="category">{item.category}</p>

              <Link to={`/projectview/${item.id}`}>
                <button className="card-btn">Veiw</button>
              </Link>
            </div>
          
     
      </div>
          
       
           
          );
        })}
             </div>   
                
            </div>

          </div>
        


        
          <Footer />
     
    </>
  );
}

export default Home;
