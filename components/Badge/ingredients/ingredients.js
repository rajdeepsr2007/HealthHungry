import IngredientBadge from "./ingredient";
export default function IngredientsBadge(props){
    const {ingredients,removable,onRemove} = props;
    return (
            ingredients.map(ingredient => {
            return <IngredientBadge 
                    ingredient={ingredient} 
                    removable={removable} 
                    onRemove={onRemove} 
                    />
            })  
    )
}