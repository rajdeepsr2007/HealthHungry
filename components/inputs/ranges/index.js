import Range from './range/';

const Ranges = (props) => {

    const {nutrients , onChange} = props;

    return(
        nutrients.map(nutrient => {
            return (
                <Range
                value={nutrient.value}
                label={nutrient.name}
                checked={nutrient.checked}
                onChange={onChange}
                unit={nutrient.unit}
                />
            )
        })
    )
}

export default Ranges;