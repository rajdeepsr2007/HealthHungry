import { Cancel } from '@material-ui/icons';
import Image from '../../UI/Images';
import { getIngredientImage } from '../../util/ingredient';
import classes from './badges.module.css';
export default function IngredientBadge(props){
    const {ingredient,removable,onRemove} = props;
    const badge=(
        <div onClick={removable?()=>onRemove(ingredient.id):()=>{}} className={classes.badge} >
            <Image src={getIngredientImage(ingredient)} />
            {ingredient.name}
            {removable ? <Cancel style={{marginLeft : '0.5rem'}}/> : null}
        </div>
    )
    return badge;
}