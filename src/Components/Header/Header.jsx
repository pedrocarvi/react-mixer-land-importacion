import React from 'react';
import './header.css'
import MixerportLogoWhite from '../../assets/mixerport-logo-white.png';
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';

const Header = () => {
    return (
        <div className='header-ctn'>
            <div className='logo-container'>
                <img src={MixerportLogoWhite} alt="Logo de mixerport" />
            </div>
            <div className='menu-container'>
                <ul>
                    <li>Inicio</li>
                    <li>Destacados</li>
                    <li>Cómo comprar</li>
                    <li>Reseñas</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <PrimaryButton title="Asesorate ahora"/>
        </div>
    );
};


export default Header;