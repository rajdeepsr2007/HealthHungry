import Step from './step';
import classes from './instructions.module.css';
import { Fragment } from 'react';

function Instructions(props){

    const {instructions} = props;

    const items = instructions.map( recipe => {

        const itemTitle = recipe.name ? <h2 className={classes.title}>{recipe.name}</h2> : null;

        const steps = recipe.steps.map( (step , index) => {
            return <Step key={index} step={step} label={index+1} />
        })

        return <div key={Math.random()*10000} className={classes.item} >
            {itemTitle}
            {steps}
        </div>
    });

    return(
        <Fragment>
            <h2 className={classes.title}>Instructions</h2>
            {items}
        </Fragment>
    )
}
export default Instructions;