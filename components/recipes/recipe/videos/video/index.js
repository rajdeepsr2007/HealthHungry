import router from 'next/router';
import Button from '../../../../inputs/button/button';
import Image from '../../../../UI/Images';
import { formatVideoLength, formatVideoViews } from '../../../../util/video/video-util';
import classes from './video.module.css';

export default function Video(props){
    const {video} = props;
    return(
        <div className={classes.video} >
            <Image src={video.thumbnail} />
            <div className={classes.info} >
                <span className={classes.title} >{video.title}</span>
                <span className={classes.views} >{formatVideoViews(video.views)} views</span>
                <span>
                    <span className={classes.length} >{formatVideoLength(video.length)}</span>
                    <Button 
                    onClick={() => router.push(`https://youtube.com/watch?v=${video.youTubeId}`)}
                    style={{ 
                        display : 'inline' , 
                        padding : '0.5rem 1rem' ,
                        margin : '0 1rem' , 
                        background : 'rgb(165, 39, 39)'
                    }} >Youtube</Button>
                </span>
            </div>
        </div>
    )
}