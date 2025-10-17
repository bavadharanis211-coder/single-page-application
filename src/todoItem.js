import React from 'react';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TodoItem;

