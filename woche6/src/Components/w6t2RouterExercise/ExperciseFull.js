import { Routes, Route, NavLink } from "react-router-dom";
import useStudents from "./services/useStudents";
import Students from "./Components/Students";
import StudentDetailPage from "./Components/StudentDetailPage";
import Instructions from "./Instructions";
import "./styles.css";

function ExerciseFull () {
  const students = useStudents();
  const subjects = ["React", "HTML", "CSS", "JS"];

  const navColor = {
    color: "white"
  };
  return (
    <div style={{width: "100%"}}>
      <nav>
        <NavLink
          className="link"
          to="/students"
          style={({ isActive }) => (isActive ? navColor : undefined)}
        >
          Students
        </NavLink>
        <NavLink className="link" to="#">
          Student Results
        </NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route path="/" element={<h1>homepage</h1>} />
            <Route
              path="students"
              element={<Students studentsList={students} />}
            />
            <Route
              path="students/:id"
              element={<StudentDetailPage studentsList={students} />}
            />
          </Routes>
        </div>
        <Instructions/>
      </div>
    </div>
  );
};

export default ExerciseFull;
