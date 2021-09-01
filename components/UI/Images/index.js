import { Fragment, useState } from "react";
import ImageLoader from "./Image Loader";

export default function Image(props){
    const {src , height , width} = props;
    const [loaded , setLoaded] = useState(false);
    return(
        <Fragment>
            {!loaded ? <ImageLoader height={height} width={width} /> : null }
            <img 
            onClick={props.onClick}  
            style={loaded ? props.style : { display : 'none' }} 
            src={src} 
            height={height} 
            width={width} 
            onLoad={() => setLoaded(true)}
            />   
        </Fragment>
    );
}