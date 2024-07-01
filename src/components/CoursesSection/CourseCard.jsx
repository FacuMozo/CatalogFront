import React from 'react';
import PropTypes from 'prop-types';
import './CourseCard.scss';
import Button from '../Button';

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
        logoSrc = require(`../../images/providers/${logo}.webp`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el Logo");
    }
    let courseLogoSrc;
    try {
        courseLogoSrc = require(`../../images/${courseImage}`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el logo del Course");
    }



    return (
        <div className="course-card container">

            <div className="row justify-content-end">
                <div className="col col-xl-4 course-category ">
                    {courseCategory}
                </div>
            </div>

            <div className="card-body">
                <div className="course-title-wrapper">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8 px-0'>
                                <img src={logoSrc} alt={"Provider "+logo} className="provider-logo" />
                                <h3 className="course-title">{title}</h3>
                                <p className="course-hours">{hours} horas</p>
                                {slots && <p className="course-slots">Cupo: {slots} plazas</p>}
                                {rating && <p className="course-rating">Rat.: {rating} estrellas</p>}

                            </div>
                            <div className='col-4 pt-3 text-end'>
                                <div className="course-image">
                                    <img src={courseLogoSrc} alt="Course Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            For {installmentPeriod} months <br />
                        </p>
                        <p className='row installmentPrice'>{installmentPrice} $/month 
                        </p>
                    </div>

                </div>
            </div>
            <div className="row card-footer g-2">
                <div className='col-10 col-md-12 col-xl-6 order-xl-2 col-6 px-1  d-lg-block text-start'>
                    <Button  text="Get access" btnClass="btn-primary" textColor="text-white" col="col-12" />
                </div>
                <div className='col-6 col-md-12 col-xl-6 order-xl-1 px-1 d-none d-md-block text-start'>
                    <Button  text="More details" btnClass="btn-outline-primary" col="col-12" />
                </div>
                <div className='col-2 d-md-none px-1 text-start'>
                    <Button  text="i" btnClass="btn-outline-primary" col="col-12" />
                </div>
                {/* <div className="">
                    <div className='row px-0 mx-0 text-center'>
                        <i className="col-lg-4 px-0 bi bi-info fs-4 text-lg-end"></i>
                    </div>
                </div> */}
                {/* <button className="col-md-10 col-xl-6 order-xl-2 btn btn-primary">Get access</button>
                <button className="col-md-10 col-xl-6 order-xl-1 btn btn-outline-primary">More Details</button> */}
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
