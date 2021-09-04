import Video from './video';
import classes from './videos.module.css';

export default function Videos(props){
    const {videos} = props;
    const videoObjects=videos.map(video => {
        return <Video key={Math.random()*1000000} video={video}/>
    })
    return (
        <div className={classes.videos} >
            {videoObjects}
        </div>
    )
}
