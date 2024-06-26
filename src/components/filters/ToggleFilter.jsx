import React from 'react';
import PropTypes from 'prop-types';
import './ToggleFilter.scss';

const ToggleFilter = ({ label, icon, bgColor }) => {
    return (
        <div className={`toggle-filter ${bgColor} row justify-content-between`}>
            {/* <img src={icon} alt="icon" className="toggle-icon col-1" /> */}             
            <i className={`col-1  bi ${icon} rounded-circle`}></i>
            
            <span className='col-6'>{label}</span>
            <i className="col-1 bi bi-question-circle"></i>
            <div class="col-lg-2 col-md-1 m-0 form-check form-switch">
                <input type="checkbox" className="toggle-checkbox form-check-input " role="switch"/>
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
