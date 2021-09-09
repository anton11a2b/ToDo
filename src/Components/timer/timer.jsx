import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    const { min, sec } = this.props;

    this.state = {
      isStarted: false,
      timer: null,
      minutesLeft: min,
      secondsLeft: sec,
    };
  }

  componentWillUnmount() {
    const { timer } = this.state;

    clearInterval(timer);
  }

  startTimer = () => {
    const { timer, secondsLeft, minutesLeft } = this.state;

    clearInterval(timer);

    this.setState({ isStarted: true });
    let seconds = secondsLeft;
    let minutes = minutesLeft;

    const newTimer = setInterval(() => {
      if (seconds !== '00') {
        seconds -= 1;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      } else if (minutes !== '00' && seconds === '00') {
        minutes -= 1;
        seconds = 59;
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
      } else if (minutes === '00' && seconds === '00') {
        clearInterval(timer);
        this.setState({ isStarted: false });
      }

      this.setState({ secondsLeft: seconds, minutesLeft: minutes });
    }, 1000);

    return this.setState({ timer: newTimer });
  };

  pauseTimer = () => {
    const { timer } = this.state;

    this.setState({ isStarted: false });

    clearInterval(timer);
  };

  render() {
    const { minutesLeft, secondsLeft, isStarted } = this.state;

    let classNamePlay = 'icon icon-play';
    let classNamePause = 'icon icon-pause';

    if (isStarted) {
      classNamePlay += ' hidden';
    } else {
      classNamePause += ' hidden';
    }

    return (
      <span className="description">
        <button type="button" className={classNamePlay} onClick={this.startTimer} />
        <button type="button" className={classNamePause} onClick={this.pauseTimer} />
        {minutesLeft}:{secondsLeft}
      </span>
    );
  }
}

Timer.defaultProps = {
  min: '',
  sec: '',
};

Timer.propTypes = {
  min: PropTypes.string,
  sec: PropTypes.string,
};
