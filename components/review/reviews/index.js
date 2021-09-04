import { useEffect ,useState } from "react";
import Loader from "../../UI/Loader";
import Spinner from "../../UI/Spinner";
import Alert from '../../feedbacks/alert/alert';
import { getRecipeReviews } from '../../util/review/index';
import ReviewCard from "./review";
import { Fragment } from "react";
import ImageSlider from '../../UI/Image Silder/image-slider';
import baseURL from "../../../baseURL";

export default function Reviews(props){

    const [reviews,setReviews] = useState(reviews);
    const [error , setError] = useState(null);
    const [gallery , setGallery] = useState(false);

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

    const onShowGallery = (reviewId) => {
        let images;
        const review = reviews.find( review => review._id === reviewId );
        images = review.images;
        setGallery(images);
    }

    if(error)
        return <Alert type='error'>{error}</Alert>
    
    if(!reviews)
        return <div><Loader /><Spinner /></div>

    return(
            <Fragment>
                {reviews.map( review => {
                    return <ReviewCard key={review._id} review={review} onShowGallery={onShowGallery} />
                })}
                { 
                    gallery ? <ImageSlider
                    images={gallery.map(image => `${baseURL}${image}`)}
                    onClose={() => setGallery(null)}
                    /> : null
                }
            </Fragment>     
    )
}
