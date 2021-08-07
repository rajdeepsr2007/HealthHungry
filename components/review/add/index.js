import { Fragment } from "react";
import { useState } from "react";
import StarRating from 'react-star-ratings';
import TextFields from "../../inputs/text-fields/text-fields";
import Button from '../../inputs/button/button';

export default function AddReview( props ){

    const [review , setReview] = useState({
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
        rating : 0
    });

    const onRatingChange = (rating) => {
        const updatedReview = {...review , title : {...review.title} ,  rating };
        setReview( updatedReview );
    }
    const onReviewChange = (control , event) => {
        const updatedReview = { ...review , title : {...review.title} , description : {...review.description} };
        updatedReview[control].value = event.target.value;
        setReview( updatedReview );
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
            />
            <Button
            style={{ width : '20%' , margin : '2rem 0' }}
            >
                Post Review
            </Button>
        </Fragment>
    )
}