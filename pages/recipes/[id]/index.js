import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Loader from "../../../components/UI/Loader";
import Spinner from "../../../components/UI/Spinner";
import { getRecipeInformation } from "../util";
import Alert from "../../../components/feedbacks/alert/alert";
import RecipeTitle from "../../../components/recipes/recipe/title/recipe-title";
import RecipeImage from "../../../components/recipes/recipe/image/recipe-image";
import RecipeToggler from "../../../components/recipes/options toggler";
import RecipeInstructions from "./recipe-instructions";
import RecipeVideos from "./recipe-videos";
import SimilarRecipes from "./recipe-similar";

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
    else
        variableContent = <SimilarRecipes 
                            recipeId={recipeInformation.id}
                            recipes={similar}
                            setSimilarRecipes={setSimilarRecipes}
                          />
             

    return(
        <Fragment>
            <RecipeTitle title={recipeInformation.title}/>
            <div style={{  width : '100%' , padding : '2rem' }} >
                <RecipeImage image={recipeInformation.image}/>
            </div>
            <RecipeToggler id={recipeInformation.id} onToggle={onToggle} />
            {variableContent}
        </Fragment>
    )
}



export default Recipe;