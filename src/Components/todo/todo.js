import React from "react";
import Footer from "../footer";
import TaskList from "../taskList";
import NewTaskForm from "../newTaskForm";
import "./todo.css";

const Todo = () => {
  const tasksData = [
    { label: "Completed task", class: "completed", id: 1 },
    { label: "Editing task", class: "editing", id: 2 },
    { label: "Active task", id: 3 },
  ];

  const filtersData = [
    { label: "All", class: "selected" },
    { label: "Active" },
    { label: "Completed" },
  ];

  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList tasks={tasksData} />
        <Footer filters={filtersData} />
      </section>
    </section>
  );
};

export default Todo;
