import Image from '../../../UI/Images';
import { getRecipeImage } from '../../../util/recipe/recipe-util';
import Link from 'next/link';
import classes from './recipe-cards.module.css';
import { RoomService, Timer } from '@material-ui/icons';

const formatTime = (time) => {
    let hr = '' , min = '';
    hr = Math.floor(time/60);
    min = time%60;
    hr = hr < 10 ? '0'+hr : hr;
    min = min < 10 ? '0' + min : min;
    return `${hr}hr : ${min}m`;
}

export default function RecipeCard(props){
    const {recipe} = props;
    return(
        <Link href={`/recipes/${recipe.id}`}>
            <div className={classes.card} >
                <div className={classes.image} >
                    <h4>{recipe.title}</h4>
                    <Image 
                    src={getRecipeImage(recipe)} 
                    height='100%'
                    width='100%'
                    />
                </div>
                <div className={classes.info} >
                    <span><Timer /> {formatTime(recipe.readyInMinutes)}</span>
                    <span><RoomService/> {recipe.servings}</span>
                </div>
            </div>
        </Link>
    )
}