import React from "react";
import "./tasksFilter.css";

const TasksFilter = ({ label, hasClass, selecteFilter }) => {
  let className = "";

  if (hasClass) {
    className = "selected";
  }

  return (
    <button className={className} onClick={selecteFilter}>
      {label}
    </button>
  );
};

export default TasksFilter;
