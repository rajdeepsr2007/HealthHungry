import baseURL from "../../../baseURL";

async function handler( req , res ){
    if( req.method !== 'POST' ){
        return;
    }
    const { email , username , password } = req.body;
    const response = await fetch(baseURL + '/api/auth/signup',{
        method : 'POST' ,
        body : JSON.stringify({ email , username , password }),
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    const data = await response.json();
    if( !response.ok ){
        res.status(422).json(data);
        return;
    }

    res.status(200).json(data);
    return;
}

export default handler;