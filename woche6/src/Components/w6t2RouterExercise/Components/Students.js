import React from "react";
import { Link } from "react-router-dom";
import Head from "./AssetsComponents/Head";

export default function Students({ studentsList }) {

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
      <Head title={"studentslist"} content={"das ist die studies liste"} name={"description"}/>

      <h1>List of Students</h1>
      <ul>{listOfStudents}</ul>
    </div>
  );
}
