import React from "react";
import TasksFilter from "../tasksFilter";
import "./footer.css";

const Footer = ({ filters }) => {
  const elements = filters.map((item) => {
    return (
      <li>
        <TasksFilter {...item} />
      </li>
    );
  });
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">{elements}</ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
