import './App.css';
import CategoríasProductos from './Components/CategoriasProductos/CategoriasProductos';
import Footer from './Components/Footer/Footer';
import FormularioContacto from './Components/FormularioContacto/FormularioContacto';
import GoogleReviews from './Components/GoogleReviews/GoogleReviews';
import GuiaImportacion from './Components/GuiaImportacion/GuiaImportacion';
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero Section/HeroSection';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import VideoImportacion from './Components/VideoImportacion/VideoImportacion';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <VideoImportacion/>
      <CategoríasProductos/>
      <GuiaImportacion/>
      <FormularioContacto/>
      <GoogleReviews/>
      <PreguntasFrecuentes/>
      <Footer/>
    </div>
  );
}

export default App;
