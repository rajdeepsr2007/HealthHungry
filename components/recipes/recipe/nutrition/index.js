import Bar from '../../../UI/Bar';
import classes from './nutrients.module.css';

export default function Nutrition(props){
    const {nutrients} = props;

    const goodNutrients = [];
    const badNutrients = [];
    for(let i=0 ; i < 9; i++)
        badNutrients.push(nutrients[i]);
    for(let i=9 ; i < nutrients.length ; i++ )
        goodNutrients.push(nutrients[i]);


    const nutrientsCard = (
        <div className={classes.nutrients} >
            <div className={classes.bad} >
                <h2>Limit These</h2>
                {badNutrients.map(nutrient =>{
                    return <Bar key={nutrient.name} nutrient={nutrient} />
                })}
            </div>
            <div className={classes.good} >
                <h2>Good For Your Health</h2>
                {
                 goodNutrients.map(nutrient => {
                     return <Bar key={nutrient.name} nutrient={nutrient} good />
                 })
                }
            </div>
        </div>
    )

    console.log(nutrients);
    return (
        nutrientsCard
    )
}