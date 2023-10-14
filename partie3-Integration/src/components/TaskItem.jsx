import React, { useState } from 'react';
import { FiTrash2, FiEdit, FiSave } from 'react-icons/fi';

const TaskItem = ({ task, onToggleTask, onDeleteTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditTask(task._id, editedTitle);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // Styles for the component
  const styles = {
    task: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      padding: '10px 20px',
      marginBottom: '10px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      fontSize: '18px',
      color: '#333',
    },
    checkbox: {
      appearance: 'none',
      backgroundColor: '#f2f2f2',
      border: '1px solid #cacece',
      borderRadius: '3px',
      position: 'absolute',
      left: '10px',
      top: '54%',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
    },
    checkboxChecked: {
      backgroundColor: '#9f87c3',
      border: '1px solid #9f87c3',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '40px',
    },
    taskLabel: {
  resize: 'none',
  fontSize: '18px',
  padding: '10px',
  width:'250px' ,
  overflowY: 'auto',
  whiteSpace: 'wrap', 
  wordWrap: 'break-word',
    },
    text: {
      resize: 'vertical',
      border: '1px solid #cacece',
      borderRadius: '3px',
      fontSize: '18px',
      padding: '10px',
    },
    deleteButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#f54242',
      cursor: 'pointer',
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    editButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#774D9E',
      cursor: 'pointer',
      position: 'absolute',
      right: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  };
  const checkmarkStyles = {
    fontSize: '14px',
    position: 'absolute',
    top: '55%',
    left: '6%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    display: task.done ? 'block' : 'none'
  };
  return (
    <div style={styles.task}>
      <label style={styles.label}>
        <input 
          type="checkbox"
          checked={task.done}
          style={task.done ? { ...styles.checkbox, ...styles.checkboxChecked } : styles.checkbox}
          onChange={() => onToggleTask(task._id)}
        />
        <span style={checkmarkStyles}>&#10004;</span>
        {
          isEditing 
          ? <textarea style={styles.text} value={editedTitle} onChange={handleChange} />
          : <span style={styles.taskLabel} className={task.done ? 'done' : ''}>
              {task.title}
            </span>
        }
      </label>
      { 
        isEditing 
        ? <button style={styles.editButton} onClick={handleSave}>
            <FiSave />
          </button>
        : <button style={styles.editButton} onClick={handleEdit}>
            <FiEdit />
          </button>
      }
      <button style={styles.deleteButton} onClick={() => onDeleteTask(task._id)}>
        <FiTrash2 />
      </button>
    </div>
  );
};

export default TaskItem;