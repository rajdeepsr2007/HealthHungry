function Ingredient(props){
    const {ingredient , word} = props;
    const style={color : 'green' , cursor : 'pointer'}
    return(
        <b style={style} > {word ? word : ingredient.name}</b>
    )
}
export default Ingredient;