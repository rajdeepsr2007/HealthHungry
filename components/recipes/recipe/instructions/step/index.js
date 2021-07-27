import { Fragment } from 'react';
import { parseRecipeInstructionStep } from '../../../../util/recipe/recipe-util';
import classes from './step.module.css';

function Step(props){
    const {step , label} = props;
    const stepObject = (
        <div className={classes.step} >
            {/* <b>#{step.number}</b> {step.step} */}
            {parseRecipeInstructionStep(step)}
        </div>
    )
    return(
        stepObject
    )
}

export default Step;