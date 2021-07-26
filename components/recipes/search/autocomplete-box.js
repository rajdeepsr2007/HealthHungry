import { capitalize } from '@material-ui/core';
import classes from './autocomplete-box.module.css';

function AutoComplete(props){

    const {recipes , show} = props.autoComplete;
    const recipeNames = recipes.map( recipe => {
        return (<div 
        key={recipe.id}
        className={classes.recipe} >
            <img src={`https://spoonacular.com/recipeImages/${recipe.id}-90x90.${recipe.imageType}`} height='30px' width='30px' />
            <div className={classes.name} >{capitalize(recipe.title)}</div>
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