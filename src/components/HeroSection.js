import React from 'react';
import Button from './Button';
import learnimg from '../images/learnaimg.png'
import './HeroSection.scss'

const HeroSection = () => {
    return (
        <section className="hero-section ">
            <div className="container background-gradient p-5 rounded-4">
                <div className="row g-4">
                    <div className="col-lg-4 order-lg-2 order-sm-1 col-md-12 d-flex justify-content-center">
                        <img src={learnimg} alt="Heroooo" className="img-fluid" />
                    </div>
                    <div className="col-lg-8 col-md-12 order-lg-1 order-sm-2 ">
                        <h1 className='row text-white text-md-center text-lg-left '>Online courses from trusted schools on one platform</h1>
                        <div className='row '>
                            <div className="col bonus-points text-white bg-info bg-opacity-75 rounded-3 p-3 mx-2">
                                <p>Your bonus account: <strong>250 points</strong></p>
                                <form className="email-form">
                                    <input type="email" placeholder="Ingrese e-mail" required />
                                    <Button text="Aceptar" />
                                </form>
                            </div>
                            <div className="col course-access text-white bg-info bg-opacity-75 rounded-3 p-3 mx-2">
                                <p className='text-white'>You have access to the course: <strong>Management and continuous improvement</strong></p>
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
