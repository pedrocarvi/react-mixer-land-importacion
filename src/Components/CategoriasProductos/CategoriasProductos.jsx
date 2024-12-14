import React, { useEffect, useState } from 'react';
import './categoriasProductos.css';
import CategoriasProductosCards from '../CategoriasProductosCards/CategoriasProductosCards.jsx';
import CatGamingImg from '../../assets/cat-gaming.webp';
import CatConstrucciónImg from '../../assets/cat-construccion.webp';
import CatMaquinariaImg from '../../assets/cat-maquinaria-byn.webp';
import CatPanelesImg from '../../assets/cat-paneles.webp';
import CatPesasImg from '../../assets/cat-pesas.webp';
import CatVigilancia from '../../assets/cat-vigilancia.webp';

const CategoríasProductos = () => {
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.categorias-productos-card');
            cards.forEach((card) => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop <= window.innerHeight - 100) {
                    card.classList.add('active');
                }
            });
        };        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleCards]);

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
        <div className='categorias-productos-ctn' id='destacados'>
            <div className="categorias-productos-title">
                <span>Categorías Destacadas</span>
                <h2 style={{textAlign: 'center'}}> Importamos cualquier tipo de producto, <br/>sin importar el volumen </h2>
            </div>
            <div className="categorias-productos-cards">
                {categorias.map((categoria, index) => (
                    <CategoriasProductosCards
                        key={index}
                        title={categoria.title}
                        bgImage={categoria.bgImage}
                        className={`categorias-productos-card ${visibleCards.includes(index) ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoríasProductos;
