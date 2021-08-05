import Image from '../../UI/Images';
import { getIngredientImage } from '../../util/ingredient';
import classes from './badges.module.css';
export default function IngredientBadge(props){
    const {ingredient} = props;
    const badge=(
        <div className={classes.badge} >
            <Image src={getIngredientImage(ingredient)} />
            {ingredient.name}
        </div>
    )
    return badge;
}