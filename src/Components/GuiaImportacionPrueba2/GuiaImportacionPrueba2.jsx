import React, { useState } from 'react';
import './guia2.css';
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';
import SecondaryButton from '../utils/SecondaryButton/SecondaryButton';

const GuiaImportacion2 = () => {
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

    const [seccionActiva, setSeccionActiva] = useState(1); // El primer item está activo por defecto

    const toggleSeccion = (id) => {
        setSeccionActiva(seccionActiva === id ? null : id); // Cambiar la visibilidad
    };

    return (
        <div className="guia-ctn-2">
            <div className='guia-importacion-ctn2' id='guia2'>
                <div className="first-col">
                    <h2> Proceso de Importación: <br /> Tu guía en 6 simples pasos</h2>
                    <p> Nuestro proceso está diseñado para brindarte una experiencia de importación sin complicaciones, con un apoyo constante en cada etapa del camino. Conocé cada paso a continuación:</p>
                    <div className='guia-importacion-btns2'>
                        <PrimaryButton title="Asesorate ahora" link="#form" />
                        <SecondaryButton title="Conocé más" />
                    </div>
                </div>
                <div className="lista-titulos">
                    {secciones.map((seccion) => (
                        <div
                            key={seccion.id}
                            className={`titulo ${seccionActiva === seccion.id ? "activo" : ""}`}
                            onClick={() => toggleSeccion(seccion.id)}
                        >
                            <div className="icono-placeholder">🔹</div>

                            <h3>{seccion.titulo}</h3>
                        </div>
                    ))}
                </div>
                <div className="second-col">
                    {secciones.map((seccion) => (
                        seccionActiva === seccion.id && (
                            <div key={seccion.id} className="contenido">
                                <p>{seccion.contenido}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GuiaImportacion2;
