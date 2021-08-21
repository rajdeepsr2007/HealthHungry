import Rating from 'react-star-ratings';
const StarRating  = (props) => {
    let rating = null;
    const starDimension = props.size === 'big' ? '50px' : '25px';
    const starSpacing = props.size === 'big' ? '5px' : '2px';
    if( props.edit ){
        rating = (
            <Rating
            rating={parseFloat(props.rating)}
            starRatedColor="yellow"
            changeRating={props.changeRating}
            numberOfStars={5}
            isAggregateRating={true}
            starDimension={starDimension}
            starSpacing={starSpacing}
            />
        )
    }else{
        rating = (
            <Rating
            rating={parseFloat(props.rating)}
            starRatedColor="yellow"
            numberOfStars={5}
            isSelectable={false}
            isAggregateRating={true}
            starDimension={starDimension}
            starSpacing={starSpacing}
            />
        )
    }

    return rating;
} 
export default StarRating;