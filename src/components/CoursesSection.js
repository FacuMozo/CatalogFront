import React from 'react';
import Filters from './Filters';
import CourseCard from './CourseCard';
import mockCourses from './mockCourses';
import mockFilters from './mockFilters';


const CoursesSection = () => {

    return (
        <section className="courses-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <Filters filters={mockFilters}/>
                    </div>
                    <div className="col-md-9">
                        <div className="courses row">
                            {mockCourses.map((course, index) => (
                                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
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
