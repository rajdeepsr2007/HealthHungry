import { useReducer } from "react";
import { useState , useEffect, Fragment } from "react";
import AutoComplete from "../../components/inputs/search/autocomplete-box";
import SearchBar from "../../components/inputs/search/search-bar";
import Title from "../../components/UI/Title";
import Ingredients from "../../components/wimf/ingredients";
import Recipes from "../../components/wimf/recipes/index";
import { searchAutoComplete } from "../../util/wimf";
import reducer from "../../util/wimf/reducer";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

export default function WIMF(){

    const [searchControl , setSearchControl] = useState({
        value : '',
        timeout : null
    });

    const [autoComplete , setAutoComplete] = useState({
        value : '',
        items : [],
        show : false
    });


    const router = useRouter();
    useEffect(() => {
        router.replace(
            '/wimf#maui'
        )
    },[])

    const [ingredients,dispatchIngredients] = useReducer(
        reducer,
        []
    );

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
                    const data = await searchAutoComplete(value)
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
            <Title>
                What's In My Fridge ?
            </Title>
            <SearchBar
            value={searchControl.value}
            onSearchChange={onSearchChange}
            showHideAutoComplete={showHideAutoComplete}
            />
            <AutoComplete
            autoComplete={autoComplete}
            type='Ingredients'
            onClick={(item) => dispatchIngredients({ type : 'ADD' , ingredient : item })}
            />
            <Ingredients 
            ingredients={ingredients}
            onRemove={(id) => dispatchIngredients({ type : 'REMOVE' , id })}
            />
            <Recipes 
            ingredients={ingredients}
            onRemove={(id)=>dispatchIngredients({type : 'REMOVE' ,id})}
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
  