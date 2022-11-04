import React from "react";
import "../styles.css";
import { useParams, Link } from "react-router-dom";
import GoBack from "./AssetsComponents/GoBack";
import { getUser } from "../Helper/studentHelper";
import Head from "./AssetsComponents/Head";



export default function StudentDetailPage({ studentsList, subjects }) {
  const studentParam = useParams();

  //das ist die filterfunktion nur ausgelagert um DRY zu vermeiden
  const selectedStudent = getUser(studentsList, studentParam);



  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "80%", }}>

      <Head title={`das profil von ${selectedStudent[0].name.first}`} content={`das ist ein ausführliches profil von ${selectedStudent[0].name.first}`} name={"description"} />

      <GoBack title="Back to StudentsList" />
      <h1>Studentdetailpage </h1>
      <Link to={`/students/${selectedStudent[0].login.uuid}/results`} className="link" >See Results</Link>
      {/*<Results name={selectedStudent[0].name.last} studentsList={studentsList} subjects={subjects}/>*/}
      <p>{JSON.stringify(selectedStudent)}</p>
    </div>
  );
}
