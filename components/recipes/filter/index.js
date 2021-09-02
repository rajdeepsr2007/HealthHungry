import { FilterList } from '@material-ui/icons';
import { Fragment } from 'react';
import { useState } from 'react';
import Modal from '../../UI/Modal/modal';
import classes from './filter.module.css';
import Ranges from '../../inputs/ranges';
import {allNutrients , units , healthy} from './nutrients';

export default function RecipeFilter(props){

    const [showRanges , setShowRanges] = useState(false);
    const [nutrients , setNutrients] = useState(
        allNutrients.map((nutrient , index) => {
            return {
                name : nutrient , 
                value : 0 , 
                checked : false,
                unit : units[index],
                good : healthy[index]
            }
        })
    )

    const [filters , setFilters] = useState(0);

    const button = (
        <div className={classes.button} onClick={()=>setShowRanges(!showRanges)} >
           <FilterList /> Filter Nutrients ({filters})
        </div>
    )

    const onChange = (nutrient , value, checked) => {
        const updatedNutrients = [];
        for( let i = 0 ; i < nutrients.length ; i++ ){
            updatedNutrients.push({
                  ...nutrients[i] ,
                  value : nutrients[i].name === nutrient && !checked ? value : nutrients[i].value,
                  checked : nutrients[i].name === nutrient && checked ? value : nutrients[i].checked
            })
        }

        if( checked ){
            if( value )
                setFilters(filters+1)
            else
                setFilters(filters-1)
        }

        setNutrients(updatedNutrients);
    }

    const modelStyle = {
        height : 'auto',
        width : 'auto',
        padding : '2rem',
        right : '20rem' ,
        width : '84%',
        left : '10%',
        top : '2rem'
    }

    const onModalClose = () => {
        setShowRanges(false);
        props.onChange(nutrients);
    }

    return(
        <Fragment>
            {button}
            <Modal 
            onClick={onModalClose}
            show={showRanges}
            style={modelStyle}
            >
                <Ranges 
                nutrients={nutrients}
                onChange={onChange}
                />
            </Modal>
        </Fragment>
    )
}