import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Loader from "../../../components/UI/Loader";
import Spinner from "../../../components/UI/Spinner";
import { getRecipeInformation } from "../util";
import Alert from "../../../components/feedbacks/alert/alert";
import RecipeTitle from "../../../components/recipes/recipe/title/recipe-title";
import RecipeImage from "../../../components/recipes/recipe/image/recipe-image";
import RecipeToggler from "../../../components/inputs/toggler/options toggler";
import RecipeInstructions from "./recipe-instructions";
import RecipeVideos from "./recipe-videos";
import SimilarRecipes from "./recipe-similar";
import Nutrition from "../../../components/recipes/recipe/nutrition";
import classes from './recipes.module.css';
import RecipeInfo from "../../../components/recipes/recipe/info";
import Review from "../../../components/review";


function Recipe(props){

    const [recipeInformation , setRecipeInformation] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [page , setPage] = useState('Instructions');
    const [instructions , setInstructions] = useState(null);
    const [videos , setVideos] = useState(null);
    const [similar , setSimilar] = useState(null);

    const router = useRouter();

    function onToggle(page){
        setPage(page);
    }

    const setRecipeInstructions = (recipeInstructions) => {
        setInstructions( recipeInstructions );  
    }

    const setRecipeVideos = (recipeVideos) => {
        setVideos(recipeVideos);
    }

    const setSimilarRecipes = (similarRecipes) => {
        setSimilar( similarRecipes );
    }

    useEffect(async () => {
        const id = router.query.id;
        try{
            const recipeInfo = await getRecipeInformation(id);
            setRecipeInformation(recipeInfo);
            setLoading(false);
        }catch(error){
            setLoading(false);
            setError(error.message);
        }
    },[]);

    if( error ){
        return(
            <Alert type='error' >
                {error}
            </Alert>
        )
    }
    if(loading || !recipeInformation)
        return <div><Loader /><Spinner /></div>

    let variableContent = null;
    if( page === 'Instructions' )
        variableContent = <RecipeInstructions  
                           instructions={instructions}
                           recipeId={recipeInformation.id}
                           setRecipeInstructions={setRecipeInstructions}
                           />
    else if( page === 'Videos' )
        variableContent = <RecipeVideos 
                            videos={videos}
                            recipeId={recipeInformation.id}
                            setRecipeVideos={setRecipeVideos}
                            query={recipeInformation.title}
                          />
    else if( page === 'Similar Recipes' )
        variableContent = <SimilarRecipes 
                            recipeId={recipeInformation.id}
                            recipes={similar}
                            setSimilarRecipes={setSimilarRecipes}
                          />
    else 
        variableContent = <Nutrition 
                            nutrients={recipeInformation.nutrition.nutrients}
                          />

    return(
        <Fragment>
            <RecipeTitle title={recipeInformation.title}/>
            <div className={classes.info} >
                <RecipeImage image={recipeInformation.image}/>
                <RecipeInfo 
                ingredients={recipeInformation.extendedIngredients} 
                summary={recipeInformation.summary}
                recipeId={recipeInformation.id}
                />
            </div>
            <RecipeToggler id={recipeInformation.id} onToggle={onToggle} page={page} />
            <div style={{ width : '100%' , display : 'flex' , justifyContent : 'center'}} >
                {variableContent}
            </div>
            <Review 
            recipeId={recipeInformation.id}
            />
        </Fragment>
    )
}



export default Recipe;