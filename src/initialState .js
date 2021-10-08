import { createTask, createFilter } from './helpers/helpers';

const initialState = {
  todoData: [
    createTask('Completed task', '12', '30'),
    createTask('Editing task', '12', '30'),
    createTask('Active task', '12', '30'),
  ],
  filtersData: [createFilter('All', true), createFilter('Active', false), createFilter('Completed', false)],
  activeFilter: 'All',
  minutes: '',
  seconds: '',
};

export default initialState;
