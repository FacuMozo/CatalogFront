import React from 'react';
import logo from '../images/lernalogo.webp'

const Header = () => {
    return (
        <header className="header ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" height="35"/>
                    </a>
                    <form className="d-flex" role="search">
                            <button className="btn btn-outline" type="submit">Search</button>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            </input>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Catalogue</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NR Cabinet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My training</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">250 points</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
