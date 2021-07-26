import { getAutoCompleteUrl } from "./urls";

export async function searchAutoComplete(value){
    return [{"id":1432029,"title":"khichdi","imageType":"jpg"},{"id":765725,"title":"khichdi recipe","imageType":"jpg"},{"id":605436,"title":"khichdi , how to make moong dal khichdi","imageType":"jpg"},{"id":564708,"title":"rava khichdi (suji/semolina khichadi ) | south indian breakfast s","imageType":"jpg?imgmax=800"},{"id":486715,"title":"palak khichdi , how to make palak khichdi | palak s","imageType":"jpg"}]
    const response = await fetch(getAutoCompleteUrl(value));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'AutoComplete Error');
    }
}