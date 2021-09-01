import { useRouter } from 'next/router';
import Image from '../../../../UI/Images';
import classes from './card.module.css';
export default function Card(props){
    const {recipe , setIngredients} = props;
    const router = useRouter();
    return(
        <div 
        className={classes.card} >
            <Image
            src={recipe.image}
            onClick={()=>router.push(`/recipes/${recipe.id}`)}
            />
            <div 
            className={classes.info} >
                <h5 onClick={()=>router.push(`/recipes/${recipe.id}`)} >{recipe.title}</h5>
                <div 
                onClick={()=>setIngredients(recipe.usedIngredients)}
                className={classes.label} >
                    Used Ingredient ({recipe.usedIngredientCount})
                </div>
                <div 
                onClick={() => setIngredients(recipe.missedIngredients)}
                className={classes.label} >
                    Missd Ingredient ({recipe.missedIngredientCount})
                </div>
                <div 
                onClick={() => setIngredients(recipe.unusedIngredients)}
                className={classes.label} >
                    Unusd Ingredient ({recipe.unusedIngredients.length})
                </div>
            </div>
        </div>
    )
}