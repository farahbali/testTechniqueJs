import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import { useTaskListQuery, useCreateTaskMutation,useDeleteTaskMutation,useUpdateTaskMutation } from "../features/tasks/tasksSlice";

const TaskPage = () => {
  const { data: tasks } = useTaskListQuery();
  const [taskDelete, { data: deletedData }] = useDeleteTaskMutation({
    fixedCacheKey: "task-delete",
  });
  const [editTaskData, { data:editedData }] = useUpdateTaskMutation({
    fixedCacheKey: "task-update",
  });
  const [createtask, { data: newTask }] = useCreateTaskMutation({
    fixedCacheKey: "createtask",
  });
  const addTask = (title) => {
    const newTask = { title , done:false};
    createtask({body: newTask})
    .unwrap()
    .catch((error) => {
      console.log(error.message)})
  };

  const toggleTask = (taskId, title,done) => {
    // editTaskData({ id:taskId, body: {title, done}})
  };

  const deleteTask = (taskId) => {
    console.log(taskId);
    taskDelete({ id: taskId });
    // setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle) => {
    editTaskData({ id:taskId, body: { title: newTitle}})
  };


  const styles = {
    background: {
      width: '100vw',
      height: '100vh',
      background: "url('https://i.pinimg.com/1200x/40/1b/e1/401be19115aefd10f7c7f9c51036e94c.jpg') no-repeat center center fixed",
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
  },
  card: {
      width: '400px',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      border: '1px solid #774D9E',
  }
  };

  
  return (
    <div style={styles.background}>
        <div style={styles.card}>
            <h1>Task List</h1>
            <TaskForm onAddTask={addTask} />
            {tasks?.map((task) => (
                <TaskItem 
                    task={task} 
                    onToggleTask={toggleTask}
                    onDeleteTask={deleteTask}
                    onEditTask={editTask}
                />
            ))}
            {/* ... rest of your component */}
        </div>
    </div>
);
};

export default TaskPage;

