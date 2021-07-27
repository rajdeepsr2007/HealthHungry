import classes from './badge.module.css';

function IngredientBadge(props){

    const {ingredient} = props;
    const badge = (
        <div className={classes.badge} >
            {`${ingredient.name}`}
        </div>
    )
    return(
        badge
    )
}

export default IngredientBadge;