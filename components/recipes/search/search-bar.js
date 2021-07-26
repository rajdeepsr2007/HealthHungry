import Button from '../../inputs/button/button';
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
            <Button 
            style={{ width : '10rem' , height : '3rem' }} >
                Go
            </Button> 
        </div>   
    )

    return(
        bar
    )
}

export default SearchBar;