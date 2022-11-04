import { NavLink } from "react-router-dom";
import useStudents from "./services/useStudents";
import Instructions from "./Instructions";
import "./styles.css";
import MainRoutes from "./Routing/MainRoutes";
import MainNavigation from "./Components/Navigation/MainNavigation";
import { Helmet } from "react-helmet";

function ExerciseFull() {
  const students = useStudents();
  const subjects = ["React", "HTML", "CSS", "JS"];

  


  return (
    <div style={{ width: "100%" }}>
    <Helmet>
      <title>Student Exercise</title>
      <meta name="description" content="das ist meine Übung für Students management SPA"/>
    </Helmet>
      {/**ausgelagerte navigation  */}
     <MainNavigation/>
      <div className="Instructions">
        <div className="block">
         {/**ausgelagertes routing zur besseren übersicht im code */}
          <MainRoutes students={students} subjects={subjects}/>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default ExerciseFull;
