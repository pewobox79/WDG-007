import { useState, useEffect } from "react";
import axios from "axios";

const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        await axios
          .get("https://randomuser.me/api/?results=10")
          .then((result) => setStudents(result.data.results));
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchStudents();
  }, []);

  return students;
};

export default useStudents;
