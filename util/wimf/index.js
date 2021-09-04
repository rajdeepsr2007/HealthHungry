import { iac } from "./temp";
import { getSearchAutoCompleteURL } from "./URLs";

export const searchAutoComplete = async (value) => {
    // return iac;
    const response = await fetch(getSearchAutoCompleteURL(value));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Ingredient Search AutoComplete Error');
    }
}
