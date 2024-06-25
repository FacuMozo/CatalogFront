import React from 'react';
import logo from '../images/lernalogo.webp'
import './Header.scss'

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
                            <input type="text" className="form-control d-inline-flex  text-center px-5 bg-light rounded-5" placeholder=" 🔍 Search by courses and profesionals" />
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-light p-1 rounded-5 shadow-sm">
                            <li className="nav-item rounded-5 bg-white">
                                <a className="nav-link active rounded-4 shadow-sm" aria-current="page" href="#">Catalogue</a>
                            </li>
                            <li className="nav-item bg-white rounded-4 shadow-sm ">
                                <a className="nav-link " href="#">NR Cabinet</a>
                            </li>
                            <li className="nav-item rounded-4 bg-white shadow-sm">
                                <a className="nav-link" href="#">My training</a>
                            </li>
                        </ul>
                        <div className=' gradient-border-button'>

                            <a className="nav-link  gradient-text" href="#">250 points</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
