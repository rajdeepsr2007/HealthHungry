import classes from './image-loader.module.css';

export default function ImageLoader(props){
    const {height , width} = props;
    const imageLoader = (
        <div height={height} width={width} >
            <div className={classes.loader}>
            </div>
        </div>
    )
    return imageLoader;
}