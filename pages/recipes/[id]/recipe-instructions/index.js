import { useEffect, useState } from "react";
import Alert from "../../../../components/feedbacks/alert/alert";
import Loader from "../../../../components/UI/Loader";
import Spinner from "../../../../components/UI/Spinner";
import { getRecipeInstructions } from "../../util";
import Instructions from "../../../../components/recipes/recipe/instructions";
import classes from './instructions.module.css';

function RecipeInstructions(props){

    const {instructions , setRecipeInstructions , recipeId} = props;
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(async () => {
        if( !instructions ){
            setLoading(true);
            setError(null);
            try{
                const data = await getRecipeInstructions( recipeId );
                setLoading(false);
                setRecipeInstructions( data );
            }catch(error){
                setLoading(false);
                setError(error.message);
            }
        }
    },[]);

    if( error ){
        return <Alert type='error'>{error}</Alert>
    }

    if( loading || !instructions ){
        return <div><Loader /><Spinner /></div>
    }
    
    const instructionsCard = (
        <div className={classes.instructions} >
            <Instructions instructions={instructions} />
        </div>
    )

    return(
        instructionsCard
    )
}

export default RecipeInstructions;