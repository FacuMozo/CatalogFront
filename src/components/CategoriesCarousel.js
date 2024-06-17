import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';
import './CategoriesCarousel.scss';

const CategorieCarousel = ({ categories }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const updateScrollPosition = () => {
        if (carouselRef.current) {
            setScrollPosition(carouselRef.current.scrollLeft);
        }
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.addEventListener('scroll', updateScrollPosition);
        }
        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener('scroll', updateScrollPosition);
            }
        };
    }, []);

    const isAtStart = scrollPosition === 0;
    const isAtEnd = carouselRef.current
        ? scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        : false;

    return (
        <div className="categorie-carousel-wrapper">
            <button
                className={`control prev ${isAtStart ? 'disabled' : ''}`}
                onClick={handlePrevClick}
                style={{ display: isAtStart ? 'none' : 'block' }}
            >
                Prev
            </button>
            <div className="categorie-carousel" ref={carouselRef}>
                <div className="categorie-list">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} title={category.title} icon={category.icon} />
                    ))}
                </div>
            </div>
            <button
                className={`control next ${isAtEnd ? 'disabled' : ''}`}
                onClick={handleNextClick}
                aria-hidden="true"
                // style={{ display: isAtEnd ? 'none' : 'block' }}
            >
                Next
            </button>
        </div>
    );
};

CategorieCarousel.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CategorieCarousel;
