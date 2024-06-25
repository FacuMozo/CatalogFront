import React, { useState } from 'react';
import Filters from './Filters';
import mockFilters from './mockFilters';
import './SearchAndFilters.scss'; // Asegúrate de agregar tus estilos personalizados aquí

const SearchAndFilters = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="search-and-filters d-lg-none">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <input type="text" className="form-control" placeholder="Search by courses" />
                <button className="btn btn-primary ms-2" onClick={handleShow}>
                    <i className="bi bi-filter"></i> Filters
                </button>
            </div>

            <div
                className={`offcanvas offcanvas-end ${show ? 'show' : ''}`}
                tabIndex="-1"
                style={{ visibility: show ? 'visible' : 'hidden' }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasFiltersLabel">Filters</h5>
                    <button type="button" className="btn-close text-reset" onClick={handleClose}></button>
                </div>
                <div className="offcanvas-body">
                    <Filters filters={mockFilters} />
                </div>
            </div>
            {show && <div className="offcanvas-backdrop fade show" onClick={handleClose}></div>}
        </div>
    );
};

export default SearchAndFilters;
