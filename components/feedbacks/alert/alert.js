import classes from './alert.module.css';

function Alert(props){

    const {type} = props;

    const alertClasses = [classes.alert];

    if( type === 'error' )
        alertClasses.push(classes.error)
    else
        alertClasses.push(classes.success);

    const alert = (
        <div className={ alertClasses.join(' ') } >
            {props.children}
        </div>
    )
    
    return(
        alert
    )
}

export default Alert;