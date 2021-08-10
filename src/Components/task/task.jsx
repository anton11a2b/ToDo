import React, { Component } from "react";
import "./task.css";

export default class Task extends Component {
  state = {
    done: false,
  };

  doneTask = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done } = this.state;
    let className = "";

    if (done) {
      className = "completed";
    }

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description" onClick={this.doneTask}>
              {label}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={onDeleted} className="icon icon-destroy"></button>
        </div>
        {className === "editing" && (
          <input type="text" className="edit" value="Editing task" />
        )}
      </li>
    );
  }
}
