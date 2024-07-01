import React from 'react';
import Filters from './Filters';
import CourseCard from './CourseCard';
import mockCourses from '../mockCourses';
import mockFilters from '../mockFilters';
import SearchAndFilters from './SearchAndFilters';
import './CoursesSection.scss'


const CoursesSection = () => {
    const cantCourses=800;
    return (
        <section className="courses-section">
            <div className="m-4">
                <SearchAndFilters />
                <h2>Total courses {cantCourses}</h2>
                <div className="d-flex flex-row">
                    <div className=" d-none d-xl-block">
                        <Filters filters={mockFilters} />
                    </div>
                    <div className="d-flex flex-row  courses-list ">
                        <div className="d-flex flex-row flex-wrap ms-xl-3 ">
                            {mockCourses.map((course, index) => (
                                <div className=" col-12 col-sm-6 col-md-6 col-xl-4 mb-sm-2 mb-xl-0 px-xl-2 pe-2" key={index}>
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
