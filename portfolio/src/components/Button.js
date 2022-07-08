import "./Button.css";


function Button({button, filter}) {
    return (
      <> 
 {
                button.map((cat, i)=>{
                    return <button type="button" key={i} onClick={()=> filter(cat)} className="fltr-btn" >{cat}</button>
                })
            }

       </>
    )
   

}

export default Button;