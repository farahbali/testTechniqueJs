import Task from "../models/tasksModal.js";
import mongoose from "mongoose";

//get all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find().catch((err) =>
    res.status(500).json({ err: err.message })
  );
  return res.status(200).json(tasks);
};
//get  task by id
export const getTaskById = async ({ id }, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no task found with that specific id" });
  }
  const tasks = await Task.findById(id).catch((err) =>
    res.status(404).json({ err: err.message })
  );
  return res.status(200).json(tasks);
};
// add new task
export const addTask = async ({ title }, res) => {
  const task = await Task.create({ title }).catch((err) =>
    res.status(400).json({ err: err.message })
  );
  return res.status(200).json(task);
};
// delete task
export const deleteTask = async ({ id }, res) => {
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// update task
export const updateTask = async ({ id }, body, res) => {
  try {
    const task = await Task.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export default { getTasks, getTaskById, addTask, updateTask, deleteTask };
