import React from "react";
import Task from "../task";
import "./taskList.css";

const TaskList = ({ tasks }) => {
  const elements = tasks.map((item) => {
    return (
      <li key={item.id} className={item.class}>
        <Task label={item.label} />
        {item.class === "editing" && (
          <input type="text" className="edit" value="Editing task" />
        )}
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
