import React from 'react';
import logo from '../images/lernalogo.webp'
import './Header.scss'
import profilePhoto from '../images/profile.png'

const Header = ({cantCourses}) => {

    
    return (
        <header className="header ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*  Logo  */}
                    <a className="navbar-brand ms-xl-4" href="#">
                        <img src={logo} alt="" height="35"/>
                    </a>
                    {/*  SearchBar  */}
                    <div className='d-none d-lg-block'>
                        <form className="d-flex" role="search">
                                <input type="text" size="54" className="form-control d-inline-flex text-center bg-light rounded-5" placeholder=" 🔍 Search by courses and professions" />
                        </form>

                    </div>
                    {/*  info btn small devices  */}
                    <i className="d-lg-none bi bi-question-circle mx-4 fw-bold fs-4"></i>

                    {/*  NavLinks y Profile  */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-light p-1 rounded-5 shadow-sm">
                            
                            {/*  NavLinks  */}
                            <li className="nav-item rounded-5 bg-white">
                                <a className="nav-link active rounded-4 shadow-sm" aria-current="page" href="#">Catalogue</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">NR Cabinet</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">My training <p className="d-inline-block 
                                                                                bg-primary text-white rounded-5 m-0 px-2 "> {cantCourses} </p></a>
                            </li>
                        </ul>
                        <i className="d-none d-lg-block bi bi-question-circle mx-4 fw-bold"></i>
                        
                        {/*  Profile  */}
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
