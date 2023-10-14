import * as Controllers from '../controllers/index.js';
import express from 'express';

const routes = express.Router();

routes.get('/task', Controllers.getTasks);
routes.get('/task/:id', Controllers.getTaskById);
routes.post('/task', Controllers.addTask);
routes.put('/task/:id', Controllers.updateTask);
routes.delete('/task/:id', Controllers.deleteTask);

export default routes;
