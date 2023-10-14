import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };
  
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onAddTask={addTask} />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default TaskPage;
