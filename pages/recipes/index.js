import { Fragment, useEffect, useState } from "react";
import AutoComplete from "../../components/inputs/search/autocomplete-box";
import SearchBar from "../../components/inputs/search/search-bar";
import RecipeCards from "../../components/recipes/recipe/cards";
import { searchAutoComplete , getRandomRecipes } from "../../util/recipes/index";
import Alert from '../../components/feedbacks/alert/alert'
import RecipeFilter from "../../components/recipes/filter";
import { getFilteredRecipes } from "../../components/util/recipe/filter-util";
import { getSession } from "next-auth/client";

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
    

    useEffect(async () => {
        if( nutrients.length > 0 ){
            setError(null);
            try{
                const data = await getFilteredRecipes(nutrients);
                if( data.length === 0 ){
                    return;
                }
                setRecipes(data);
            }catch(error){
                setError(error.message)
            }
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
                    /> : error ? <Alert type='error'>{props.error}</Alert> : null
            }
        </Fragment>    
    )
}

export async function getServerSideProps(context){
    const session = await getSession({ req : context.req });
  
    if( !session ){
      return{
        redirect : {
          destination : '/auth',
          permanent : false
        }
      }
    }

    return {props : {}};
  }

export default Recipes;