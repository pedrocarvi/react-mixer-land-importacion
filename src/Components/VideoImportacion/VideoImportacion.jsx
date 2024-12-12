import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './videoImportacion.css';

const VideoImportacion = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const videoContainer = document.querySelector('.video-container');
            const videoTop = videoContainer.getBoundingClientRect().top;

            if (videoTop <= window.innerHeight - 100) { // Aparece cuando está 100px dentro de la ventana
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='video-importacion-ctn'>
            <div className="video-subtitle"> ¿Qué hacemos?</div>
            <h2 className='video-title'> Simplificamos tu acceso a <br /> recursos globales </h2>
            <div className={`video-container ${isVisible ? 'active' : ''}`}>
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
