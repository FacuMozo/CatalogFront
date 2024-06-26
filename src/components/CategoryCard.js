import React from 'react';
import PropTypes from 'prop-types';
import './CategoryCard.scss';
import ImageComponent from './Image.js';


const CategoryCard = ({ title, icon }) => {
    

    return (
        <div className={`category-card ${title === 'All categories' ? 'all-categories' : ''}`}>
            <div className="category-title">
                {title}
            </div>
            <div className="category-icon">
                    <img src={require( `../images${icon}`)} alt="Imagen" />
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
