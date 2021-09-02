import { Button } from '@material-ui/core';
import React , {Fragment} from 'react';
import Backdrop from './Backdrop/backdrop';
import classes from './modal.module.css';

const Modal = (props) => {

    const modalClasses = [classes.modal];

    if( !props.show ){
        modalClasses.push(classes.hide);
    }else{
        modalClasses.push(classes.show)
    }

    return (
            <Fragment>
                <Backdrop show={props.show} onClick={props.onClick}/>
                <div style={props.style} className={modalClasses.join(' ')}>
                    {props.children}
                </div>
            </Fragment>
            )
}

export default Modal;