import React from 'react';
import ReactPlayer from 'react-player';
import './videoImportacion.css'; 

const VideoImportacion = () => {
    return (
        <div className='video-importacion-ctn'>
            <div className="video-container">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=at6IsJqOVLE"
                    width="100%"
                    height="100%"
                    controls
                />
            </div>
        </div>
    );
};

export default VideoImportacion;
