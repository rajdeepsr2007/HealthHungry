import API_KEY from "../../apiKey"

export const getSearchAutoCompleteURL = (value , number=5) => {
    return `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}&query=${value}&number=${number}&metaInformation=true`
}