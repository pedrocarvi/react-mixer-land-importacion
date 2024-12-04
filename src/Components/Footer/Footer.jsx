import React from 'react';
import './footer.css';
import MixerportLogoWhite from '../../assets/mixerport-logo-white.png';
import {ReactComponent as WhatsAppIc} from '../../assets/Platform=WhatsApp, Color=Negative.svg'
import {ReactComponent as FacebookIc} from '../../assets/Platform=Facebook, Color=Negative.svg'
import {ReactComponent as InstagramIc} from '../../assets/Platform=Instagram, Color=Negative.svg'

const Footer = () => {
    return(
        <div className='footer-ctn'>
            <div className="footer-logo-social"> 
                <img src={MixerportLogoWhite} alt="Mixerport logo" width={70}/>
                <div className="footer-logo-socials">
                    <WhatsAppIc width={20}/>
                    <FacebookIc width={20}/>
                    <InstagramIc width={20}/>
                </div>
            </div>
            <div className="footer-copyright">
                <p> Mixerport Importaciones 2024 | Todos los derechos reservados</p>
                <p> Desarrollado por Astra Software </p>
            </div>
        </div>
    )
}

export default Footer;