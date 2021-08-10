import React, { Component } from "react";
import TasksFilter from "../tasksFilter";
import "./footer.css";

export default class Footer extends Component {
  render() {
    const { filters } = this.props;

    const elements = filters.map(({id, ...item}) => {
      return (
        <li key={id}>
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
  }
}
