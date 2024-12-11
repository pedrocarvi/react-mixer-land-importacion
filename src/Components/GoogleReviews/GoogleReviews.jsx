// USANDO LA CUENTA DE TRUSTINDEX
import { useEffect, useState } from 'react';
import './GoogleReviews.css'

const GoogleReviews = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Cargar el script de Trustindex
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js';
    script.defer = true;
    script.async = true;

    // Una vez que el script se haya cargado, activa el widget
    script.onload = () => setWidgetLoaded(true);

    document.head.appendChild(script);

    // Limpia el script al desmontar el componente
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="section-reviews" id='resenas'>
      <div className="section-reviews-texts">
        <h2>Ellos ya confiaron en Mixerport</h2>
        <h3>Testimonios de nuestros clientes</h3>
        <p>Trabajamos arduamente para superar las expectativas.</p>
      </div>

      {/* Solo muestra el widget cuando el script está completamente cargado */}
      <div style={{marginTop: '30px'}}>
        {widgetLoaded && (
          <div src="https://cdn.trustindex.io/loader.js?d31eb7936514342ed716b652090"></div>
        )}
      </div>

      {/* <a href="https://www.google.com/maps/place/Mixerport+Importaciones/..." target="_blank" rel="noopener noreferrer">
        <button className="btn-info" id="btn-resenias">Ver todos las reseñas</button>
      </a> */}
    </div>
  );
};

export default GoogleReviews;
