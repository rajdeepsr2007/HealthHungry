import { Fragment } from 'react';
import classes from './bar.module.css';
export default function Bar(props){
    const {nutrient} = props;
    const bar = (
        <div className={classes.details} >
            <div 
            style={{ 
                width : `${nutrient.percentOfDailyNeeds}%`,
                background : props.good ? 'rgb(90, 128, 160)' : 'rgb(212, 153, 153)'
            }}
            className={[classes.bar,classes.show].join(' ')} >  
                {nutrient.percentOfDailyNeeds.toFixed(1)}%
            </div>
            {nutrient.name}
            {`  (${nutrient.amount} ${nutrient.unit})`}
        </div>
        
    )
    return bar;
}