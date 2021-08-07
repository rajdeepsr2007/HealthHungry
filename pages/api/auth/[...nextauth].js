import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import baseURL from "../../../baseURL";

export default NextAuth({

    session : {
        jwt : true
    },

    callbacks : {
        async signIn( user , account , profile ){
            
            if( account.type === 'credentials' )
                return true;
            
            if( account.provider !== 'google' || !profile.verified_email )
                return false;

            const username = profile.name;
            const email = user.email;
            const image = user.image;

            const response = await fetch(baseURL + '/api/auth/google',{
                method : 'POST',
                body : JSON.stringify({ username , email , image }),
                headers : {
                    'Content-Type' : 'application/json'
                }
            });
            if( response.ok )
                return true;
            return false;          
        }
    },

    providers : [
        Providers.Credentials({
            async authorize(credentials){
                const { username , password } = credentials;
                const response = await fetch(baseURL + '/api/auth/login',{
                    method : 'POST',
                    body : JSON.stringify({ username , password }),
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                });
                const data = await response.json();
                if( !response.ok ){
                    throw new Error(data.message || 'Invalid Credentials');
                }
                const { user } = data;
                return { _id : user._id , image : user.image };
            }
        }),

        Providers.Google({
            clientId : '133977425409-bqtifbf778k1h9mhbj1mn0gob1jjek12.apps.googleusercontent.com',
            clientSecret : 'ocfFKVx3o06dOQQE17ZJpAEm'
        })
    ]
});