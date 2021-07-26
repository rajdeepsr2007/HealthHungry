import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './navigation.module.css';

function Navigation(){

    const router = useRouter();

    const navigationObjects = [
        { label : 'Recipes' , href : '/recipes' }
    ]

    const navigation = (
        <div className={classes.navigation} >
            {
                navigationObjects.map( navObject => {
                    const linkClasses = [classes.link];
                    router.pathname === navObject.href ? linkClasses.push(classes.active) : null;
                    return ( <Link href={navObject.href} passHref>
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