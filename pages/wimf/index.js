import { useState , Fragment } from "react";
import AutoComplete from "../../components/inputs/search/autocomplete-box";
import SearchBar from "../../components/inputs/search/search-bar";
import Title from "../../components/UI/Title";
import { searchAutoComplete } from "./util";

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
            />
        </Fragment>
    )
}