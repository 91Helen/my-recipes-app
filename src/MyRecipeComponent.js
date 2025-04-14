import { useState } from "react";
import imageCheck from "./check.png";
function MyRecipeComponent ({label,image, calories, ingridients,  mealType, dishType}) {

const [isVisible, setIsVisible] = useState(false);

return(<div className="gallery">
            
                    
                       
                    <div className="content">
                   <img src={image} alt="recipes" className="mainImage"/>
                  

                   
                    <h2>{label}</h2>
                   
                       
                 
                    <p className="typeDish">{dishType}</p>
                    
                    
                            <button  onClick={() => setIsVisible(!isVisible)} className="buttonShow">{isVisible ? "HIDE THE RECIPE" : "SHOW THE RECIPE"}</button>
                      

                    {isVisible && ( 
                    <ul className="container list">
                      
                       
                        {ingridients.map((ingredient, index) => (
                        <li key={index}> 
                            <img src={imageCheck} alt="icon" className="icon"/> { ingredient}</li>
                        ))}
                       
                    </ul>
)}
                    <p>{calories.toFixed()} calories</p>
                   
                   
                    <p>Meal type: { mealType} </p>
                    </div>
                
                
            
        </div>
    )
}

export default MyRecipeComponent;