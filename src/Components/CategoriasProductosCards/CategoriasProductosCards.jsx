import React from 'react';
import './categoriasProductosCards.css'

const CategoriasProductosCards = ({title, bgImage}) => {
    return(
        <div className="card" style={{
            backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'left' 
        }}>
            <div className="card-text">
                <h3>{title}</h3>
                <a href="#">Contáctanos <span>▼</span></a>
            </div>
        </div>
    )
}

export default CategoriasProductosCards;