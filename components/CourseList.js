import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import { getCourseTerm } from '../utils/course.js';

const CourseList = ({ courses, view }) => {
    const [selectedTerm, setSelectedTerm] = useState('Winter');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

    return (
        <React.Fragment>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <ScrollView>
                <View style={styles.courseList}>
                    <CourseSelector courses={termCourses} view={view} />
                </View>
            </ScrollView>
        </React.Fragment >
    );
}

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default CourseList;