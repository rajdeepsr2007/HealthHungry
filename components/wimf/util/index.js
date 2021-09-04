import API_KEY from '../../../apiKey';
export const getRecipesByIngredients = async (ingredients=[] , number=10 , sortOption) => {

    const ingredientNames = ingredients.map( ingredient => ingredient.name );
    const response = await fetch( 
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientNames.join(',')}&number=${number}&sort=${sortOption}` 
    )
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Something Went Wrong!');
    }
}