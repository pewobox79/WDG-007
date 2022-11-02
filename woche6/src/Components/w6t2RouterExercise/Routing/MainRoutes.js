import React from 'react';
import {Routes, Route} from 'react-router-dom'
import StudentDetailPage from '../Components/StudentDetailPage';
import Students from '../Components/Students';
import Results from '../Components/Results';

export default function MainRoutes({students, subjects}) {
    //das routing wird zur übersicht ausgelagert
    
    return (
        <Routes>
            <Route path="/" element={<h1>homepage</h1>} />
            <Route
                path="students"
                element={<Students studentsList={students} />}
            />
            <Route
                path="students/:id"
                element={<StudentDetailPage studentsList={students} subjects={subjects} />}
            />
            <Route 
                path="students/:id/results" 
                element={<Results studentsList={students} subjects={subjects}/>}/>
        </Routes>
    )
} 