import React from "react";
import { useParams } from "react-router-dom";

export default function StudentDetailPage({ studentsList }) {
  const studentParam = useParams();

  const selectedStudent = studentsList.filter(
    (student) => student.login.uuid === studentParam.id
  );

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "80%", }}>
      <h1>Studentdetailpage </h1>
      <div style={{width: "100%"}}>
      <p>{JSON.stringify(selectedStudent)}</p>
      </div>
      
    </div>
  );
}
