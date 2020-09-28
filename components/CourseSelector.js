import React, { useState } from 'react';
import { View } from 'react-native';
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course.js';
import Course from './Course';

const CourseSelector = ({ courses }) => {
    const [selected, setSelected] = useState([]);

    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
        courses.map(course => (
            <Course key={course.id} course={course}
                isDisabled={hasConflict(course, selected)}
                select={toggle}
                isSelected={selected.includes(course)}
            />
        ))
    );
};

export default CourseSelector; 