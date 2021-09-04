import { useState } from 'react';
import IngredientsBadge from '../../../Badge/ingredients/ingredients';
import Card from './card';
import Modal from '../../../UI/Modal/modal';
import Alert from '../../../feedbacks/alert/alert';
import Loader from '../../../UI/Loader/index';
import classes from './cards.module.css';
export default function Cards(props){

    const {recipes} = props;
    const [ingredients , setIngredients] = useState(null);

    let Ingredients = ingredients ? <Modal 
    
    onClick={() => setIngredients(null)} show ><IngredientsBadge ingredients={ingredients} /></Modal> : null;

    if( props.error )
        return <Alert type='error'>{props.error}</Alert>

    if( props.loading )
        return <Loader />

    return(
        <div className={classes.cards} >
            {
                recipes && recipes.length > 0 ? recipes.map(recipe => {
                    return <Card 
                           key={recipe.id}
                           recipe={recipe}
                           setIngredients={setIngredients}
                           />
                }) : null
            }
            {Ingredients}
        </div>
    )
}