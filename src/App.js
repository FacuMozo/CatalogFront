import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesCarousel from './components/CategoriesCarousel';
import CoursesSection from './components/CoursesSection';
import mockCategories from './components/mockCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';



import './App.scss';
import NavLinksMobile from './components/NavLinksMobile';

const App = () => {
    return (
        <div className="App ">
            <Header />
            <NavLinksMobile />
            <HeroSection />
            <CategoriesCarousel categories={mockCategories}  />
            <CoursesSection />
            
        </div>
    );
};

export default App;
