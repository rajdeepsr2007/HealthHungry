export const authControls = {
    login : {
        username : {
            type : 'text',
            value : '',
            required : true ,
            placeholder : 'Email or Username',
            error : 'Field cannot be empty'
        },
        password : {
            type : 'password',
            value : '',
            required : true ,
            placeholder : 'Password',
            error : 'Field cannot be empty'

        }
    },
    signup : {
        email : {
            type : 'email',
            value : '',
            required : true ,
            placeholder : 'Email',
            error : 'Field cannot be empty'

        },
        username : {
            type : 'text',
            value : '',
            required : true ,
            placeholder : 'Username',
            error : 'Field cannot be empty'

        },
        password : {
            type : 'password',
            value : '',
            required : true ,
            placeholder : 'Password',
            error : 'Field cannot be empty'

        },
        confirm_password : {
            type : 'password',
            value : '',
            required : true ,
            placeholder : 'Confirm Password',
            error : 'Field cannot be empty'

        }
    }
};