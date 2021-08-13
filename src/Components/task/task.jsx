import React from "react";
import "./task.css";

const Task = ({ label, onDeleted, onToggleDone, done, hidden }) => {
  let className = "";

  if (done) {
    className += " completed";
	}

  if (hidden) {
    className += " hidden";
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description" onClick={onToggleDone}>
            {label}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button onClick={onDeleted} className="icon icon-destroy"></button>
      </div>
      {className.includes("editing") && (
        <input type="text" className="edit" value="Editing task" />
      )}
    </li>
  );
};

export default Task;
