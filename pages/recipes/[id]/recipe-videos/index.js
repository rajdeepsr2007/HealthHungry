import { useState , useEffect } from "react";
import Alert from "../../../../components/feedbacks/alert/alert";
import Loader from "../../../../components/UI/Loader";
import Spinner from "../../../../components/UI/Spinner";
import { getRecipeVideos } from "../../../../util/recipes";
import Videos from "../../../../components/recipes/recipe/videos";

export default function RecipeVideos(props){

    const {videos , query , setRecipeVideos} = props;
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(async () => {
        if( !videos ){
            setLoading(true);
            try{
                const data = await getRecipeVideos(query);
                setLoading(false);
                setRecipeVideos(data.videos);
            }catch(error){
                setLoading(false);
                setError(error.message);
            }
        }
    },[]);

    if( error )
        return <Alert type='error'>{error}</Alert>

    if( loading || !videos )
        return <div><Loader /><Spinner /></div>

    return (
        <Videos videos={videos} />
    )
}

