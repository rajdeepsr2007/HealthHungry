import { useEffect, useState } from "react";
import { getSession } from 'next-auth/client';
import { signIn } from "next-auth/client";
import { useRouter } from 'next/router';
import AuthForm from "../../components/auth/auth-form";
import { getRandomFoodFacts } from "./util";

async function signupUser( email , username , password ){

    const response = await fetch('/api/auth/signup',{
        method : 'POST',
        body : JSON.stringify({ email , username , password }),
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    const data = await response.json();
    if( !response.ok ){
        throw new Error( data.message || 'Something Went Wrong!' );
    }
    return data;
}

function Auth(props){

    const [isLogin , setIsLogin] = useState(true);
    const [loading , setLoading] = useState(false);
    const [error , setError ] = useState(null);
    const [success , setSuccess] = useState(null);
    const facts = props.facts;
    const router = useRouter();

    useEffect(async () => {
        const session = await getSession();
        if( session )
            router.replace('/recipes');
    },[])


    async function loginHandler( username , password , type ){

        setLoading(true);
        setError(null);
        setSuccess(null);

        if( type === 'google' ){
            signIn('google');
        }else{
            const result = await signIn('credentials',{
                redirect : false ,
                username ,
                password
            });
            setLoading(false);
            if( result.error ){
                setError(result.error);
            }else{
                router.replace(
                    '/'
                )
            }
        }
        
    }

    async function signupHandler( data ){
        setLoading(true);
        setError(null);
        setSuccess(null);
        const { email , username , password } = data;
        try{
            const result = await signupUser( email.value , username.value , password.value );
            setLoading(false);
            setSuccess(result.message);
            switchLogin();
        }catch(error){
            setLoading(false);
            setError(error.message);
        }
    }

    function switchLogin(){
        setIsLogin( prevState => !prevState );
    }

    return(
        <AuthForm
        login={isLogin}
        switch={switchLogin}
        loading={loading}
        onLogin={loginHandler}
        onSignup={signupHandler}
        message={error}
        success={success}
        facts={facts}
        />
    )
}

export async function getStaticProps(){
    try{
        const facts = await getRandomFoodFacts();
        return { props : {facts} , revalidate : (60*60*24) }
    }catch(error){
        return {props:{ facts : [] } , revalidate : (60*60*24)}
    }
}

export default Auth;