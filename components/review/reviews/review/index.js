import StarRating from '../../../UI/StarRating/star-rating';
import User from '../../../user';
import classes from './review.module.css';
export default function ReviewCard(props){
    const {review} = props;
    return(
        <div className={classes.card} >
            <h5>
                <User user={review.user} />
                <StarRating
                rating={parseFloat(review.rating)}
                />
            </h5> 
            <h5 className={classes.title} >
                {review.title}
            </h5>  
            <span>
                {review.description}
            </span>
        </div>
    )
}