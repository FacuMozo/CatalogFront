import React from 'react';
import PropTypes from 'prop-types';
import './IntervalFilter.scss';

const IntervalFilter = ({ title, unit }) => {
    return (
        <div className="interval-filter">
            <h4>{title}</h4>
            <div className="interval-inputs">
                <div className="interval-input">
                    <label>Desde</label>
                    <input type="number" placeholder={`0 ${unit}`} />
                </div>
                <div className="interval-input">
                    <label>Hasta</label>
                    <input type="number" placeholder={`max ${unit}`} />
                </div>
            </div>
        </div>
    );
};

IntervalFilter.propTypes = {
    title: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
};

export default IntervalFilter;
