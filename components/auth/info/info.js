import { useEffect, useState } from 'react';
import Spinner from '../../UI/Spinner';
import classes from './info.module.css';

function Info(props){

    const [facts , setFacts] = useState({ 
        current : 0 ,
        facts : props.facts
    });

    const [factChangeInterval , setFactChangeInterval] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedFacts = {...facts, current : (facts.current + 1)%facts.facts.length };
            setFacts( updatedFacts );
        },5000);
        setFactChangeInterval(interval);
        return () => {
            if( factChangeInterval )
                clearInterval(factChangeInterval)
        }
    },[])

    if( facts.facts.length < 1 ){
        return <Spinner />
    }

    const content = (
        <div className={classes.info}>
            <div className={[classes.fact,classes.show].join(' ')} >
                {`"${facts.facts[facts.current].text}"`}
            </div>
        </div>
    )

    return(
       content
    )
}

export default Info;