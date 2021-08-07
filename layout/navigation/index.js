import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect , useState } from 'react';
import { getSession } from 'next-auth/client';
import classes from './navigation.module.css';

function Navigation(){

    const router = useRouter();
    
    const navigationObjects = [
        { label : 'Recipes' , href : '/recipes' },
        { label : 'What\'s in my Fridge ?' , href : '/wimf' }
    ]

    const navigation = (
        <div className={classes.navigation} >
            {
                navigationObjects.map( navObject => {
                    const linkClasses = [classes.link];
                    router.pathname === navObject.href ? linkClasses.push(classes.active) : null;
                    return ( <Link key={navObject.href} href={navObject.href} passHref>
                                <a className={linkClasses.join(' ')}>
                                    {navObject.label}
                                </a>
                            </Link> )
                })
            }
        </div>
    )

    return(
        navigation
    )
}

export default Navigation;