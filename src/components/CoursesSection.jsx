import React from 'react';
import Filters from './Filters';
import CourseCard from './CourseCard';
import mockCourses from './mockCourses';
import mockFilters from './mockFilters';
import SearchAndFilters from './SearchAndFilters';


const CoursesSection = () => {
    const cantCourses=800;
    return (
        <section className="courses-section">
            <div className="m-4">
                <SearchAndFilters />
                <h2>Total courses {cantCourses}</h2>
                <div className="row">
                    <div className="col-lg-2 d-none d-xl-block">
                        <Filters filters={mockFilters} />
                    </div>
                    <div className="col-xl-10">
                        <div className="courses row">
                            {mockCourses.map((course, index) => (
                                <div className="col-12 col-sm-6 col-md-6 col-xl-4 mb-4" key={index}>
                                    <CourseCard {...course} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
