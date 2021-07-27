import API_KEY from "../../../apiKey";

export const getAutoCompleteUrl = (query , number=5) => {
    return `https://api.spoonacular.com/recipes/autocomplete?apiKey=${API_KEY}&number=${number}&query=${query}`
} 

export const getRecipeInformationURL = (id) => {
    return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
}

export const getRecipeInstructionsURL = (id) => {
    return `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
}

export const getRecipeVideosURL = (query , number=10) => {
    let formattedQuery=query.split(' ');
    formattedQuery=formattedQuery[0];
    return `https://api.spoonacular.com/food/videos/search?apiKey=${API_KEY}&query=${formattedQuery}&number=${number}`
}