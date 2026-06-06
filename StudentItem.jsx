import React from "react";

function StudentItem({ name, index, onDelete }) {
  return (
    <li>
      {name}
      <button
        onClick={() => onDelete(index)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default React.memo(StudentItem);