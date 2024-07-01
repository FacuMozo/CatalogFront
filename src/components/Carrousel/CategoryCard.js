import React from 'react';
import PropTypes from 'prop-types';
import './CategoryCard.scss';



const CategoryCard = ({ title, icon }) => {
    let iconSrc;
    try {
        iconSrc = require(`../../images/icons/${icon}`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el icono");
    }

    return (
        <div className={`category-card ${title === 'All categories' ? 'all-categories' : ''}`}>
            <div className="category-title">
                <h5>
                    {title}
                </h5>
            </div>
            <div className="category-icon">
                    <img src={iconSrc} alt="Imagen" />
                    <i className={`categoryIcon ${icon}` } ></i>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default CategoryCard;
