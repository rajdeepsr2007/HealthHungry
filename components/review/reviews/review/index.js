import StarRating from '../../../UI/StarRating/star-rating';
import User from '../../../user';
import Image from '../../../UI/Images';
import baseURL from '../../../../baseURL';
import { formatDate } from '../../../util/date';
import classes from './review.module.css';

export default function ReviewCard(props){
    const {review} = props;
    return(
        <div className={classes.card} >
            <h5>
                <div className={classes.header}>
                    <User user={review.user} />
                    <StarRating
                    rating={parseFloat(review.rating)}
                    />
                </div>
                <span className={classes.date} >
                    {formatDate(
                        review.createdAt
                    )}
                </span>
            </h5> 
            <h5 className={classes.title} >
                {review.title}
            </h5>  
            <span className={classes.description} >
                {review.description}
            </span>
            <div className={classes.images} onClick={() => props.onShowGallery(review._id)} >
                {
                    review.images.map(image => {
                        return <Image
                                src={`${baseURL}${image}`}
                                height='80rem'
                                width='90rem'
                                key={image}
                                />
                    })
                }
            </div>  
        </div>
    )
}