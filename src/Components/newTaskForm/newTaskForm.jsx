import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onTaskAdded } = this.props;
    const { label } = this.state;

    if (event.keyCode === 13) {
      onTaskAdded(label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    const { label } = this.state;
    const { onSecChange, onMinChange, minutes, seconds } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input
            autoFocus
            type="text"
            className="new-todo"
            value={label}
            onKeyDown={this.onSubmit}
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            value={minutes}
            onKeyDown={this.onSubmit}
            onChange={onMinChange}
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={seconds}
            onKeyDown={this.onSubmit}
            onChange={onSecChange}
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.defaultProps = {
  minutes: '',
  seconds: '',
  onTaskAdded: () => {},
  onSecChange: () => {},
  onMinChange: () => {},
};

NewTaskForm.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  onTaskAdded: PropTypes.func,
  onSecChange: PropTypes.func,
  onMinChange: PropTypes.func,
};
