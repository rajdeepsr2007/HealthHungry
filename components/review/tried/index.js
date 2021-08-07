import Button from "../../inputs/button/button"

export default function Tried(props){

    const { onClick } = props;

    const style={ textAlign : 'center' , marginTop : '5rem' };
    const buttonstyle={ width : '10rem' , display : 'inline' , margin : '0 1rem' };
    return(
        <h2 
        style={style} >
            Did you try it ?
            <Button
            onClick={onClick}
            style={buttonstyle}
            >
                Yes
            </Button>
        </h2>
    )
}