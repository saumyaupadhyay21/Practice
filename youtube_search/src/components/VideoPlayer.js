import React from 'react';

const VideoPlayer = (props) =>{

    if (!props.selectedVideo){
        return <div>Loading...</div>
    }

    const videoId = props.selectedVideo.id.videoId;

    const videoSource = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSource}></iframe></div>
            <div>
                <div className="ui medium header">
                    {props.selectedVideo.snippet.title}
                </div>
                <div>
                    <p>
                        {props.selectedVideo.snippet.description}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default VideoPlayer