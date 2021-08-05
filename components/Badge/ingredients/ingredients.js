import IngredientBadge from "./ingredient";
export default function IngredientsBadge(props){
    const {ingredients} = props;
    return (
            ingredients.map(ingredient => {
            return <IngredientBadge ingredient={ingredient} />
            })  
    )
}