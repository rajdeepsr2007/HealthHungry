import Link from "next/link";
import { useRouter } from "next/router";
import classes from './options.module.css';

function RecipeToggler(props){

    const recipeId = props.id;
    const page = props.page;

    const optionObjects = props.options ? props.options :  [
        { label : 'Instructions' , href : `/recipes/${recipeId}#instructions` },
        { label : 'Videos' , href : `/recipes/${recipeId}#videos` },
        { label : 'Similar Recipes' , href : `/recipes/${recipeId}#similar` },
        { label : 'Nutrition' ,  href : `/recipes/${recipeId}#nutrition`  }
    ];

    const router = useRouter();

    const options = (
        <div className={classes.options} >
            {
                optionObjects.map( optionObject => {
                    const linkClasses = [classes.link];
                    page === optionObject.label ? linkClasses.push(classes.active) : null
                    return <Link key={optionObject.href} href={optionObject.href ? optionObject.href : router.asPath } passHref>
                            <a className={linkClasses.join(' ')} onClick={() => props.onToggle(optionObject.label)} >
                                {optionObject.label}
                            </a>
                    </Link>
                })
            }
        </div>
    )
    return(
        options
    )
}

export default RecipeToggler;