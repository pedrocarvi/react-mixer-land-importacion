import './App.css';
import CategoríasProductos from './Components/CategoriasProductos/CategoriasProductos';
import Footer from './Components/Footer/Footer';
import FormularioContacto from './Components/FormularioContacto/FormularioContacto';
import GoogleReviews from './Components/GoogleReviews/GoogleReviews';
import GuiaImportacion from './Components/GuiaImportacion/GuiaImportacion';
import GuiaImportacion2 from './Components/GuiaImportacionPrueba2/GuiaImportacionPrueba2';
import GuiaImportacion3 from './Components/GuiaImportacionPrueba3/GuiaImportacionPrueba3';
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero Section/HeroSection';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import VideoImportacion from './Components/VideoImportacion/VideoImportacion';
import WhatsAppButton from './Components/WhatsappButton/WhatsappButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <VideoImportacion/>
      <CategoríasProductos/>
      <GuiaImportacion/>
      {/* <GuiaImportacion2/>
      <GuiaImportacion3/> */}
      <FormularioContacto/>
      <GoogleReviews/>
      <PreguntasFrecuentes/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
