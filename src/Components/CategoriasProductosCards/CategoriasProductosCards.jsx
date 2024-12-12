import React from 'react';
import './categoriasProductosCards.css'

const CategoriasProductosCards = ({ className, title, bgImage }) => {
    return(
        <div className={`card ${className}`}style={{
            backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'left' 
        }}>
            <div className="card-text">
                <h3>{title}</h3>
                <a href="#form">Contáctanos <span>▼</span></a>
            </div>
        </div>
    )
}

export default CategoriasProductosCards;