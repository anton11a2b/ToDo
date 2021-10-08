import { v4 as uuid } from 'uuid';

export const createTask = (label, min, sec) => ({
  sec,
  min,
  label,
  done: false,
  hidden: false,
  modified: false,
  isStarted: false,
  id: uuid(),
  date: new Date(),
});

export const createFilter = (label, hasClass) => ({
  label,
  hasClass,
});

export const checkActiveFilter = (activeFilter, el) => {
  switch (activeFilter) {
    case 'Active':
      if (el.done) {
        return { ...el, hidden: true };
      }

      return { ...el, hidden: false };
    case 'Completed':
      if (!el.done) {
        return { ...el, hidden: true };
      }

      return { ...el, hidden: false };
    default:
      return null;
  }
};
