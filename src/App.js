import React ,{useState,useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';





const App =()=> {


const APP_ID="6e9446cb";
const APP_KEY="5bdb16fc521bd26b248004b03adaec6a ";
const [recipes,setRecipes] = useState([]);
const[search,setSearch]=useState('');
const [query,setQuery]= useState('chicken');

useEffect( () =>{ 
  getRecipes();
 },[query]);

const getRecipes= async() => {
  const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data= await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};
const updateSearch=e=>{
setSearch(e.target.value);

}
const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}



return(
<div className="App">
 <div className="nav"><div className="heading">Cook Book</div></div>
 <form onSubmit={getSearch} className="search-form">
   <input className="search-bar" value={search} onChange={updateSearch} type="text" placeholder="Search Your Recipe"/><br />
   <button className="search-button" type="submit"  > Search</button>
</form>
<div className="recipe">
{recipes.map(recipe=>(
  <Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label} 
  calories={recipe.recipe.calories} 
  image={recipe.recipe.image}
  ingredients={recipe.recipe.ingredients}
  />
))}
</div>
</div>


)};
  

export default App;
