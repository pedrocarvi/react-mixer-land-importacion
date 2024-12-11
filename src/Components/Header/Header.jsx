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
                    <a href="#destacados">  <li> Destacados </li> </a>
                    <a href="#guia">  <li> Cómo comprar</li> </a>
                    <a href="#resenas"> <li> Reseñas</li> </a>
                    <a href="#faqs"> <li> FAQs</li> </a>
                </ul>
            </div>
            <PrimaryButton title="Asesorate ahora" link="#form"/>
        </div>
    );
};


export default Header;