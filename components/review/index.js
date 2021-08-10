import { useState } from 'react';
import AddReview from './add';
import classes from './reviews.module.css';
import Tried from './tried';
export default function Review(props){

    const [ showAddReview , setShowAddReview ] = useState( false );

    return(
        <div className={classes.reviews} >
            { !showAddReview ? <Tried onClick={() => setShowAddReview(true)} /> : <AddReview recipeId={props.recipeId} />}
        </div>
    )
}