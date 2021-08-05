import Button from '../button/button';
import classes from './search-bar.module.css';

function SearchBar(props){

    const bar = (
        <div className={classes.bar} >
            <input
            type="text"
            value={props.value}
            placeholder='Search'
            onChange={props.onSearchChange}
            onBlur={() => props.showHideAutoComplete(false)}
            onFocus={() => props.showHideAutoComplete(true)}
            />
            {props.showSearchButton ? <Button 
            style={{ width : '10rem' , height : '3rem' }} >
                Go
            </Button> : null} 
        </div>   
    )

    return(
        bar
    )
}

export default SearchBar;