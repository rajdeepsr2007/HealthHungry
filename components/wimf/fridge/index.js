import { useState } from 'react';
import Image from '../../UI/Images';
import { getIngredientImage } from '../../util/ingredient';
import classes from './fridge.module.css';

const Fridge = (props) => {

    const {ingredients,onRemove} = props;

    const [open1,setOpen1] = useState(true);
    const [open2,setOpen2] = useState(false);

    const onSwitch1 = () => {
        setOpen1(!open1);
    }
    const onSwitch2 = () => {
        setOpen2(!open2);
    }

    const gateClasses1 = [classes.gate];
    const gateClasses2 = [classes.gate];
    open1 ? gateClasses1.push(classes.open) : null;
    open2 ? gateClasses2.push(classes.open) : null;

    let upperCompartment = [];


    if( !ingredients || ingredients.length === 0 ){
        upperCompartment = [0,1].map(i => {
            return <div className={classes.rack} ></div>
        })
    }else{
        let i = 0;
        while( i < ingredients.length ){
            const ingredientsList = [];
            for( let j = 0 ; j < 4 && i < ingredients.length ; i++ , j++ ){
                const id = ingredients[i].id;
                ingredientsList.push(
                    <span key={id} onClick={() => onRemove(id)} >
                        <Image
                        src={`${getIngredientImage(ingredients[i])}`}
                        height='50rem'
                        width='50rem'
                        style={{ borderRadius : '10px', margin : '0.7rem 0.8rem' }}
                        />
                    </span>
                )
            }
            upperCompartment.push(
                <div className={classes.rack} >
                    {ingredientsList}
                </div>
            )
        }   
    }

    let i = 0;
    const lowerCompartment = [];
    if( ingredients.length <= 8 ){
         for( ; i < 6 ; i++ )lowerCompartment.push(<div className={classes.rack} ></div>)
    }else{
        i=8;
        while( i < ingredients.length ){
            const ingredientsList = [];
            for( let j = 0 ; j < 4 && i < ingredients.length ; i++ , j++ ){
                const id = ingredients[i].id;
                ingredientsList.push(
                    <span key={id} onClick={() => onRemove(id)} >
                        <Image
                        src={`${getIngredientImage(ingredients[i])}`}
                        height='50rem'
                        width='50rem'
                        style={{ borderRadius : '10px', margin : '0.7rem 0.8rem' }}
                        />
                    </span>
                )
            }
            lowerCompartment.push(
                <div className={classes.rack} >
                    {ingredientsList}
                </div>
            )
        }   
    }

    return (
        <div className={classes.fridge} >
            <div className={classes.compartment} >
                {upperCompartment}
                <div
                onClick={onSwitch1}
                className={gateClasses1.join(' ')} >
                    <div className={classes.handle} >
                    </div>
                </div>
            </div>
            <div className={classes.compartment} >
                {lowerCompartment}
                <div 
                onClick={onSwitch2}
                className={gateClasses2.join(' ')} >
                    <div className={classes.handle} >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fridge;