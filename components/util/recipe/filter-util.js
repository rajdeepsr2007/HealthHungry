import API_KEY from "../../../apiKey"

export const getFilteredRecipes = async (nutrients) => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=15&addRecipeInformation=true&`;
    const nutrientsURL = [];
    for( const nutrient of nutrients ){
        if( nutrient.value > 0 && nutrient.checked )
            if( nutrient.good )
                nutrientsURL.push(`min${nutrient.name}=${nutrient.value}`)
            else
                nutrientsURL.push(`max${nutrient.name}=${nutrient.value}`)
    }
    if( nutrientsURL.length === 0 )
        return [];
    const response = await fetch(url + nutrientsURL.join(' '));
    const data = await response.json();
    if( response.ok ){
        return data.results;
    }else{
        throw new Error( data.message || 'Error in retrieving recipes' );
    }
}