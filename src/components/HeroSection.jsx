import React from 'react';
import Button from './Button';
import learnimg from '../images/learnaimg.png'
import './HeroSection.scss'
import skillbox from '../images/SkillboxWhite.png'

const HeroSection = ({cantCourses}) => {

    const points=250
    return (
        <section className="hero-section ">
            <div className="m-2 m-lg-4 background-gradient  rounded-4">
                <div className="row px-md-5 px-4 pb-4 pb-sm-4 pb-lg-0">
                    <div className="col-lg-4  order-lg-2 order-sm-1 col-md-12 d-flex justify-content-center">
                        <img src={learnimg} alt="CoursesImg" className="imgBanner img-fluid" />
                    </div>
                    <div className="d-flex flex-column justify-content-between col-lg-8 col-md-12 order-lg-1 order-sm-2 gy-5">
                        <h1 className='row text-white text-center text-lg-start text-wrap '>Online courses from trusted schools on one platform</h1>
                        <div className='row gy-2 mb-4'>
                            <div className="d-flex flex-column justify-content-between col-md bonus-points text-white bg-opacity-75 rounded-3 p-3 HeroCard">
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fw-lighter fs-6'>Your bonus account: </p>
                                    </div>
                                    <div className='col text-end'>
                                        <p className='fw-lighter fs-6 fst-normal'>1 point = 1 US$</p>
                                    </div>

                                </div>
                                <div className='row'>
                                    <p className='fw-semibold'>{points} points</p>
                                </div>
                                <div className='row'>
                                    <form className="email-form">
                                        <div className="row g-3 align-items-end">
                                            <div className="col col-xl-7">
                                                <input 
                                                    className="form-control"
                                                    type="email"  
                                                    maxLength="64" 
                                                    required 
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$"
                                                    placeholder="Ingrese e-mail" 
                                                />
                                            </div>
                                            <div className="col-2 col-lg-5 p-0 text-center align-middle">
                                                    <button className="col-12 btn btn-outline-info  p-0 align-middle">
                                                        <i className="col-lg-4 px-0 bi bi-info fs-4 text-lg-end"></i>
                                                        <span className='d-none d-xl-inline-block'>Aceptar</span>
                                                    </button>
                                                <div className='row px-0 mx-0 text-center'>

                                                    {/* <div className='col-8 px-0 d-none d-lg-block text-start'>
                                                        <Button  text="i aceptar" btnClass="btn-outline-info" textColor="text-white" />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                
                            </div>
                            <div className="col-md HeroCard course-access rounded-3 p-3 mx-md-2 HeroCard">
                                <div className='row'>
                                    <div className='col'>
                                        <p className='text-white fs-6 fw-light'>You have access to the course:</p>
                                    </div>
                                    <div className='col text-end d-none d-xl-block'>
                                        <img src={skillbox} alt="Skillbox" style={{maxWidth:"64px"}} />
                                    </div>

                                </div>
                                <p className='text-white'>Management and continuous improvement</p>
                                <div className='row'>
                                    <div className='col-8 col-md-7'>
                                        <Button text="Go to training" btnClass="btn-info" col="col-12" textWheight="fw-semibold"/>
                                    </div>
                                    <div className="col-4 col-md-5 border rounded-3 text-sm-center">
                                        <div className='d-none d-xl-block '>
                                            <Button  text={`My training ${cantCourses}`} btnClass="btn-secondary" textColor="text-white"/>
                                        </div>
                                        <div className='d-none d-md-block d-xl-none'>
                                            <Button  text="More 4" btnClass="btn-secondary" textColor="text-white" />
                                        </div>
                                        <div className='d-sm-block d-md-none text-center'>
                                            <Button  text="More" btnClass="btn-secondary" textColor="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
