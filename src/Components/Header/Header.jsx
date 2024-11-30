import React from 'react';
import './header.css'
import MixerportLogo from '../../assets/mixerport-logo.png';
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';

const Header = () => {
    return (
        <div className='header-ctn'>
            <div className='logo-container'>
                <img src={MixerportLogo} alt="Logo de mixerport" />
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