import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesCarousel from './components/Carrousel/CategoriesCarousel';
import CoursesSection from './components/CoursesSection/CoursesSection';
import mockCategories from './components/Carrousel/mockCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';



import './App.scss';
import NavLinksMobile from './components/NavLinksMobile';

const App = () => {

    const cantCourses = 4;
    return (
        <div className="App ">
            <Header cantCourses={cantCourses}/>
            <NavLinksMobile />
            <HeroSection cantCourses={cantCourses}/>
            <CategoriesCarousel categories={mockCategories}  />
            <CoursesSection />
            
        </div>
    );
};

export default App;
