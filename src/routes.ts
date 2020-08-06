import express from 'express';
import ClassesControler from './controllers/ClassesController';


const routes = express.Router();
const classesControllers = new ClassesControler();

routes.get('/', (request, response) => {
    return response.json({ message: 'hello world' });
});

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

export default routes;