import React from 'react';
import  './App.css';



const Recipe=({title,calories,image,ingredients})=>{
	return(
		<div className="recipes1">
		    <h1 className="title">{title}</h1><span><img className="image" src={image}/></span>
		    <p className="calory"> {calories} Calories</p>
		    <ol>{ingredients.map(ingredient =>(
		    	<li> {ingredient.text}</li>
		    	))}
		    </ol>
		    
		   
		</div>




		);
}
export default Recipe;