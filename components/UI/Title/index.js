import classes from './title.module.css';

export default function Title(props){
    return(
        <h2 className={classes.title} >{props.children}</h2>
    )
}