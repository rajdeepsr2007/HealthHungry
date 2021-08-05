import { Fragment, useState } from "react";
import AutoComplete from "../../components/inputs/search/autocomplete-box";
import SearchBar from "../../components/inputs/search/search-bar";
import { searchAutoComplete , getRandomRecipes } from "./util";

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


    const [recipes , setRecipes] = useState(props.recipes);


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
                    console.log(error.message);
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
        </Fragment>    
    )
}

export async function getStaticProps(){

    try{
        const recipes = await getRandomRecipes();
        return {props:{ recipes } , revalidate : 60*60*24}
    }catch(error){
        return {props : { error : error.message }}
    }
    
}

export default Recipes;