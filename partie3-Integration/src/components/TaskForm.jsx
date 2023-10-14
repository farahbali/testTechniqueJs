import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask('');
  };
  const styles = {
    taskForm: {
      display: 'flex',
      marginBottom: '20px'
    },
    taskInput: {
      padding: '10px',
      fontSize: '17px',
      border: '2px solid #774D9E',
      borderRadius: '4px',
      width: '75%',
      color: '#774D9E'
    },
    addButton: {
      padding: '10px',
      fontSize: '17px',
      border: 'none',
      borderRadius: '4px',
      marginLeft: '10px',
      backgroundColor: '#9966CC',
      color: 'white',
      cursor: 'pointer'
    },
    addButtonHover: {
      backgroundColor: '#774D9E'
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.taskForm}>
      <input
        type="text"
        value={newTask}
        placeholder="Add a new task..."
        style={styles.taskInput}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button 
        style={isHovered ? {...styles.addButton, ...styles.addButtonHover} : styles.addButton}
        onClick={handleAddTask}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;