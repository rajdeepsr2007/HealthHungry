import Logo from "../logo/logo";
import classes from './auth.module.css';
import Info from "./info/info";
import LoginSignup from "./login-signup";
import Loader from "../UI/Loader";
import BMI from "./bmi/bmi";

function AuthForm(props){

    const {loading , bmi , facts } = props;
    const loader = loading ? <Loader /> : null;

    return(
       <div className={classes.auth} >
           <div className={classes.info} >
                <Info facts={facts} />
           </div>
           <div className={classes.form} >
                <h1><Logo /> Welcome To HealthHungry</h1>
                { !bmi ? <LoginSignup {...props} /> : <BMI /> }
                { loader }
           </div>
       </div>
    )
}

export default AuthForm;