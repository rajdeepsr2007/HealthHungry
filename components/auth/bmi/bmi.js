import { Fragment, useState } from "react";
// import TextFields from "../../inputs/text-fields/text-fields";
// import bmiControls from './initialControls';

// function copyControls(controls){
//     const updatedControls = {};
//     for( const control in controls ){
//         updatedControls[control] = {...controls[control]}
//     }
//     return updatedControls;
// }

function BMI(){

    // const [controls , setControls] = useState(bmiControls);

    // function onChange(control , event){
    //     const updatedControls = copyControls(controls);
    //     updatedControls[control].value = event.target.value;
    //     console.log(event.target.value);
    //     setControls(updatedControls);
    // }

    return(
        <Fragment>
            <span>Calculate your BMI, so that you can decide goals with ease</span>
        </Fragment>
    )
}

export default BMI;