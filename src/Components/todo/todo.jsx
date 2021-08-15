import React, { Component } from 'react';
import Footer from '../footer/footer';
import TaskList from '../taskList/taskList';
import NewTaskForm from '../newTaskForm/newTaskForm';
import './todo.css';

export default class Todo extends Component {
  maxId = 1;

  state = {
    todoData: [this.createTask('Completed task'), this.createTask('Editing task'), this.createTask('Active task')],
    filtersData: [
      this.createFilter('All', true),
      this.createFilter('Active', false),
      this.createFilter('Completed', false),
    ],
    activeFilter: 'All',
  };

  deleteDoneTasks = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.done);

      return {
        todoData: newArr,
      };
    });
  };

  onSelected = (label) => {
    this.setState(({ filtersData }) => {
      const newFiltersData = filtersData.map((el) => {
        if (el.label !== label) {
          return { ...el, hasClass: false };
        }

        return { ...el, hasClass: true };
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
          return { ...el, done: !el.done };
        }

        return el;
      });

      return {
        todoData: newArr,
      };
    });
  };

  onToggleModified = (id) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((el) => {
        if (el.id === id) {
          return { ...el, modified: !el.modified };
        }

        return el;
      });

      return {
        todoData: newArr,
      };
    });
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
      modified: false,
      id: this.maxId++,
      date: new Date(),
    };
  }

  checkActiveFilter(activeFilter, el) {
    switch (activeFilter) {
      case 'Active':
        if (el.done) {
          return { ...el, hidden: true };
        }

        return { ...el, hidden: false };
      case 'Completed':
        if (!el.done) {
          return { ...el, hidden: true };
        }

        return { ...el, hidden: false };
      default:
        return null;
    }
  }

  render() {
    const { todoData, filtersData, activeFilter } = this.state;
    const todoCount = todoData.filter((el) => !el.done).length;
    const todoDataForRender =
      activeFilter === 'All' ? todoData : todoData.map((el) => this.checkActiveFilter(activeFilter, el));

    return (
      <section className="todoapp">
        <NewTaskForm onTaskAdded={this.addTask} />
        <section className="main">
          <TaskList
            tasks={todoDataForRender}
            modified={this.modified}
            onDeleted={this.deleteTask}
            onToggleDone={this.onToggleDone}
            onToggleModified={this.onToggleModified}
          />
          <Footer
            toDo={todoCount}
            filters={filtersData}
            selecteFilter={this.onSelected}
            clearCompleted={this.deleteDoneTasks}
          />
        </section>
      </section>
    );
  }
}
