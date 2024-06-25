import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SubCategoryFilter.scss';

const SubcategoryFilter = ({ title, options }) => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="subcategory-filter">
            <h4>{title}</h4>
            <ul>
                {options.slice(0, 4).map((option, index) => (
                    <li key={index}>
                        <label>
                            <input className="form-check-input mx-2" type="checkbox" /> {option.label} ({option.count})
                        </label>
                    </li>
                ))}
                {showAll && options.slice(4).map((option, index) => (
                    <li key={index + 4}>
                        <label>
                            <input type="checkbox" /> {option.name} ({option.count})
                        </label>
                    </li>
                ))}
            </ul>
            {options.length > 4 && (
                <button onClick={handleToggle}>
                    {showAll ? `Mostrar menos` : `Otros ${options.length - 4}`}
                </button>
            )}
        </div>
    );
};

SubcategoryFilter.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default SubcategoryFilter;
