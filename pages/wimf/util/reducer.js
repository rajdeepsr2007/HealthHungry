const initialState = [];
export default function reducer( state=initialState , action ){
    let updatedIngredients = [];
    switch( action.type ){
        case 'ADD' :
            for( const ingredient of state ){
                // if( ingredient.id === action.ingredient.id )
                //     return state;
                updatedIngredients.push({
                    ...ingredient
                })
            }
            updatedIngredients.push(action.ingredient);
            return updatedIngredients;

        case 'REMOVE' :
            updatedIngredients = state.filter(
                ingredient => ingredient.id !== action.id
            )
            return updatedIngredients;
        default :
            return state;
    }
}