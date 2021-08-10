import React, { Component } from "react";
import "./tasksFilter.css";

export default class TasksFilter extends Component {
	render() {
		const { className, label} = this.props;

		return <button className={className}>{label}</button>;
	}
}
