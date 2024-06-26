import React from 'react';
import logo from '../images/lernalogo.webp'
import './Header.scss'
import profilePhoto from '../images/profile.png'

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
                            <input type="text" size="54" className="form-control d-inline-flex text-center bg-light rounded-5" placeholder=" 🔍 Search by courses and profesionals" />
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-light p-1 rounded-5 shadow-sm">
                            <li className="nav-item rounded-5 bg-white">
                                <a className="nav-link active rounded-4 shadow-sm" aria-current="page" href="#">Catalogue</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">NR Cabinet</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">My training</a>
                            </li>
                        </ul>
                        <div className='row align-items-center gradient-border-button gx-1 gy-0'>
                            <div className='col'>
                                <a className="nav-link text-nowrap" href="#">250 points</a>
                            </div>
                            <div className='col'>
                                <img className=" profilePhoto" src={profilePhoto} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
