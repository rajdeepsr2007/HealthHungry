import { Slider } from '@material-ui/core';
import classes from './range.module.css';

function Range(props){
    const {controls , onChange } = props;

    const rangeFields = [];
    for( const control in controls ){
        const controlObject = controls[control];
        rangeFields.push(
            <div className={classes.range} >
                <div className={classes.value}>
                    {controlObject.value}
                </div>
                <Slider
                min={controlObject.min}
                max={controlObject.max}
                defaultValue={controlObject.value}
                onChange={(event) => onChange(control , event)}
                />
            </div>
        )
    }
    return(
        rangeFields
    )
}

export default Range;