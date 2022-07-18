import "./ProjectView.css";

function Img({ cardItem, cat }) {



    return (

        <>


       
        <div className="project-pictures" style={{paddingTop: "1rem"}} >
          { cardItem.map((pic,i)=> {
            return pic.category === cat ? (
          <div className="img-frame" key={i}>

            <img src={pic.pics} alt="img" className="img-pro" />
          </div>
          ) : null ;
          }
          )
          }


          </div>
          
        </>
    )
    
}

export default Img;