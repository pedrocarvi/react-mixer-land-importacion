import React, { useState } from 'react';
import './guiaImportacion.css';
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';
import SecondaryButton from '../utils/SecondaryButton/SecondaryButton';

const GuiaImportacion = () => {
    const secciones = [
        {
            id: 1,
            titulo: "Contacto Inicial",
            contenido: "Envíanos la información de tu carga para evaluar tus necesidades específicas.",
        },
        {
            id: 2,
            titulo: "Análisis y Clasificación",
            contenido: "Clasificamos tu mercancía y país de origen, asegurando un trámite ágil y preciso.",
        },
        {
            id: 3,
            titulo: "Cotización y Plazos",
            contenido: "Recibí un presupuesto claro con tiempos estimados de entrega.",
        },
        {
            id: 4,
            titulo: "Inicio del proceso",
            contenido: "Con tu aprobación, gestionamos todos los pasos necesarios para importar tu carga.",
        },
        {
            id: 5,
            titulo: "Gestión Logística y Legal",
            contenido: "Manejamos el envío, la nacionalización y el cumplimiento aduanero.",
        },
        {
            id: 6,
            titulo: "Acompañamiento y entrega",
            contenido: "Te mantenemos informado hasta que recibas tu mercancía de forma segura.",
        },
    ];

    const [seccionActiva, setSeccionActiva] = useState(null);

    const toggleSeccion = (id) => {
        setSeccionActiva(seccionActiva === id ? null : id);
    };

    return (
        <div className="guia-ctn">
            <div className='guia-importacion-ctn' id='guia'>
                <div className="first-col">
                    <span className='first-col-span'> PROCESO DE IMPORTACIÓN </span>
                    <h2> Tu guía en 6 simples pasos</h2>
                    <p> Nuestro proceso está diseñado para brindarte una experiencia de importación sin complicaciones, con un apoyo constante en cada etapa del camino.</p>
                    <div className='guia-importacion-btns'>
                        <PrimaryButton title="Asesorate ahora" link="#form"/>
                        <SecondaryButton title="Conocé más"/>
                    </div>
                </div>
                <div className="second-col">
                    <div className="acordeon">
                        <div className="barra-vertical"></div>
                        {secciones.map((seccion, index) => (
                            <div
                                key={seccion.id}
                                className={`acordeon-item ${seccionActiva === seccion.id ? "activo" : ""}`}
                                onClick={() => toggleSeccion(seccion.id)}
                            >
                                <div className="acordeon-header">
                                    <div className="icono-placeholder">{index+1}</div>
                                    <h3>{seccion.titulo}</h3>
                                </div>
                                {seccionActiva === seccion.id && (
                                    <div className="acordeon-contenido">
                                        <p>{seccion.contenido}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuiaImportacion;
