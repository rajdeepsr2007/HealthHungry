import { green } from "@material-ui/core/colors";
import Ingredient from "../../recipes/recipe/ingredient";

export const parseRecipeInstructionStep = (step) => {
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
            stepObjects.push(<span key={Math.random()*100000} > {word}</span>)

        if( id )
            stepObjects.push(<Ingredient key={`ingredient${id}`} ingredient={ingredients[id]} word={ingredients[id].name+remaining} />)
    }

    return stepObjects;
    // return stepObject;
}

export const getRecipeImage = (recipe , size='480x360') => {
    return `https://spoonacular.com/recipeImages/${recipe.id}-${size}.${recipe.imageType}`
}