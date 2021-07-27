import classes from './recipe-cards.module.css';

function RecipeCards(props){
    const {recipes} = props;
    const recipeCards = (
        <div className={classes.cards} >

        </div>
    )

    return(
        recipeCards
    )
}

export default RecipeCards;