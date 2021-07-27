import { green } from "@material-ui/core/colors";

export const parseRecipeInstructionStep = (step) => {
    console.log(step);
    const ingredients = {};
    const equipments = {};

    let parsedStep = step.step;

    if( step.ingredients )
    for( const ingredient of step.ingredients ){
        ingredients[ingredient.id] = ingredient;
        parsedStep = parsedStep.replaceAll(ingredient.name , ingredient.id);
    }

    // if( step.equipment )
    // for( const eqpmnt of step.equipment ){
    //     equipments[eqpmnt.name] = eqpmnt;
    //     parsedStep = parsedStep.replaceAll(eqpmnt.name , eqpmnt.id);
    // }

    const stepWords = parsedStep.split(' ');
    const stepObjects = [<b>#{step.number}</b>];
    for( const word of stepWords ){
        let id = null , remaining='';
        if( ingredients[word] )
            id = word;
        else if( ingredients[word.substr(0 , word.length - 1)] ){
            id = word.substr(0 , word.length - 1);
            remaining = word[word.length-1];
        }
        else if( ingredients[word.substr(0 , word.length - 2)] ){
            id = word.substr(0 , word.length - 2);
            remaining = word[word.length-2] + word[word.length-1];
        }
        else
            stepObjects.push(<span> {word}</span>)

        if( id )
            stepObjects.push(<b style={{ color : 'green' , cursor : 'pointer' }} > {ingredients[id].name}{remaining}</b>)
    }

    return stepObjects;
    // return stepObject;
}