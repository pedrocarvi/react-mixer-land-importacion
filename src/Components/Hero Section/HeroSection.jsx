import React from 'react';
import './heroSection.css'
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';
import ContenedorImg from '../../assets/contenedor.png';
import SecondaryButton from '../utils/SecondaryButton/SecondaryButton';

const HeroSection = () => {
    return(
        <div className='hero-section-ctn'>
            {/* <div className="hero-section-subctn">
                <div className="first-column">
                    <h1> Importamos todos los productos, insumos y herramientas que tu negocio necesita. </h1>
                    <p> Tus aliados para importar mercadería aérea, marítima o terrestre desde cualquier parte del mundo, al mejor precio. </p>
                    <div className="first-column-btns">
                        <PrimaryButton title="Asesorate ahora"/>
                        <SecondaryButton title="Conocé más"/>
                    </div>
                </div>
                <div className="second-column">
                    <img src={ContenedorImg} alt="Imagen del contenedor" width={450} />
                </div>
            </div> */}
            <div className="hero-section-subctn">
                <h1> Todo lo que tu negocio necesita, desde cualquier lugar del planeta. </h1>
                <p> Especialistas en importación aérea, marítima y terrestre, conectamos tu empresa con los mejores productos del mundo al costo más competitivo. </p>
                <div className="first-column-btns">
                    <PrimaryButton title="Asesorate ahora" link="#form"/>
                    <SecondaryButton title="Conocé más" link="#guia"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;