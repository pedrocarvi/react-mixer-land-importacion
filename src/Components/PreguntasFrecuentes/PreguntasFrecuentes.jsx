import React, {useState} from 'react';
import './preguntasFrecuentes.css';

const PreguntasFrecuentes = () => {

    const secciones = [
        {
            id: 1,
            titulo: "01 Contacto Inicial",
            contenido:
                "Contacta con nosotros para enviar la información de la carga que te gustaría importar. Este primer paso es crucial para entender tus necesidades específicas de importación.",
        },
        {
            id: 2,
            titulo: "02 Análisis y Clasificación",
            contenido:
                "Clasificamos los productos y país de procedencia. Nuestro equipo experto se encarga de categorizar correctamente tu mercancía para asegurar un proceso sin contratiempos.",
        },
        {
            id: 3,
            titulo: "03 Cotización Detallada",
            contenido:
                "Proporcionamos un desglose detallado de los costos asociados al proceso de importación.",
        },
        {
            id: 4,
            titulo: "04 Aceptación y Avance del Proceso",
            contenido:
                "Tras la aceptación de la cotización, procedemos con los pasos necesarios para avanzar en el proceso de importación.",
        },
        {
            id: 5,
            titulo: "05 Gestión Logística y Legal",
            contenido:
                "Nos encargamos del envío y la nacionalización de la mercadería. Manejamos todos los aspectos logísticos y aduaneros para que tu importación sea fluida y conforme a la ley.",
        },
        {
            id: 6,
            titulo: "06 Acompañamiento y despacho de mercadería",
            contenido:
                "Contás con atención personalizada desde que inicia el proceso de importación hasta la entrega de tu mercadería. Nuestro equipo está disponible para resolver tus dudas y mantenerte informado en cada una de las etapas hasta recibir tu importación.",
        },
    ];

    // Estado para manejar qué sección está abierta
    const [seccionActiva, setSeccionActiva] = useState(null);

    // Función para manejar el clic en una sección
    const toggleSeccion = (id) => {
        setSeccionActiva(seccionActiva === id ? null : id);
    };

    return (
        <div className="faqs-ctn">
            <div className='faqs-title'>
                <span> Preguntas frecuentes </span>
                <h3> Respondemos todas tus dudas </h3>
            </div>
            <div className="faqs-acordeon">
                <div className="acordeon">
                    {secciones.map((seccion) => (
                        <div
                            key={seccion.id}
                            className={`acordeon-item ${seccionActiva === seccion.id ? "activo" : ""}`}
                        >
                            <div
                                className="acordeon-header"
                                onClick={() => toggleSeccion(seccion.id)}
                            >
                                <h3>{seccion.titulo}</h3>
                                <span>{seccionActiva === seccion.id ? "▲" : "▼"}</span>
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
    )
}

export default PreguntasFrecuentes;