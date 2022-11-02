import React from 'react';
import GoBack from './AssetsComponents/GoBack';
import { useParams } from 'react-router-dom';
import { getUser } from '../Helper/studentHelper';

export default function Results({ subjects, studentsList,name }) {
    
    const studentParam = useParams();

    const listOfGrades = subjects.map((item, index) => {
        //randomGrade muss im loop stehe.wenn ausserhalb, dann ist die note immer gleich
        const randomGrade = Math.floor(Math.random() * 5);

        return (
            <p key={index}>{item}:{randomGrade + 1}</p>
        )

    })

    //wählt den passend studenten aus
    const selectedStudent = getUser(studentsList,studentParam )
    

    return (

        <div>
            <GoBack title={`Profile of ${selectedStudent[0].name.first}`}/>
            <h3>{name}</h3>
            <h3>Grade of {selectedStudent[0].name.first}</h3>
                {listOfGrades}
        </div>
    )
}