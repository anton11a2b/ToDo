import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class DistanceToNow extends Component {
  constructor(props) {
    super(props);

    const { date } = this.props;
    this.state = {
      time: formatDistanceToNow(date, {
        addSuffix: true,
        includeSeconds: true,
      }),
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

  render() {
    const { time } = this.state;

    return <span className="created">{time}</span>;
  }
}

DistanceToNow.defaultProps = {
  date: new Date(),
};

DistanceToNow.propTypes = {
  date: PropTypes.instanceOf(Date),
};
