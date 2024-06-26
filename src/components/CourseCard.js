import React from 'react';
import PropTypes from 'prop-types';
import './CourseCard.scss';

const CourseCard = ({ 
    logo, 
    courseCategory, 
    courseImage, 
    title, 
    hours, 
    slots, 
    rating, 
    discountTag, 
    extraTags, 
    originalPrice, 
    discountedPrice, 
    installmentPrice, 
    installmentPeriod 
}) => {
    //Carga dinamica de las imagenes, si no existe en la ruta especificada se muestra ALT
    let logoSrc;
    try {
        logoSrc = require(`../images/${logo}.webp`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el Logo");
    }
    let courseLogoSrc;
    try {
        courseLogoSrc = require(`../images/${courseImage}.webp`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el logo del Course");
    }



    return (
        <div className="course-card">
            <div className="card-header">
                <img src={logoSrc} alt={"Provider "+logo} className="provider-logo" />
                <div className="course-category">
                    {courseCategory}
                </div>
            </div>
            <div className="card-body">
                <div className="course-title-wrapper">
                    <h3 className="course-title">{title}</h3>
                    <div className="course-image">
                        <img src={courseLogoSrc} alt="Course Image" />
                    </div>
                </div>
                <p className="course-hours">{hours} horas</p>
                {slots && <p className="course-slots">Cupo: {slots} plazas</p>}
                {rating && <p className="course-rating">Rat.: {rating} estrellas</p>}
                <div className="course-tags">
                    {discountTag && <span className="discount-tag">{discountTag}</span>}
                    {extraTags.map((tag, index) => (
                        <span className="extra-tag" key={index}>{tag}</span>
                    ))}
                </div>
                <div className="row ms-1 course-pricing">
                    <div className='col'>
                        <p className="row original-price">{originalPrice} $</p>
                        <p className="row discounted-price">{discountedPrice} $</p>

                    </div>
                    <div className='col'>
                        <p className="row installment-price">
                            En {installmentPeriod} meses <br />
                        </p>
                        <p className='row installmentPrice'>{installmentPrice} $/mes 
                        </p>
                    </div>

                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary">Más detalles</button>
                <button className="btn btn-primary">Acceder</button>
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    logo: PropTypes.string.isRequired,
    courseCategory: PropTypes.string.isRequired,
    courseImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    slots: PropTypes.string,
    rating: PropTypes.string,
    discountTag: PropTypes.string.isRequired,
    extraTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    originalPrice: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string.isRequired,
    installmentPrice: PropTypes.string.isRequired,
    installmentPeriod: PropTypes.string.isRequired
};

export default CourseCard;
