import { getAutoCompleteUrl } from "./urls";

export async function searchAutoComplete(value){
    return [
        {
            id: 296687,
            title: "chicken",
            imageType: "jpg"
        },
        {
            id: 42569,
            title: "chicken bbq",
            imageType: "jpg"
        },
    
        {
            id: 83890,
            title: "chicken blt",
            imageType: "jpg"
        },
        {
            id: 737543,
            title: "chicken pie",
            imageType: "jpg"
        }
    ];
    const response = await fetch(getAutoCompleteUrl(value));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'AutoComplete Error');
    }
}