import React, { useState } from "react";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import { Link } from 'react-router-dom';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';

const TaskPage = () => {
  const NavigationButton = styled(Link)` Exsiting style`
  //initialize task data to render
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "im working on react project 😎",
      done: false,
    },
    { id: 2, title: "i finished node js project 🟢", done: true },
  ]);
//logic to add task
  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, done: false };
    setTasks([...tasks, newTask]);
  };
//logic to mark task as done
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <div>
          <NavigationButton to="/signup">
            <FiUserPlus />
            Sign Up
          </NavigationButton>
          <NavigationButton to="/login">
            <FiLogIn />
            Login
          </NavigationButton>
        </div>
      <h1 style={{color:"gray"}}>Task List 😁</h1>
      <TaskForm onAddTask={addTask} />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default TaskPage;
