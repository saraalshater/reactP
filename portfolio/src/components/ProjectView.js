import ReactPlayer from "react-player";
import foto from "../assets/foto.jpg";
import "./ProjectView.css";
import BurgerWeb from "./BurgerWeb";
import sky from "../assets/sky.png";
import Card from "./Card";
import { useParams } from "react-router-dom"
import data, { uxData } from "./Data";
import { useEffect,useState } from "react";
import ContactBtn from "./ContactBtn";
// import examplefoto from "../assets/examplefoto.jpg";
function ProjectView() {
  const [cardItem, setCardItem] = useState(data);
  const { id } = useParams()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const uniqueIds = [];
const selectedPrject = data.filter(item => item.id == id); 

const uniqueCat = cardItem.filter(element => {
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
  
     <ContactBtn/>
      { selectedPrject.map((item, i) =>{
        return  (   
          <>      
<div className="project" key={i}>
      <div className="row">
        <div className="intro-bg">
          <div className="intro">
            <h4 className="cat">{item.category}</h4>
            <h1 className="title">{item.title}</h1>
            <h3 className="brif-intro">brief intro</h3>
            <p className="para">
            describtion: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco,(describtion): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco{" "}
            </p>
          </div>
        </div>

        <div className="overview-img-container">
          <img
            src={item.img}
            alt="proj-pic"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

   {item.video ? (< div className="video-wrapper">
      <ReactPlayer
        className="react-p"
        url={item.video}
        width="100%"
        height="100%"
        
      playing={false}
      />
    
    </div>) : null}

      <div className="about-project-container">
        <div className="about-project">
          <p>
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
            exercitation ullamco
          </p>
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

      <div className="project-pictures-bg">
        <h2>Project pictures</h2>
        <div className="project-pictures">
          { item.pics.map((pic,i)=> {
            return (
          <div className="img-frame" key={i}>

            <img src={pic} alt="img" className="img-pro" />
          </div>
          )
          }
          )
          }

        </div>
      </div>
      </div>



      <div className="related-projects-container">
        <div className="related-projects-contants">
          <h2>Check out related projects</h2>

          {cardItem.filter(id => id.id === item.id+2).map((item , i) => {
          return  (
            <div key={i}>
  <div className="art-projects-contants">
              <h2>
                
              
              
                
                </h2>
             <Card cardItem={cardItem} cat={item.category} />
            </div>
            </div>
          )
     
        })} 
         
        </div>
      </div>
      </>
            )
          })
        }
      
  
    </>
  );
}

export default ProjectView;
