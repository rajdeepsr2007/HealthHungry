import classes from './button.module.css';

function Button(props){

    const {onClick , style , disabled } = props;

    return(
        <div 
        onClick={disabled ? () => {} : onClick} 
        className={classes.button}
        style={style}
        >
            {props.children}
        </div>
    )
}

export default Button;