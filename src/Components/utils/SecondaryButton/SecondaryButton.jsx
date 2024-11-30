import React from 'react';
import './secondaryButton.css'

const SecondaryButton = ({title, link}) => {
    return(
        <a href={link} className='secondary-button'>
            {title}
        </a>
    )
}

export default SecondaryButton;