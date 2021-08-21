import { ArrowDownward, ArrowUpward, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { useState } from 'react';
import AddReview from './add';
import Reviews from './reviews';
import classes from './reviews.module.css';
export default function Review(props){

    const [ showAddReview , setShowAddReview ] = useState( false );
    return(
        <div className={classes.reviews} >
            <div 
            onClick={()=>setShowAddReview(!showAddReview)}
            className={classes.add} 
            >
                Add Review 
                {showAddReview ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </div>
            <AddReview 
            recipeId={props.recipeId}
            show={showAddReview}
            />
            { !showAddReview ? <div className={classes.allreviews} > <Reviews 
            recipeId={props.recipeId}
            /> </div>: null }
        </div>
    )
}