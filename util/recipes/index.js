import { ri, rii, rs, rv, sa , rt } from "./temp";
import { getAutoCompleteUrl, getRandomRecipesURL, getRecipeInformationURL , getRecipeInstructionsURL , getRecipeTasteURL, getRecipeVideosURL, getSimilarRecipesURL } from "./urls";

export async function searchAutoComplete(value){
    // return sa;
    const response = await fetch(getAutoCompleteUrl(value));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'AutoComplete Error');
    }
}


export async function getRecipeInformation(id){
    // return ri;
    const response = await fetch(getRecipeInformationURL(id));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Recipe Information Error');
    }
}

export async function getRecipeInstructions(recipeId){
    // return rii;
    const response = await fetch( getRecipeInstructionsURL(recipeId) );
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
         throw new Error(data.message || 'Recipe Information Error');
    }
}

export const getRecipeVideos = async (query) =>{
    // return rv;
    const response = await fetch( getRecipeVideosURL(query) );
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
         throw new Error(data.message || 'Recipe Videos Error');
    }
}


export const getSimilarRecipes = async (recipeId) => {
    // return rs;
    const response = await fetch(getSimilarRecipesURL(recipeId));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Error in fetching similar recipes');
    }
}


export const getRandomRecipes = async () => {
    // return {recipes : []};
    const response = await fetch(getRandomRecipesURL());
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Error in fetching random recipes');
    }
}

export const getRecipeTaste = async (id) => {
    // return rt;
    const response = await fetch(getRecipeTasteURL(id));
    const data = await response.text();
    console.log(data);
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Error in fetching random recipes');
    }
}

