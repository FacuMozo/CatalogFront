import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = ({ filters }) => {
    const [showMoreCategories, setShowMoreCategories] = useState(false);
    const [showMoreCompanies, setShowMoreCompanies] = useState(false);

    const toggleShowMoreCategories = () => setShowMoreCategories(!showMoreCategories);
    const toggleShowMoreCompanies = () => setShowMoreCompanies(!showMoreCompanies);

    const renderOptions = (options, showMore, toggleShowMore) => {
        const visibleOptions = showMore ? options : options.slice(0, 4);
        return (
            <>
                {visibleOptions.map((option, index) => (
                    <div className="form-check" key={index}>
                        <input className="form-check-input" type="checkbox" id={`option-${option.label}`} />
                        <label className="form-check-label" htmlFor={`option-${option.label}`}>
                            {option.label} ({option.count})
                        </label>
                    </div>
                ))}
                {options.length > 4 && (
                    <button className="btn btn-link" onClick={toggleShowMore}>
                        {showMore ? 'Ver menos' : 'Otros >'}
                    </button>
                )}
            </>
        );
    };

    return (
        <div className="filters">
            <div className="toggle-filters mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="subscription" />
                    <label className="form-check-label" htmlFor="subscription">
                        {filters.subscription.label} ({filters.subscription.count})
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="miniCourses" />
                    <label className="form-check-label" htmlFor="miniCourses">
                        {filters.miniCourses.label} ({filters.miniCourses.count})
                    </label>
                </div>
            </div>
            <div className="filter-section mb-3">
                <h5>Cursos</h5>
                {renderOptions(filters.categories, showMoreCategories, toggleShowMoreCategories)}
            </div>
            <hr />
            <div className="filter-section mb-3">
                <h5>Compañías</h5>
                {renderOptions(filters.companies, showMoreCompanies, toggleShowMoreCompanies)}
            </div>
            <hr />
            <div className="filter-section mb-3">
                <h5>Intervalo, $</h5>
                <div className="mb-2">
                    <label htmlFor="price-min">desde</label>
                    <input type="number" className="form-control" id="price-min" min={filters.priceRange.min} max={filters.priceRange.max} />
                </div>
                <div>
                    <label htmlFor="price-max">hasta</label>
                    <input type="number" className="form-control" id="price-max" min={filters.priceRange.min} max={filters.priceRange.max} />
                </div>
            </div>
            <hr />
            <div className="filter-section mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="free" />
                    <label className="form-check-label" htmlFor="free">
                        {filters.free.label} ({filters.free.count})
                    </label>
                </div>
            </div>
            <hr />
            <div className="filter-section text-center">
                <button className="btn btn-link">Mostrar todos los filtros</button>
            </div>
        </div>
    );
};

Filters.propTypes = {
    filters: PropTypes.object.isRequired,
};

export default Filters;
