import API_KEY from "../../../apiKey";

export const getAutoCompleteUrl = (query , number=5) => {
    return `https://api.spoonacular.com/recipes/autocomplete?apiKey=${API_KEY}&number=${number}&query=${query}`
} 