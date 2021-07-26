import { capitalize } from '@material-ui/core';
import classes from './autocomplete-box.module.css'

function AutoComplete(props){

    const {recipes , show} = props.autoComplete;
    const recipeNames = recipes.map( recipe => {
        return (<div 
        key={recipe.id}
        className={classes.recipe} >
            {capitalize(recipe.title)}
        </div>)
    });
    const boxClasses = [classes.box];
    if( !show )
        boxClasses.push(classes.hide)
    const box = (
        <div className={boxClasses.join(' ')} >
            {recipeNames}
        </div>
    )
    return(
        box
    )
}

export default AutoComplete;