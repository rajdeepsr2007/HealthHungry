export const getIngredientImage = (ingredient , size='100x100') => {
    return `https://spoonacular.com/cdn/ingredients_${size}/${ingredient.image}`;
}