export const getIngredientImage = (ingredient , size='100x100') => {
    console.log(ingredient);
    return `https://spoonacular.com/cdn/ingredients_${size}/${ingredient.image}`;
}