// import React from "react";
// import Task from "./Task";
import { v4 as uuid } from "uuid";

// function TaskList({ tasks }) {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//       {tasks.map((task) => (
//         <Task key={uuid()} category={task.category} text={task.text} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      {taskList.map((task) => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          id={task.id}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
