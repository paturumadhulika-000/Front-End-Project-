import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StudentItem from "./StudentItem";

function Assignment1() {
  const [students, setStudents] = useState([
    "Rahul",
    "Priya",
    "Kiran",
  ]);

  const [studentName, setStudentName] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Total Students: ${students.length}`;
  }, [students]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addStudent = () => {
    if (studentName.trim() === "") return;

    setStudents([...students, studentName]);
    setStudentName("");
  };

  const deleteStudent = useCallback((index) => {
    setStudents((prevStudents) =>
      prevStudents.filter((_, i) => i !== index)
    );
  }, []);

  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCharacters = useMemo(() => {
    return students.reduce(
      (total, student) => total + student.length,
      0
    );
  }, [students]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management Dashboard</h1>

      <input
        type="text"
        ref={inputRef}
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter student name"
      />

      <button
        onClick={addStudent}
        style={{ marginLeft: "10px" }}
      >
        Add Student
      </button>

      <button
        onClick={focusInput}
        style={{ marginLeft: "10px" }}
      >
        Focus Input
      </button>

      <h3>Total Students: {totalStudents}</h3>
      <h3>Total Characters: {totalCharacters}</h3>

      <ul>
        {students.map((student, index) => (
          <StudentItem
            key={index}
            name={student}
            index={index}
            onDelete={deleteStudent}
          />
        ))}
      </ul>
    </div>
  );
}

export default Assignment1;