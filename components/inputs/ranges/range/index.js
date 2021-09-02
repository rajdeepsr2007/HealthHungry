import {Fragment} from 'react';
import { Checkbox } from '@material-ui/core';
import classes from './range.module.css';

const Range = (props) => {

    const { value , label , onChange , checked , unit } = props;

    return(
        <Fragment>
            <div className={classes.range} >
                <input
                type='range'
                value={value}
                min={0}
                max={1000}
                onChange={(event)=>onChange(
                    label , event.target.value
                )}
                className={classes['range-input']}
                />
                <span>
                    <div>
                        <span>
                            <b>{label}</b>
                        </span>
                        <span>
                            <b>{value} {unit}</b>
                        </span>
                    </div>
                    <Checkbox
                    checked={checked}
                    color="primary"
                    onChange={(event)=>onChange(label , event.target.checked , true)}
                    />
                </span>
            </div>
        </Fragment>
    )
}

export default Range;