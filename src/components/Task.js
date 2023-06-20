import React from "react";
// import { v4 as uuid } from "uuid";


function Task({ category, text, id, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };
  
  return (

    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
