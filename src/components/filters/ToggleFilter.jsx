import React from 'react';
import PropTypes from 'prop-types';
import './ToggleFilter.scss';

const ToggleFilter = ({ label, icon, bgColor }) => {
    return (
        <div className={`toggle-filter ${bgColor} row justify-content-between`}>
            {/* <img src={icon} alt="icon" className="toggle-icon col-1" /> */}             
            <div className='col-1 p-1'>
                <i className={`  bi ${icon} rounded-circle`}></i>
            </div>
            <div className='col-6 p-1'>
                <span className='col-6'>{label}</span>
            </div>
            <div className='col-1 p-1'>
                <i className="col-1 bi bi-info-circle"></i>
            </div>
            <div className='col-lg-2 p-1 col-md-1'>
                <div className="m-0 form-check form-switch">
                    <input type="checkbox" className="toggle-checkbox form-check-input " role="switch"/>
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
