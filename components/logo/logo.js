import Image from 'next/image';
import LogoImage from '../../assets/images/logo.png';

function Logo(props){
    
    const { height , width } = props;
    const imageHeight = height || '50px';
    const imageWidth = width || '50px';

    return(
        <Image
        src={LogoImage}
        height={imageHeight}
        width={imageWidth}
        />
    )
}

export default Logo;