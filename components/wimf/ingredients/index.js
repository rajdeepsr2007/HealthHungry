import IngredientsBadge from '../../Badge/ingredients/ingredients';
import classes from './ingredients.module.css';
export default function Ingredients( props ){
    const {ingredients,onRemove} = props;
    const label = <div className={classes.label}>
        Your Fridge</div>
    const content = (
        <div className={classes.ingredients} >
            {label}
            { ingredients.length > 0 ? <IngredientsBadge
            ingredients={ingredients}
            removable
            onRemove={onRemove}
            /> : <span>No Ingredients</span> } 
        </div>
    )
    return content;
}