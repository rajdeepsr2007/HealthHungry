import { Fragment } from "react";
import { useState } from "react";
import StarRating from 'react-star-ratings';
import TextFields from "../../inputs/text-fields/text-fields";
import Button from '../../inputs/button/button';
import ImagesInput from "../../inputs/images input/images-input";
import { addReview } from "../../util/review";
import Alert from '../../feedbacks/alert/alert';
import {useSession} from 'next-auth/client';

export default function AddReview( props ){

    const [review , setReview] = useState({
        recipe : props.recipeId,
        title : {
            type : 'text',
            placeholder : 'Title',
            value : ''
        },
        description : {
            type : 'textarea',
            placeholder : 'Review...',
            value : ''
        },
        rating : 0,
        images : []
    });

    const [session] = useSession();

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const onRatingChange = (rating) => {
        setError(null);
        const updatedReview = {...review , title : {...review.title} ,  rating };
        setReview( updatedReview );
    }
    const onReviewChange = (control , event) => {
        setError(null);
        const updatedReview = { ...review , title : {...review.title} , description : {...review.description} };
        updatedReview[control].value = event.target.value;
        setReview( updatedReview );
    }
    const onImagesChange = (images) => {
        setError(null);
        const updatedReview = {...review , title : {...review.title} };
        updatedReview.images = images;
        setReview(updatedReview);
    }
    const addReviewHandler = async () => {
        setLoading(true);
        setError(null);
        try{
            console.log(session);
            const data = await addReview(review,session.user.email);
            setLoading(false);
        }catch(error){
            setLoading(false);
            setError(error.message);
        }      
    }

    return(
        <Fragment>
            <StarRating
            rating={review.rating}
            starRatedColor="yellow"
            changeRating={onRatingChange}
            numberOfStars={5}
            />
            <TextFields
            controls={{ title : review.title, description : review.description }}
            onChange={onReviewChange}
            disabled={loading}
            />
            <ImagesInput 
            onChange={onImagesChange}
            />
            { error ? <Alert type='error'>{error}</Alert> : null }
            <Button
            style={{ width : '40%' , margin : '2rem 0' }}
            onClick={addReviewHandler}
            disabled={loading}
            >
                Post Review
            </Button>
        </Fragment>
    )
}