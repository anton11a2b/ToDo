import React, { Component } from 'react';

import Footer from '../footer/footer';
import TaskList from '../taskList/taskList';
import NewTaskForm from '../newTaskForm/newTaskForm';

import initialState from '../../initialState ';
import { checkActiveFilter } from '../../helpers/helpers';

import {
  addTask,
  deleteTask,
  onSelected,
  deleteDoneTasks,
  onToggleProperty,
  onChangeProperty,
} from '../../eventHandlers/eventHandlers';

import './todo.css';

export default class Todo extends Component {
  state = initialState;

  render() {
    const { todoData, filtersData, activeFilter, minutes, seconds } = this.state;
    const todoCount = todoData.filter((el) => !el.done).length;
    const todoDataForRender =
      activeFilter === 'All' ? todoData : todoData.map((el) => checkActiveFilter(activeFilter, el));

    return (
      <section className="todoapp">
        <NewTaskForm
          minutes={minutes}
          seconds={seconds}
          onTaskAdded={(label) => addTask(this, label)}
          onMinChange={(event) => onChangeProperty(this, event, 'minutes')}
          onSecChange={(event) => onChangeProperty(this, event, 'seconds')}
        />
        <section className="main">
          <TaskList
            tasks={todoDataForRender}
            modified={this.modified}
            onDeleted={(id) => deleteTask(this, id)}
            onToggleDone={(id) => onToggleProperty(this, id, 'done')}
            onToggleModified={(id) => onToggleProperty(this, id, 'modified')}
          />
          <Footer
            toDo={todoCount}
            filters={filtersData}
            selecteFilter={(label) => onSelected(this, label)}
            clearCompleted={() => deleteDoneTasks(this)}
          />
        </section>
      </section>
    );
  }
}
