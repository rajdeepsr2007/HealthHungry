export const formatVideoViews = (views) => {
    if( views < 1000 )
        return views;
    if( views < 1000000 )
        return parseFloat((views/1000)).toFixed(1) + 'k'
    if( views < 1000000000 )
        return parseFloat((views/1000000)).toFixed(1) + 'm'
    return parseFloat((views/1000000000)).toFixed(1) + 'b'
}

export const formatVideoLength = (length) => {
    let hr , min , sec , time;

    hr = Math.floor(length/3600);
    min = Math.floor((length%3600)/60);
    sec = length%60;

    hr = hr > 0 ? hr < 10 ? '0'+hr+' : ' : hr+' : ' : '';
    min = min > 0 ? min < 10 ? '0' + min : min : '00';
    sec = sec > 0 ? sec < 10 ? '0' + sec : sec : '00';

    return `${hr}${min} : ${sec}`;
}