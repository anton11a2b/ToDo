import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import "./task.css";

export default class Task extends Component {
  state = {
    time: formatDistanceToNow(this.props.date, {
      addSuffix: true,
      includeSeconds: true,
    }),
    label: this.props.label,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: formatDistanceToNow(this.props.date, {
          addSuffix: true,
          includeSeconds: true,
        }),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onToggleModified();
  };

  render() {
    const {
      done,
      hidden,
      modified,
      onDeleted,
      onToggleDone,
      onToggleModified,
    } = this.props;

    let className = "";

    if (done) {
      className += " completed";
    }

    if (hidden) {
      className += " hidden";
    }

    if (modified) {
      className += " editing";
    }

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onToggleDone}
          />
          <label>
            <span className="description">{this.state.label}</span>
            <span className="created">{this.state.time}</span>
          </label>
          <button
            onClick={onToggleModified}
            className="icon icon-edit"
          ></button>
          <button onClick={onDeleted} className="icon icon-destroy"></button>
        </div>
        {className.includes("editing") && (
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onLabelChange}
              type="text"
              className="edit"
              value={this.state.label}
              autoFocus
            />
          </form>
        )}
      </li>
    );
  }
}

Task.defaultProps = {
  label: "",
  done: false,
  hidden: false,
  modified: false,
  date: new Date(),
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleModified: () => {},
};

Task.propTypes = {
  done: PropTypes.bool,
  hidden: PropTypes.bool,
  modified: PropTypes.bool,
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleModified: PropTypes.func,
  date: PropTypes.instanceOf(Date),
};
