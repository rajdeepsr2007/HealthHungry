import { useState , useEffect } from "react";
import { Fragment } from "react";
import Button from "../../inputs/button/button";
import GoogleIcon from '../../../assets/images/google.png';
import { authControls } from "./initialStateControls";
import { validate } from "./validate";
import TextFields from "../../inputs/text-fields/text-fields";
import Alert from "../../feedbacks/alert/alert";
import Image from "next/image";

function copyControls(controls){

    const updatedControls = {
        login : {
            username : {...controls.login.username},
            password : {...controls.login.password}
        },
        signup : {
            email : {...controls.signup.email},
            username : {...controls.signup.username},
            password : {...controls.signup.password},
            confirm_password : {...controls.signup.confirm_password}
        }
    };

    return updatedControls;
}

function LoginSignup(props){

    const [controls , setControls] = useState(
        authControls
    );

    const [error , setError] = useState(null);
    const [showError , setShowError] = useState(false);

    const {login , loading , onLogin , onSignup , message , success } = props;

    useEffect(() => {
        if( message ){
            setError(message);
            setShowError(true);
        }
    },[message])

    function submitHandler(){
        if( login ){
            for( const control in controls.login ){
                if( controls.login[control].error ){
                    setError( controls.login[control].error );
                    setShowError(true);
                    return;
                }
            }
            const username = controls.login.username.value;
            const password = controls.login.password.value;
            onLogin(username , password);
        }else{
            for( const control in controls.signup ){
                if( controls.signup[control].error ){
                    setError( controls.signup[control].error );
                    setShowError(true);
                    return;
                }
            }
            onSignup( controls.signup );
        }
    }



    function onChange( control , event ){
        const updatedControls = copyControls(controls);
        setShowError(false);
        if( login ){
            updatedControls.login[control].value = event.target.value.trim();
            updatedControls.login[control].error = validate(control , event.target.value.trim());
        }else{
            updatedControls.signup[control].value = event.target.value;
            if( control === 'confirm_password' )
                updatedControls.signup[control].error = validate(control , event.target.value.trim() , updatedControls.signup['password'].value );
            else
                updatedControls.signup[control].error = validate(control , event.target.value.trim());
        }
        setControls(updatedControls);
    }


    let alert = null;
    if( success ){
        alert = (
            <Alert type='success'>
                {success}
            </Alert>
        )
    }
    alert = error && showError ?
            <Alert type='error'>
                {error}
            </Alert> : alert;

    return(
        <Fragment>
                <span style={{ marginBottom : '2rem' }} >Log In Or Signup with your email</span>
                {alert}        
                <TextFields 
                controls={login ? controls.login : controls.signup} 
                onChange={onChange}
                disabled={loading}
                />
                <Button 
                style={{ width : '60%' }}
                onClick={() => submitHandler()}
                disabled={loading}
                >
                Continue
                </Button>
                <Button
                style={{ width : '60%' , margin : '1rem' , background : 'rgb(70, 70, 70)'}}
                onClick={props.switch}
                disabled={loading}
                >
                    { login ? 'Signup' : 'Login' }
                </Button>
                <Button
                style={{ width : '60%', background : 'white' , color : 'grey'}}
                disabled={loading}
                onClick={() => onLogin(null , null , 'google')}
                >
                    <Image src={GoogleIcon} height='20px' width='20px' />
                    <span style={{ margin : '0 1rem' }} >Continue With Google</span>
                </Button>
        </Fragment>
    )
}

export default LoginSignup;