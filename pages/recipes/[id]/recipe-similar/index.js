import { useEffect, useState } from "react";
import Alert from "../../../../components/feedbacks/alert/alert";
import RecipeCards from "../../../../components/recipes/recipe/cards"
import Loader from "../../../../components/UI/Loader";
import Spinner from "../../../../components/UI/Spinner";
import { getSimilarRecipes } from "../../util";

function SimilarRecipes(props){

    const {recipes , recipeId , setSimilarRecipes} = props;
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(false);

    useEffect(async () => {
        if( !recipes ){
            setLoading(true);
            try{
                const recipes = await getSimilarRecipes( recipeId );
                setLoading(false);
                setSimilarRecipes(recipes);
            }catch(error){
                setLoading(false);
                setError( error.message);
            }
        }
    },[]);

    if( error )
        return <Alert type='error'>{error}</Alert>

    if( loading || !recipes )
        return <div><Loader /><Spinner /></div>

    return(
        <RecipeCards 
        recipes={recipes}
        />
    )
}

export default SimilarRecipes;