import { getSimilarRecipes } from ".";
import API_KEY from "../../apiKey";

export const getAutoCompleteUrl = (query , number=5) => {
    return `https://api.spoonacular.com/recipes/autocomplete?apiKey=${API_KEY}&number=${number}&query=${query}`
} 

export const getRecipeInformationURL = (id) => {
    return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`
}

export const getRecipeInstructionsURL = (id) => {
    return `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
}

export const getRecipeVideosURL = (query , number=10) => {
    let formattedQuery=query.split(' ');
    formattedQuery=formattedQuery[0];
    return `https://api.spoonacular.com/food/videos/search?apiKey=${API_KEY}&query=${formattedQuery}&number=${number}`
}

export const getRandomFoodFactsURL = () => {
    return `https://api.spoonacular.com/food/trivia/random?apiKey=${API_KEY}`
}

export const getRandomRecipesURL = (number=15) => {
    return `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${number}`
}

export const getSimilarRecipesURL = (id , number=8) => {
    return `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${API_KEY}&number=${number}`
} 

export const getRecipeTasteURL = (id) => {
    return `https://api.spoonacular.com/recipes/${id}/tasteWidget?apiKey=${API_KEY}`
}