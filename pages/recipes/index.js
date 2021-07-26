import { getSession } from "next-auth/client";
import { Fragment, useState } from "react";
import AutoComplete from "../../components/recipes/search/autocomplete-box";
import SearchBar from "../../components/recipes/search/search-bar";
import { searchAutoComplete } from "./util";

function Recipes(){

    const [searchControl , setSearchControl] = useState({
        value : '',
        timeout : null
    });

    const [autoComplete , setAutoComplete] = useState({
        value : '',
        recipes : [],
        show : false
    });

    function showHideAutoComplete(show){
        console.log(show);
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
                    setAutoComplete({ value , recipes : data , show : true });
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
            />
            <AutoComplete 
            autoComplete={autoComplete}
            />
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