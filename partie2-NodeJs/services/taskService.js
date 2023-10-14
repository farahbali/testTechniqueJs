import * as taskRepository from "../repositories/taskRepository.js";

/**
 * @function getTasks
 */

export const getTasks = async (req, res) => {
  const response = await taskRepository.getTasks(req, res);
  return response;
};

/**
 * @function getTaskById
 */

export const getTaskById = async ({ id }, res) => {
  const response = await taskRepository.getTaskById({ id }, res);
  return response;
};
/**
 * @function addTask
 */
export const addTask = async (body, res) => {
  const response = await taskRepository.addTask(body, res);

  return response;
};
/**
 * @function updateTask
 */
export const updateTask = async ({ id }, body, res) => {
  const response = await taskRepository.updateTask({ id }, body, res);

  return response;
};
/**
 * @function deleteTask
 */
export const deleteTask = async ({ id }, res) => {
  const response = await taskRepository.deleteTask({ id }, res);

  return response;
};

export default { getTasks, getTaskById, addTask, updateTask, deleteTask };
