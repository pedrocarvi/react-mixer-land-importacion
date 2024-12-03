import React from 'react';
import './footer.css';
import MixerportLogoWhite from '../../assets/mixerport-logo-white.png';
import InstagramIc from '../../assets/instagram-icon.png';
import FacebookIc from '../../assets/facebook-icon.png';
import WhatsAppIc from '../../assets/whatsapp-icon.png';

const Footer = () => {
    return(
        <div className='footer-ctn'>
            <div className="footer-logo-social"> 
                <img src={MixerportLogoWhite} alt="Mixerport logo" width={70}/>
                <div className="footer-logo-socials">
                    <img src={InstagramIc} alt="Instagram icon" width={25} />
                    <img src={FacebookIc} alt="Facebook icon" width={25} />
                    <img src={WhatsAppIc} alt="WhatsApp icon" width={25} />
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