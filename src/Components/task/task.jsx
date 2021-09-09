import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DistanceToNow from '../distanceToNow/distanceToNow';
import Timer from '../timer/timer';
import './task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);

    const { label } = this.props;
    this.state = {
      label,
    };
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { onToggleModified } = this.props;

    event.preventDefault();
    onToggleModified();
  };

  render() {
    const { done, hidden, modified, onDeleted, onToggleDone, onToggleModified, min, sec, date } = this.props;
    const { label } = this.state;

    let className = '';

    if (done) {
      className += ' completed';
    }

    if (hidden) {
      className += ' hidden';
    }

    if (modified) {
      className += ' editing';
    }

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
          <label>
            <span className="title">{label}</span>
            <Timer min={min} sec={sec} />
            <DistanceToNow date={date} />
          </label>
          <button type="button" onClick={onToggleModified} className="icon icon-edit" />
          <button type="button" onClick={onDeleted} className="icon icon-destroy" />
        </div>
        {className.includes('editing') && (
          <form onSubmit={this.onSubmit}>
            <input onChange={this.onLabelChange} type="text" className="edit" value={label} autoFocus />
          </form>
        )}
      </li>
    );
  }
}

Task.defaultProps = {
  min: '',
  sec: '',
  label: '',
  done: false,
  hidden: false,
  modified: false,
  date: new Date(),
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleModified: () => {},
};

Task.propTypes = {
  min: PropTypes.string,
  sec: PropTypes.string,
  label: PropTypes.string,
  done: PropTypes.bool,
  hidden: PropTypes.bool,
  modified: PropTypes.bool,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleModified: PropTypes.func,
  date: PropTypes.instanceOf(Date),
};
