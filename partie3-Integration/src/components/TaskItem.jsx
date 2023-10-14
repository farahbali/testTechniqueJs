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

  return (
    <div className="task">
      <label>
        <input 
          type="checkbox"
          checked={task.done}
          className="checkbox"
          onChange={() => onToggleTask(task._id)}
        />
        {
          isEditing 
          ? <textarea className="text" value={editedTitle} onChange={handleChange} />
          : <span className={`taskLabel ${task.done}` ? 'done' : ''}>
              {task.title}
            </span>
        }
      </label>
      { 
        isEditing 
        ? <button className="editButton" onClick={handleSave}>
            <FiSave />
          </button>
        : <button className="editButton" onClick={handleEdit}>
            <FiEdit />
          </button>
      }
      <button className="deleteButton" onClick={() => onDeleteTask(task._id)}>
        <FiTrash2 />
      </button>
    </div>
  );
};

export default TaskItem;

const styles = `

.task {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: 18px;
  color: #333;
}

.checkbox {
  appearance: none;
  background-color: #f2f2f2;
  border: 1px solid #cacece;
  padding: 10px;
  border-radius: 3px;
  position: absolute; 
  left: 10px; 
  top: 50%; 
  transform: translateY(-50%); 
}

.checkbox:checked {
  background-color: #9f87c3;
  border: 1px solid #9f87c3;
  color: #99a1a7;
}

.checkbox:checked:after {
  content: '\\2714';
  font-size: 14px;
  position: absolute;
  top: 0px;
  left: 3px;
  color: #fff;
}

label {
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 400px;
}

.taskLabel, text {
  flex: 1;
  margin: 10px;
  margin-right: 40px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  max-width: 80%; 
}

.text{
  resize: vertical;
  border: 1px solid #cacece;
  border-radius: 3px;
  font-size: 18px;
  padding: 10px;
}
.deleteButton {
  background-color: transparent;
  border: none;
  color: #f54242;
  cursor: pointer;
  position: absolute;
  right: 10px; 
  top: 50%; 
  transform: translateY(-50%); 
}

.editButton {
  background-color: transparent;
  border: none;
  color: #774D9E;
  cursor: pointer;
  position: absolute; 
  right: 40px; 
  top: 50%; 
  transform: translateY(-50%); 
}

`;

// document.head.insertAdjacentHTML('beforeend', <style>${styles}</style>);