import React, { Component } from "react";
import PropTypes from "prop-types";
import "./newTaskForm.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
		this.props.onTaskAdded(this.state.label);
		this.setState({
			label: "",
		})
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            type="text"
            className="new-todo"
            value={this.state.label}
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.defaultProps = {
  onTaskAdded: () => {}
};

NewTaskForm.propTypes = {
  onTaskAdded: PropTypes.func,
};
