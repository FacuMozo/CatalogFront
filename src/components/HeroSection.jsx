import React from 'react';
import Button from './Button';
import learnimg from '../images/learnaimg.png'
import './HeroSection.scss'

const HeroSection = () => {

    const points=250
    return (
        <section className="hero-section ">
            <div className="m-4 background-gradient  rounded-4">
                <div className="row px-5 pb-4">
                    <div className="col-lg-4  order-lg-2 order-sm-1 col-md-12 d-flex justify-content-center">
                        <img src={learnimg} alt="CoursesImg" className="imgBanner img-fluid" />
                    </div>
                    <div className="col-lg-8 col-md-12 order-lg-1 order-sm-2 gy-5">
                        <h1 className='row text-white text-md-center text-lg-left '>Online courses from trusted schools on one platform</h1>
                        <div className='row gy-2'>
                            <div className="col bonus-points text-white bg-opacity-75 rounded-3 p-3 HeroCard">
                                <p className='fw-lighter'>Your bonus account: </p>
                                <p className='fw-bold'>{points} points</p>
                                <form className="email-form">
                                    <div className="row g-3 align-items-center">
                                        <div className="col-md-8">
                                            <input 
                                                className="form-control"
                                                type="email"  
                                                maxLength="64" 
                                                required 
                                                pattern=".+@+.+\.com"
                                                placeholder="Ingrese e-mail" 
                                            />
                                        </div>
                                        <div className="col">
                                            <Button text="Aceptar" btnClass="btn-primary" col="col-12" />
                                        </div>
                                    </div>
                                </form>

                                
                            </div>
                            <div className="col HeroCard course-access rounded-3 p-3 mx-2 HeroCard">
                                <p className='text-white'>You have access to the course:</p>
                                <p className='text-white'>Management and continuous improvement</p>
                                <Button text="Go to training" btnClass="btn-primary" />
                                <Button text="My training 4" btnClass="btn-secondary" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
