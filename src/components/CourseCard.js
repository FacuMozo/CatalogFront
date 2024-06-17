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
    return (
        <div className="course-card">
            <div className="card-header">
                <img src={logo} alt="Provider Logo" className="provider-logo" />
                <div className="course-category">
                    {courseCategory}
                </div>
            </div>
            <div className="card-body">
                <div className="course-title-wrapper">
                    <h3 className="course-title">{title}</h3>
                    <div className="course-image">
                        <img src={courseImage} alt="Course Image" />
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
                <div className="course-pricing">
                    <p className="original-price">{originalPrice} $</p>
                    <p className="discounted-price">{discountedPrice} $</p>
                    <p className="installment-price">
                        En {installmentPeriod} meses <br />
                        {installmentPrice} $/mes
                    </p>
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
