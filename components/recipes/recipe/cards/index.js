import RecipeCard from './card';
import classes from './recipe-cards.module.css';

function RecipeCards(props){
    const {recipes} = props;
    const recipeCards = (
        <div className={classes.cards} >
            {
                recipes.map( recipe => {
                    return <RecipeCard 
                            key={recipe.id}
                            recipe={recipe} 
                            />
                })
            }
        </div>
    )

    return(
        recipeCards
    )
}

export default RecipeCards;