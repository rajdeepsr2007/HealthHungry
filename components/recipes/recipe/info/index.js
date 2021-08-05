import classes from './info.module.css';
import { useEffect, useState } from "react";
import RecipeToggler from "../../../inputs/toggler/options toggler";
import IngredientsBadge from '../../../Badge/ingredients/ingredients';
import { getRecipeTaste } from '../../../../pages/recipes/util';
import { Fragment } from 'react';

export default function RecipeInfo(props){

    const [page , setPage] = useState('Ingredients');
    const {ingredients , summary , recipeId} = props;
    const [taste , setTaste] = useState(null);

    useEffect(async () => {
        if( !taste ){
            try{
                const data = await getRecipeTaste(recipeId);
                setTaste(data);
            }catch(error){
                console.log(error);
            }
        }
    },[])

    const options = [
       { label : 'Ingredients' },
       { label : 'Summary' },
    ]

    const onToggle = (page) => {
        setPage(page);
    }

    let variableContent;
    let tasteElement = null;
    switch( page ){
        case 'Ingredients' : 
            variableContent = <IngredientsBadge ingredients={ingredients} />
            break;
        case 'Summary' :
            variableContent = (
                <Fragment>
                    <div 
                    dangerouslySetInnerHTML={{ __html : summary }}
                    className={classes.summary}
                    ></div>
                    { tasteElement }
                </Fragment>
            )
            break;
        default :
            variableContent = null;
    }

    return(
        <div className={classes.info}>
            <RecipeToggler
            options={options}
            page={page}
            onToggle={onToggle}
            />
            {variableContent}
        </div>
    )
}
