import React, { Component } from "react";
import Footer from "../footer";
import TaskList from "../taskList";
import NewTaskForm from "../newTaskForm";
import "./todo.css";
// import id from "date-fns/esm/locale/id/index.js";

export default class Todo extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTask("Completed task"),
      this.createTask("Editing task"),
      this.createTask("Active task"),
    ],
    filtersData: [
      this.createFilter("All", true),
      this.createFilter("Active", false),
      this.createFilter("Completed", false),
    ],
    activeFilter: "All",
  };

  createFilter(label, hasClass) {
    return {
      label,
      hasClass,
    };
  }

  createTask(label) {
    return {
      label,
      done: false,
      hidden: false,
      id: this.maxId++,
    };
  }

  checkActiveFilter(activeFilter, el) {
    switch (activeFilter) {
      case "Active":
        if (el.done) {
          return { ...el, hidden: true };
        }

        return { ...el, hidden: false };
      case "Completed":
        if (!el.done) {
          return { ...el, hidden: true };
        }

        return { ...el, hidden: false };
      default:
        return null;
    }
  }

  onSelected = (label) => {
    this.setState(({ filtersData }) => {
      const newFiltersData = filtersData.map((el) => {
        if (el.label !== label) {
          const newElement = { ...el, hasClass: false };

          return newElement;
        }

        const newElement = { ...el, hasClass: true };

        return newElement;
      });

      return {
        filtersData: newFiltersData,
        activeFilter: label,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => el.id !== id);

      return {
        todoData: newArray,
      };
    });
  };

  addTask = (label) => {
    const newTask = this.createTask(label);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newTask];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((el) => {
        if (el.id === id) {
          const newElement = { ...el, done: !el.done };

          return newElement;
        }

        return el;
      });

      return {
        todoData: newArr,
      };
    });
  };

  deleteDoneTasks = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.done);

      return {
        todoData: newArr,
      };
    });
  };

  render() {
    const { todoData, filtersData, activeFilter } = this.state;
    const todoCount = todoData.filter((el) => !el.done).length;
    const todoDataForRender =
      activeFilter === "All"
        ? todoData
        : todoData.map((el) => this.checkActiveFilter(activeFilter, el));

    return (
      <section className="todoapp">
        <NewTaskForm onTaskAdded={this.addTask} />
        <section className="main">
          <TaskList
            tasks={todoDataForRender}
            onDeleted={this.deleteTask}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            filters={filtersData}
            toDo={todoCount}
            selecteFilter={this.onSelected}
            clearCompleted={this.deleteDoneTasks}
          />
        </section>
      </section>
    );
  }
}
