const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/auth', AuthController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.show);

module.exports = routes;
