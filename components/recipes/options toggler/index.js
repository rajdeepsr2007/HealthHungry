import Link from "next/link";
import { useRouter } from "next/router";
import classes from './options.module.css';

function RecipeToggler(props){

    const recipeId = props.id;

    const optionObjects = [
        { label : 'Instructions' , href : `/recipes/${recipeId}#instructions` },
        { label : 'Videos' , href : `/recipes/${recipeId}#videos` },
        { label : 'Similar Recipes' , href : `/recipes/${recipeId}#similar` },
    ]

    const router = useRouter();

    const options = (
        <div className={classes.options} >
            {
                optionObjects.map( optionObject => {
                    const linkClasses = [classes.link];
                    router.asPath === optionObject.href ? linkClasses.push(classes.active) : null
                    return <Link key={optionObject.href} href={optionObject.href} passHref>
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