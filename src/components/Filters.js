import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleFilter from './filters/ToggleFilter';
import SubcategoryFilter from './filters/SubCatregoryFilter';
import IntervalFilter from './filters/IntervalFilter';
import './Filters.scss';

const Filters = ({ filters }) => {
    const [showMoreCategories, setShowMoreCategories] = useState(false);
    const [showMoreCompanies, setShowMoreCompanies] = useState(false);

    const toggleShowMoreCategories = () => setShowMoreCategories(!showMoreCategories);
    const toggleShowMoreCompanies = () => setShowMoreCompanies(!showMoreCompanies);

    return (
        <div className="filters">
            <div className="toggle-filters mb-3">
                <ToggleFilter
                    label={filters.subscription.label}
                    icon="subscription-icon.png" // Reemplazar con el icono real
                    bgColor="bg-blue"
                />
                <ToggleFilter
                    label={filters.miniCourses.label}
                    icon="mini-courses-icon.png" // Reemplazar con el icono real
                    bgColor="bg-purple"
                />
            </div>
            <div className="filter-section mb-3">
                <SubcategoryFilter
                    title="Cursos"
                    options={filters.categories}
                    showMore={showMoreCategories}
                    toggleShowMore={toggleShowMoreCategories}
                />
            </div>
            <hr />
            <div className="filter-section mb-3">
                <SubcategoryFilter
                    title="Compañías"
                    options={filters.companies}
                    showMore={showMoreCompanies}
                    toggleShowMore={toggleShowMoreCompanies}
                />
            </div>
            <hr />
            <div className="filter-section mb-3">
                <IntervalFilter
                    title="Intervalo"
                    unit="$"
                    min={filters.priceRange.min}
                    max={filters.priceRange.max}
                />
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
