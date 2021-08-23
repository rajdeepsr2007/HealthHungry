import Fridge from '../fridge';
import classes from './recipes.module.css';
import Select from './select';
const recipes = (props) => {
    return(
        <div className={classes.recipes} >
            <Fridge 
            ingredients={props.ingredients}
            onRemove={props.onRemove}
            />
        </div>
    )
}

export default recipes;