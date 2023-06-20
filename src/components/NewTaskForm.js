// import React, {useState} from "react";

// function NewTaskForm({ categories, onTaskFormSubmit}) {
//   const [taskText, setTaskText] = useState("");
//   const [category, setCategory] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTask = {
//       text: taskText,
//       category: category,
//     };

//     onTaskFormSubmit(newTask);
//     setTaskText("");
//     setCategory("");
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(), // Generate a unique ID for the task
      text: taskText,
      category: category,
    };

    onTaskFormSubmit(newTask);
    setTaskText("");
    setCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={uuid()} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
