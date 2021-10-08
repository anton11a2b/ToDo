import { createTask } from '../helpers/helpers';

export const deleteTask = (todo, id) => {
  todo.setState(({ todoData }) => {
    const newArray = todoData.filter((el) => el.id !== id);

    return {
      todoData: newArray,
    };
  });
};

export const deleteDoneTasks = (todo) => {
  todo.setState(({ todoData }) => {
    const newArr = todoData.filter((el) => !el.done);

    return {
      todoData: newArr,
    };
  });
};

export const onSelected = (todo, label) => {
  todo.setState(({ filtersData }) => {
    const newFiltersData = filtersData.map((el) => {
      if (el.label !== label) {
        return { ...el, hasClass: false };
      }

      return { ...el, hasClass: true };
    });

    return {
      filtersData: newFiltersData,
      activeFilter: label,
    };
  });
};

export const addTask = (todo, label) => {
  let { minutes, seconds } = todo.state;

  if (Number(minutes) < 10) {
    minutes = `0${Number(minutes)}`;
  }

  if (seconds < 10) {
    seconds = `0${Number(seconds)}`;
  }

  if (label) {
    const newTask = createTask(label, minutes, seconds);

    todo.setState(({ todoData }) => {
      const newArray = [...todoData, newTask];

      return {
        todoData: newArray,
        minutes: '',
        seconds: '',
      };
    });
  }
};

export const onToggleProperty = (todo, id, propName) => {
  todo.setState(({ todoData }) => {
    const newArr = todoData.map((el) => {
      if (el.id === id) {
        return { ...el, [propName]: !el[propName] };
      }

      return el;
    });

    return {
      todoData: newArr,
    };
  });
};

export const onChangeProperty = (todo, event, propName) => {
  let timePropName = event.target.value;

  if (Number(timePropName) > 59) {
    timePropName = '59';
  }

  todo.setState({ [propName]: timePropName });
};
