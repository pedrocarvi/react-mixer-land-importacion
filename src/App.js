import './App.css';
import CategoríasProductos from './Components/CategoriasProductos/CategoriasProductos';
import GuiaImportacion from './Components/GuiaImportacion/GuiaImportacion';
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero Section/HeroSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <CategoríasProductos/>
      <GuiaImportacion/>
    </div>
  );
}

export default App;
