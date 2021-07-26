import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Fragment} from 'react';
import Button from '../components/inputs/button/button';
import Logo from '../components/logo/logo';
import classes from './layout.module.css';
import Navigation from './navigation';

function Layout(props){

    const router = useRouter();
    const showLayout = !(router.route === '/auth') && !(router.route === '/auth/bmi') ;

    const logoutButton = (
        <Button 
        style={{ transform : 'scale(0.9)' }}
        onClick={signOut} >
            Logout
        </Button>
    )

    const sideBar = (
        <div className={classes.sideBar} >
            <div className={classes.logo} ><Logo /> Health Hungry</div>
            <Navigation />
            {logoutButton}
        </div>
    )

    let content = null;
    if( showLayout ){
        content = (
            <Fragment>
                {sideBar}
                <main className={classes.content} >
                    {props.children}
                </main>
            </Fragment>
        )
    }else{
        content = (
            props.children
        )
    }

    return(
       content
    )
}



export default Layout;