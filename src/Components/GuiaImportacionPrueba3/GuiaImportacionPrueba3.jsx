import React, { useState } from 'react';
import './guia3.css';
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';
import SecondaryButton from '../utils/SecondaryButton/SecondaryButton';

const GuiaImportacion3 = () => {
    return (
        <div className="guia-ctn-3">
            <div className='guia-importacion-ctn3' id='guia3'>
                <div className="first-col3">
                    <h2> Proceso de Importación: <br /> Tu guía en 6 simples pasos</h2>
                    <p> Nuestro proceso está diseñado para brindarte una experiencia de importación sin complicaciones, con un apoyo constante en cada etapa del camino. Conocé cada paso a continuación:</p>
                    <div className='guia-importacion-btns3'>
                        <PrimaryButton title="Asesorate ahora" link="#form" />
                        <SecondaryButton title="Conocé más" />
                    </div>
                </div>
                <div className="second-col3">
                    <div className="guia-card">
                        <h4> Contacto inicial </h4>
                        <p> Envíanos la información de tu carga para evaluar tus necesidades específicas. </p>
                    </div>
                    <div className="guia-card">
                        <h4> Análisis y Clasificación </h4>
                        <p> Clasificamos tu mercancía y país de origen, asegurando un trámite ágil y preciso. </p>
                    </div>
                    <div className="guia-card">
                        <h4> Cotización y Plazos </h4>
                        <p> Recibí un presupuesto claro con tiempos estimados de entrega. </p>
                    </div>
                </div>
                <div className="second-col3">
                    <div className="guia-card">
                        <h4> Inicio del proceso </h4>
                        <p> Con tu aprobación, gestionamos todos los pasos necesarios para importar tu carga. </p>
                    </div>
                    <div className="guia-card">
                        <h4> Gestión Logística y Legal </h4>
                        <p> Manejamos el envío, la nacionalización y el cumplimiento aduanero. </p>
                    </div>
                    <div className="guia-card">
                        <h4> Acompañamiento y entrega </h4>
                        <p> Te mantenemos informado hasta que recibas tu mercancía de forma segura. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuiaImportacion3;
