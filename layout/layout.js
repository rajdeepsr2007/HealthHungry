import { Fragment } from 'react';
import Logo from '../components/logo/logo';
import classes from './layout.module.css';

function Layout(props){

    const header = (
        <div 
        className={classes.header} 
        >
            <Logo />
        </div>
    )

    const content = (
        <main className={classes.content} >
            {props.children}
        </main>
    )

    return(
        <Fragment>
            {header}
            {content}
        </Fragment>
    )
}

export default Layout;