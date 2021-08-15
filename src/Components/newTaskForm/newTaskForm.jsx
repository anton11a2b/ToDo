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

    event.preventDefault();
    onTaskAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            type="text"
            className="new-todo"
            value={label}
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.defaultProps = {
  onTaskAdded: () => {},
};

NewTaskForm.propTypes = {
  onTaskAdded: PropTypes.func,
};
