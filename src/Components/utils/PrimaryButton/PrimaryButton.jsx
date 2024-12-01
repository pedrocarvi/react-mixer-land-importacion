import React from 'react';
import './primaryButton.css';

const PrimaryButton = ({ type, title, link }) => {
  if (type) {
    return (
      <button className="primary-button" type={type}>
        {title}
      </button>
    );
  }

  return (
    <a href={link} className="primary-button">
      {title}
    </a>
  );
};

export default PrimaryButton;