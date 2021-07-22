import classes from './text-fields.module.css';

function TextFields(props){

    const {controls , onChange } = props;
    const inputFields = [];

    for( const control in controls ){
        const inputObject = controls[control];
        const inputField = (
            <input 
            key={control}
            type={inputObject.type}
            value={inputObject.value}
            placeholder={inputObject.placeholder}
            onChange={(event) => onChange(control , event)} 
            disabled={props.disabled}
            />
        );
        inputFields.push( inputField );
    }

    return(
        <div className={classes.fields} >
            {inputFields}
        </div>
    )
}

export default TextFields;