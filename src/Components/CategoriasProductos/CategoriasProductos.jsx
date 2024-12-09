import React from 'react';
import './categoriasProductos.css';
import CategoriasProductosCards from '../CategoriasProductosCards/CategoriasProductosCards.jsx';
import CatGamingImg from '../../assets/cat-gaming.webp';
import CatConstrucciónImg from '../../assets/cat-construccion.webp';
import CatMaquinariaImg from '../../assets/cat-maquinaria-byn.webp';
import CatPanelesImg from '../../assets/cat-paneles.webp';
import CatPesasImg from '../../assets/cat-pesas.webp';
import CatVigilancia from '../../assets/cat-vigilancia.webp';

const CategoríasProductos = () => {
    // Arreglo de categorías
    const categorias = [
        { title: "Tecnología & Electrónica", bgImage: CatGamingImg },
        { title: "Materiales de Construcción", bgImage: CatConstrucciónImg },
        { title: "Maquinaria Pesada", bgImage: CatMaquinariaImg },
        { title: "Paneles Solares", bgImage: CatPanelesImg },
        { title: "Pesas y Gimnasio", bgImage: CatPesasImg },
        { title: "Vigilancia y Seguridad", bgImage: CatVigilancia },
    ];

    return (
        <div className='categorias-productos-ctn'>
            <div className="categorias-productos-title">
                <span>Categorías Destacadas</span>
                <h2>Traemos lo que sea, sin importar el tamaño.</h2>
            </div>
            <div className="categorias-productos-cards">
                {categorias.map((categoria, index) => (
                    <CategoriasProductosCards
                        key={index} 
                        title={categoria.title}
                        bgImage={categoria.bgImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoríasProductos;
