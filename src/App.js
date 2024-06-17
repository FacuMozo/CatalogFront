import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesCarousel from './components/CategoriesCarousel';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import mockCategories from './components/mockCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <CategoriesCarousel categories={mockCategories}  />
            <CoursesSection />
            <Footer />
        </div>
    );
};

export default App;
