import classes from './text-fields.module.css';

function TextFields(props){

    const {controls , onChange } = props;
    const inputFields = [];

    for( const control in controls ){
        const inputObject = controls[control];
        let inputField = null;

        if( inputObject.type === 'text' || inputObject.type === 'password' || inputObject.type === 'email' ){
            inputField = (
                <input 
                key={control}
                type={inputObject.type}
                value={inputObject.value}
                placeholder={inputObject.placeholder}
                onChange={(event) => onChange(control , event)} 
                disabled={props.disabled}
                />
            );
        }else{
            inputField = (
                <textarea 
                key={control}
                value={inputObject.value}
                placeholder={inputObject.placeholder}
                onChange={(event) => onChange(control , event)} 
                disabled={props.disabled}
                cols={10}
                rows={3}
                />
            );
        }
        inputFields.push( inputField );
    }

    return(
        <div className={classes.fields} >
            {inputFields}
        </div>
    )
}

export default TextFields;