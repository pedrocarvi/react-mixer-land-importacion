import React from 'react';
import './footer.css';
import MixerportLogoWhite from '../../assets/mixerport-logo-white.png';
import {ReactComponent as WhatsAppIc} from '../../assets/Platform=WhatsApp, Color=Negative.svg'
import {ReactComponent as FacebookIc} from '../../assets/Platform=Facebook, Color=Negative.svg'
import {ReactComponent as InstagramIc} from '../../assets/Platform=Instagram, Color=Negative.svg'
import {ReactComponent as TiktokIc} from "../../assets/TiktokIcon.svg"
const Footer = () => {
    return(
        <div className='footer-ctn'>
            <div className="footer-logo-social"> 
                <img src={MixerportLogoWhite} alt="Mixerport logo" width={70}/>
                <div className="footer-logo-socials">
                    <a href="https://api.whatsapp.com/send?phone=541128859227&text=Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20hacerles%20una%20consulta"> <WhatsAppIc width={20}/> </a>
                    <a href="https://www.facebook.com/mixerportdj/?locale=es_LA" target='_blank'> <FacebookIc width={20}/> </a>
                    <a href="https://www.instagram.com/mixerportba/" target='_blank'> <InstagramIc width={20}/> </a>
                    <a href="https://www.linkedin.com/in/fabio-lubnicki-importaci%C3%B3n-tecnolog%C3%ADa/" target='_blank'> <TiktokIc width={20}/> </a>
                </div>
            </div>
            <div className="footer-copyright">
                <p> Mixerport Importaciones 2024 | Todos los derechos reservados</p>
                <p> Desarrollado por <a href="https://astrasoftware.com.ar/" target='_blank'> Astra Software </a> </p>
            </div>
        </div>
    )
}

export default Footer;