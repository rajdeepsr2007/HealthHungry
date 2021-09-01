import { useEffect, useState } from 'react';
import RecipeToggler from '../../inputs/toggler/options toggler';
import Fridge from '../fridge';
import classes from './recipes.module.css';
import { getRecipesByIngredients } from '../util';
import Cards from './cards';

const recipes = (props) => {

    const [page,setPage] = useState('Maximize Used Ingredients');
    const [error,setError] = useState(null);
    const {ingredients} = props;
    const [loading , setLoading] = useState(false);
    const [recipes , setRecipes] = useState([]);

    const options = [
        { label : 'Maximize Used Ingredients' , href : '/wimf#maui' },
        { label : 'Minimize Unused Ingredients' , href : '/wimf#miui' }
    ]

    useEffect(async () => {
        setError(null);
        setLoading(true);
        try{
            const sortOption = page === 'Maximize Used Ingredients' ? 'max-used-ingredients' : 'min-missing-ingredients';
            const data = await getRecipesByIngredients(ingredients,10,sortOption);
            setRecipes(data);
        }catch(error){
            setError(error.message);
        }
        setLoading(false);
    },[page , ingredients])

    return(
        <div className={classes.container} >
            <Fridge 
            ingredients={ingredients}
            onRemove={props.onRemove}
            />
            <div className={classes.recipes} >
                <RecipeToggler
                options={options}
                onToggle={(page) => setPage(page)}
                page={page}
                />
                <Cards
                recipes={recipes}
                loading={loading}
                error={error}
                />
            </div>
        </div>
    )
}

export default recipes;