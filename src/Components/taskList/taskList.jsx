import React from "react";
import Task from "../task";
import "./taskList.css";

const TaskList = ({ tasks, onDeleted, onToggleDone }) => {
  return (
    <ul className="todo-list">
      {tasks.map(({ label, done, hidden, id }) => (
        <Task
          key={id}
          done={done}
          label={label}
          hidden={hidden}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
