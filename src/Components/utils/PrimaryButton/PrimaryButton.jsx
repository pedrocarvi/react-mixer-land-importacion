import React from 'react';
import './primaryButton.css'

const PrimaryButton = ({title, link}) => {
    return(
        <a href={link} className='primary-button'>
            {title}
        </a>
    )
}

export default PrimaryButton;