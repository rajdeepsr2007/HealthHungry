import { useEffect ,useState } from "react";
import Loader from "../../UI/Loader";
import Spinner from "../../UI/Spinner";
import Alert from '../../feedbacks/alert/alert';
import { getRecipeReviews } from '../../util/review/index';
import ReviewCard from "./review";

export default function Reviews(props){

    const [reviews,setReviews] = useState(reviews);
    const [error , setError] = useState(null);

    console.log(props.recipeId);

    useEffect(async () => {
        if(!reviews){
            setError(null);
            try{
                const data = await getRecipeReviews(
                    props.recipeId
                )
                setReviews(data.reviews);
            }catch(error){
                setError(error.message);
            }
        }
    },[])

    if(error)
        return <Alert type='error'>{error}</Alert>
    
    if(!reviews)
        return <div><Loader /><Spinner /></div>

    return(
            
                reviews.map( review => {
                    return <ReviewCard review={review} />
                })
            
    )
}
