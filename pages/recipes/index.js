import { Fragment, useEffect, useState } from "react";
import AutoComplete from "../../components/inputs/search/autocomplete-box";
import SearchBar from "../../components/inputs/search/search-bar";
import RecipeCards from "../../components/recipes/recipe/cards";
import { searchAutoComplete , getRandomRecipes } from "./util";
import Alert from '../../components/feedbacks/alert/alert'
import RecipeFilter from "../../components/recipes/filter";

function Recipes(props){

    const [searchControl , setSearchControl] = useState({
        value : '',
        timeout : null
    });

    const [autoComplete , setAutoComplete] = useState({
        value : '',
        items : [],
        show : false
    });

    const [nutrients , setNutrients] = useState([]);

    useEffect(async () => {
        setError(null);
        try{
            const data = await getRandomRecipes();
            setRecipes(data.recipes);
        }catch(error){
            setError(error.message)
        }
    },[]);

    useEffect(() => {
        if( nutrients.length > 0 ){
            console.log('nutrients');
        }
    },[nutrients])


    const [recipes , setRecipes] = useState([]);
    const [error , setError] = useState(null);


    function showHideAutoComplete(show){
        setAutoComplete({ ...autoComplete , show })
    }

    function onSearchChange(event){
        if( searchControl.timeout )
            clearTimeout(searchControl.timeout);
        const value = event.target.value;
        const updatedSearchControl = { value };
        if( value !== '' ){
            updatedSearchControl.timeout = setTimeout(async () => {
                try{
                    const data = await searchAutoComplete(value);
                    setAutoComplete({ value , items : data , show : true });
                }catch(error){
                    setError(error.message)
                }
            },2000)
        }
        setSearchControl(updatedSearchControl);
    }


    return(
        <Fragment>
            <SearchBar 
            value={searchControl.value}
            onSearchChange={onSearchChange}
            showHideAutoComplete={showHideAutoComplete}
            showSearchButton
            />
            <AutoComplete 
            autoComplete={autoComplete}
            />
            <RecipeFilter 
            onChange={(nutrients) => setNutrients(nutrients)}
            />
            {
                 !error && recipes.length > 0  ?   <RecipeCards
                    recipes={recipes}
                    /> : <Alert type='error'>{props.error}</Alert>
            }
        </Fragment>    
    )
}

export default Recipes;