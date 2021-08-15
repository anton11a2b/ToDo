import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);

    const { date, label } = this.props;
    this.state = {
      time: formatDistanceToNow(date, {
        addSuffix: true,
        includeSeconds: true,
      }),
      label,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { date } = this.props;

      this.setState({
        time: formatDistanceToNow(date, {
          addSuffix: true,
          includeSeconds: true,
        }),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
    const { done, hidden, modified, onDeleted, onToggleDone, onToggleModified } = this.props;
    const { time, label } = this.state;

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
            <span className="description">{label}</span>
            <span className="created">{time}</span>
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
  done: PropTypes.bool,
  hidden: PropTypes.bool,
  modified: PropTypes.bool,
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleModified: PropTypes.func,
  date: PropTypes.instanceOf(Date),
};
