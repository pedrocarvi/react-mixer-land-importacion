import React, {useState} from 'react';
import './preguntasFrecuentes.css';

const PreguntasFrecuentes = () => {

    const secciones = [
        {
            id: 1,
            titulo: "¿Por qué elegir Mixerport Importaciones?",
            contenido:
                "En Mixerport Importaciones llevamos más de 15 años acompañando a empresas y personas en el camino de importar productos desde cualquier parte del mundo. Nos encargamos de todo el proceso, desde la compra hasta la entrega en tus manos, brindándote tranquilidad incluso en contextos económicos desafiantes.",
        },
        {
            id: 2,
            titulo: "¿Cómo se determinan los plazos de entrega?",
            contenido:
                "Los tiempos de entrega dependen de factores como el país de origen, los tiempos del proveedor o tienda, y las condiciones del comercio exterior en ese momento. Siempre hacemos todo lo posible para cumplir con los plazos acordados.",
        },
        {
            id: 3,
            titulo: "¿Hay costos adicionales al precio de la cotización?",
            contenido:
                "No, el precio que cotizamos es final y se mantiene, ya sea en pesos o dólares, sin sorpresas ni cargos adicionales.",
        },
        {
            id: 4,
            titulo: "¿Puedo seguir el estado de mi pedido?",
            contenido:
                "¡Por supuesto! Te mantenemos informado en todo momento con atención personalizada para que sepas exactamente dónde está tu producto.",
        },
        {
            id: 5,
            titulo: "¿Qué pasa si mi producto se demora o no llega?",
            contenido:
                "Si surge algún inconveniente, nos comunicaremos contigo de inmediato para informarte y resolver la situación. Además, tenemos un plazo límite de 75 días para la entrega. Si no logramos cumplirlo, te devolvemos el dinero sin complicaciones.",
        },
        {
            id: 6,
            titulo: "¿Qué sucede si mi producto tiene una falla?",
            contenido:
                "Te ofrecemos 2 meses de respaldo desde la entrega para que pruebes tu producto con tranquilidad. Si tiene algún problema inicial, nos ocupamos de reemplazarlo. Después de este período, la garantía queda en manos de la marca del producto.",
        },
    ];

    // Estado para manejar qué sección está abierta
    const [seccionActiva, setSeccionActiva] = useState(null);

    // Función para manejar el clic en una sección
    const toggleSeccion = (id) => {
        setSeccionActiva(seccionActiva === id ? null : id);
    };

    return (
        <div className="faqs-ctn" id='faqs'>
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