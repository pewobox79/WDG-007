import React from "react";
import { Link } from "react-router-dom";

export default function Students({ studentsList }) {
  console.log("aus students.js", studentsList);

  const listOfStudents = studentsList.map((student) => {
    return (
      <li key={student.id.value} id={student.id.value}>
        <Link to={`/students/${student.login.uuid}`}>
          {student.name.first} {student.name.last}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1>List of Students</h1>
      <ul>{listOfStudents}</ul>
    </div>
  );
}
