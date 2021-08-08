import React from "react";
import "./tasksFilter.css";

const TasksFilter = (props) => {
  return <button className={props.class}>{props.label}</button>;
};

export default TasksFilter;
