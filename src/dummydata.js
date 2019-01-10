import uniqid from 'uniqid';

const todos = [
  {
    id: uniqid(),
    title: 'Something Important',
    completed: false
  },
  {
    id: uniqid(),
    title: 'Feed the Dog',
    completed: true
  },
  {
    id: uniqid(),
    title: 'Fight the Cat',
    completed: false
  }
];

export default todos;
