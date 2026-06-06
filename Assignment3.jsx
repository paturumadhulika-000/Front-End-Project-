import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import StudentList from "./components/StudentList.jsx";

const App = () => {
  // ---------- useState ----------
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState("");

  // ---------- useRef ----------
  const inputRef = useRef(null);

  // Focus input when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // ---------- useEffect ----------
  useEffect(() => {
    document.title = `Total Students: ${students.length}`;
  }, [students]);

  // ---------- useMemo ----------
  const totalStudents = useMemo(() => students.length, [students]);
  const totalCharacters = useMemo(
    () => students.reduce((acc, name) => acc + name.length, 0),
    [students]
  );

  // ---------- useCallback ----------
  const handleDelete = useCallback(
    (index) => {
      setStudents((prev) => prev.filter((_, i) => i !== index));
    },
    [setStudents]
  );

  // Add student
  const handleAddStudent = () => {
    if (newStudent.trim() !== "") {
      setStudents([...students, newStudent]);
      setNewStudent("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h2>🎓 Student Management Dashboard</h2>

      <input
        ref={inputRef}
        type="text"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
        placeholder="Enter student name"
      />
      <button onClick={handleAddStudent}>Add Student</button>
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <h3>Statistics</h3>
      <p>Total Students: {totalStudents}</p>
      <p>Total Characters in Names: {totalCharacters}</p>

      <h3>Student List</h3>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
};

export default App;