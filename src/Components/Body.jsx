
import { useState } from "react";

const Body = () => {


    const [properties, setProperties] = useState({

        toptext : "One does not simply",
        bottomtext: "Walk into Mordor",
        imgUrl : "http://i.imgflip.com/1bij.jpg"





    })


    function handleChange(event){


        

      const { name, value } = event.target
        setProperties(prev => ({
            ...prev,
             [name]: value
        }))



    }

return( 


<main> 


  <div className="Input">
    <label >Top Text
    <input type="text" name= "toptext" placeholder="Enter text here" onChange={handleChange} value={properties.toptext}/>
</label>
    <label >Bottom Text
    <input type="text" name= "bottomtext" placeholder="Enter text here" value = {properties.bottomtext} onChange={handleChange}/>
    </label>


    <button>Get a new meme image 🖼</button>




</div>


     <div className="meme">
                <img src={properties.imgUrl} />
                <span className="top">{properties.toptext}</span>
                <span className="bottom">{properties.bottomtext}</span>
            </div>



</main>



)




}

export default Body;