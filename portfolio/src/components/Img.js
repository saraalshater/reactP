import "./ProjectView.css";

function Img({ cardItem, cat }) {



    return (

        <>


       
        <div className="project-pictures" style={{paddingTop: "1rem"}} >
          { cardItem.map((pic,i)=> {
            return pic.category === cat ? (
          <div key={i} className="img-frame" >

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