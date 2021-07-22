export const validate = (control , value , extra) => {
    if( value === '' ){
        return 'Fields cannot be empty';
    } 
    if( control === 'email' ){
        if( !value.includes('@') ){
            return 'Invalid email address'
        }
    }
    if( control === 'password' ){
        if( value.length < 8 ){
            return 'Password altleast 8 characters'
        }
    }
    if( control === 'confirm_password' ){
        if( value !== extra ){
            return 'Passwords don\'t match'
        }
    }
    return '';
}