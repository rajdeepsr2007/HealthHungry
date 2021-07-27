import { Fragment } from "react";

function RecipeTitle(props){
    const {title} = props;
    const style={
        width : '100%',
        background : 'rgb(84, 146, 84)',
        color : 'white',
        textAlign : 'center',
        padding : '1rem',
        margin : '0',
        fontWeight : '200'
    }
    return(
        <h2 style={style}>{title}</h2>
    )
}

export default RecipeTitle;