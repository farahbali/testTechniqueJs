import React from 'react';

const TaskItem = ({ task, onToggleTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggleTask(task.id)}
      />
      <span>{task.title}</span>
    </div>
  );
};

export default TaskItem;
