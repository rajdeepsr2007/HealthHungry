import Video from './video';
import classes from './videos.module.css';

export default function(props){
    const {videos} = props;
    const videoObjects=videos.map(video => {
        return <Video video={video}/>
    })
    return (
        <div className={classes.videos} >
            {videoObjects}
        </div>
    )
}