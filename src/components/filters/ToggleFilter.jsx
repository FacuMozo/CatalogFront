import React from 'react';
import PropTypes from 'prop-types';
import './ToggleFilter.scss';

const ToggleFilter = ({ label, icon, bgColor }) => {
    return (
        <div className={`toggle-filter ${bgColor}`}>
            <img src={icon} alt="icon" className="toggle-icon" />
            <span>{label}</span>
            <input type="checkbox" className="toggle-checkbox" />
            <i className="fas fa-question-circle toggle-question"></i>
        </div>
    );
};

ToggleFilter.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default ToggleFilter;
