import { capitalize } from '@material-ui/core';
import router from 'next/router';
import { getIngredientImage } from '../../util/ingredient';
import classes from './autocomplete-box.module.css';

function AutoComplete(props){

    const {items , show } = props.autoComplete;
    const {type} = props;

    let itemNames = null;

    switch( type ){
        case 'Ingredients' : 
            itemNames = items.map( item => {
                return (<div 
                    key={item.id}
                    onClick={() => {}}
                    className={classes.item} >
                        <img src={getIngredientImage(item)} height='30px' width='30px' />
                        <div className={classes.name} >{capitalize(item.name)}</div>
                    </div>)
            });
            break;
        default :
            itemNames = items.map( item => {
                return (<div 
                key={item.id}
                onClick={() => router.replace(`/recipes/${item.id}`)}
                className={classes.item} >
                    <img src={`https://spoonacular.com/recipeImages/${item.id}-90x90.${item.imageType}`} height='30px' width='30px' />
                    <div className={classes.name} >{capitalize(item.title)}</div>
                </div>)
            });

    }

    const boxClasses = [classes.box];
    if( !show )
        boxClasses.push(classes.hide)
    const box = (
        <div className={boxClasses.join(' ')} style={type ? { top : '8rem' , left : '25%' }  : null} >
            {itemNames}
        </div>
    )
    return(
        box
    )
}

export default AutoComplete;