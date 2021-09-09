import React, { Component } from 'react';
import Footer from '../footer/footer';
import TaskList from '../taskList/taskList';
import NewTaskForm from '../newTaskForm/newTaskForm';
import './todo.css';

export default class Todo extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTask('Completed task', '12', '30'),
      this.createTask('Editing task', '12', '30'),
      this.createTask('Active task', '12', '30'),
    ],
    filtersData: [
      this.createFilter('All', true),
      this.createFilter('Active', false),
      this.createFilter('Completed', false),
    ],
    activeFilter: 'All',
    minutes: '',
    seconds: '',
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
    let { minutes, seconds } = this.state;

    if (Number(minutes) < 10) {
      minutes = `0${Number(minutes)}`;
    }

    if (seconds < 10) {
      seconds = `0${Number(seconds)}`;
    }

    if (label) {
      const newTask = this.createTask(label, minutes, seconds);

      this.setState(({ todoData }) => {
        const newArray = [...todoData, newTask];

        return {
          todoData: newArray,
          minutes: '',
          seconds: '',
        };
      });
    }
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

  onMinChange = (event) => {
    let min = event.target.value;

    if (Number(min) > 59) {
      min = '59';
    }

    this.setState({ minutes: min });
  };

  onSecChange = (event) => {
    let sec = event.target.value;

    if (Number(sec) > 59) {
      sec = '59';
    }

    this.setState({ seconds: sec });
  };

  createTask(label, min, sec) {
    return {
      sec,
      min,
      label,
      done: false,
      hidden: false,
      modified: false,
      isStarted: false,
      id: this.maxId++,
      date: new Date(),
    };
  }

  createFilter(label, hasClass) {
    return {
      label,
      hasClass,
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
    const { todoData, filtersData, activeFilter, minutes, seconds } = this.state;
    const todoCount = todoData.filter((el) => !el.done).length;
    const todoDataForRender =
      activeFilter === 'All' ? todoData : todoData.map((el) => this.checkActiveFilter(activeFilter, el));

    return (
      <section className="todoapp">
        <NewTaskForm
          minutes={minutes}
          seconds={seconds}
          onTaskAdded={this.addTask}
          onMinChange={this.onMinChange}
          onSecChange={this.onSecChange}
        />
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
