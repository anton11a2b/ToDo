import React from "react";
import Task from "../task";
import "./taskList.css";

const TaskList = ({ tasks, onDeleted }) => {
  return (
    <ul className="todo-list">
      {tasks.map((item) => (
        <Task
          key={item.id}
          label={item.label}
          onDeleted={() => onDeleted(item.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
