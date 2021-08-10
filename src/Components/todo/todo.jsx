import React, { Component } from "react";
import Footer from "../footer";
import TaskList from "../taskList";
import NewTaskForm from "../newTaskForm";
import "./todo.css";

export default class Todo extends Component {
  state = {
    tasksData: [
      { label: "Completed task", id: 1 },
      { label: "Editing task", id: 2 },
      { label: "Active task", id: 3 },
    ],
    filtersData: [
      { label: "All", class: "selected", id: 1 },
      { label: "Active", id: 2 },
      { label: "Completed", id: 3 },
    ],
  };

  deleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const newArray = tasksData.filter((el) => el.id !== id);

      return {
        tasksData: newArray,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList onDeleted={this.deleteTask} tasks={this.state.tasksData} />
          <Footer filters={this.state.filtersData} />
        </section>
      </section>
    );
  }
}
