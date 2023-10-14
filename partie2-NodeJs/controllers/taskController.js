import * as taskService from "../services/index.js";

export const getTasks = async (req, res) => {
  const tasks = await taskService.getTasks(req,res);
  return tasks;
};

export const getTaskById = async (req, res) => {
  const singleTask = await taskService.getTaskById(req.params, res);
  return singleTask;
};

export const addTask = async (req, res) => {
  const task = await taskService.addTask(req.body, res);
  return task;
};

export const updateTask = async (req, res) => {
  const task = await taskService.updateTask(req.params, req.body, res);
  return task;
};

export const deleteTask = async (req, res) => {
  const deletedTask = await taskService.deleteTask(req.params, res);
  return deletedTask;
};

export default { getTasks, getTaskById, addTask, updateTask, deleteTask };
