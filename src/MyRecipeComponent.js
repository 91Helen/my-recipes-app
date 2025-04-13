import { useState } from "react";
import imageCheck from "./check.png";
function MyRecipeComponent ({label,image, calories, ingridients,  mealType, dishType}) {

const [isVisible, setIsVisible] = useState(false);

return(<div>
            
                    <div className="container">
                    <h2>{label}</h2>
                    </div>
                       
                    <div className="container">
                    <p className="typeDish">{dishType}</p>
                    </div>
                       
                    <div className="container">
                   <img src={image} alt="recipes"/>
                    </div>
                        
                        <div className="container">
                            <button  onClick={() => setIsVisible(!isVisible)} className="buttonShow">{isVisible ? "HIDE THE RECIPE" : "SHOW THE RECIPE"}</button>
                        </div>

                    {isVisible && ( 
                    <ul className="container list">
                      
                       
                        {ingridients.map((ingredient, index) => (
                        <li key={index}> 
                            <img src={imageCheck} alt="icon" className="icon"/> { ingredient}</li>
                        ))}
                       
                    </ul>
)}
                    <div className="container">
                    <p>{calories.toFixed()} calories</p>
                    </div>
                        
                    <div className="container">
                    <p>Meal type: { mealType} </p>
                    </div>
                
                
            
        </div>
    )
}

export default MyRecipeComponent;