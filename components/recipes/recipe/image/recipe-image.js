import classes from './recipe-image.module.css'

function RecipeImage(props){
    return(
        <img 
        src={props.image}
        className={classes.image}
        alt={props.alt}
        />
    )
}
export default RecipeImage;