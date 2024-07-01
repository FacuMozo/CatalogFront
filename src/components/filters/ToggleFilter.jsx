import React from 'react';
import PropTypes from 'prop-types';
import './ToggleFilter.scss';

const ToggleFilter = ({ label, icon, bgColor }) => {
    let iconSrc;
    try {
        iconSrc = require(`../../images/icons/${icon}.png`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el Logo");
    }
    let infoSrc;
    try {
        infoSrc = require(`../../images/icons/Info.png`);
    } catch (error) {
        // logoSrc = require('../images/default.jpg'); // Imagen por defecto
        console.log("No existe el Logo");
    }
    
    return (
        <div className={`toggle-filter ${bgColor}  justify-content-start`}>
            <div className=''>
                <img src={iconSrc} alt="icon" className="toggle-icon col-1" />             
                {/* <i className={`  bi ${icon} rounded-circle`}></i> */}
            </div>
            <div className=' align-self-start p-1'>
                <div className=' p-0 m-0'>
                    <span className='me-1 text-nowrap'>{label}</span>
                    <img src={infoSrc} alt="icon" className="toggle-info-icon infoIcon col-1" />             
                </div>
            </div>
            
            <div className='ms-auto p-0 '>
                <div className="m-0 p-0 form-check form-switch">
                    <input type="checkbox" className=" toggle-checkbox form-check-input " role="switch"/>
                </div>
            </div>
        </div>
    );
};

ToggleFilter.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default ToggleFilter;
