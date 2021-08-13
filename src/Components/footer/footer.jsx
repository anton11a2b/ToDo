import React from "react";
import TasksFilter from "../tasksFilter";
import "./footer.css";

const Footer = ({ filters, toDo, selecteFilter, clearCompleted }) => {
  const elements = filters.map(({ label, hasClass}) => {
    return (
      <li key={label}>
        <TasksFilter
          label={label}
          hasClass={hasClass}
          selecteFilter={(event) => selecteFilter(event.target.textContent)}
        />
      </li>
    );
  });
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <ul className="filters">{elements}</ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
