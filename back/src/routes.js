const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();

// const OngController = require('./controllers/OngController');
const UsersController = require('./controllers/UsersController');
// const IncidentsController = require('./controllers/IncidentesController');
const ProductController = require('./controllers/ProductController');

// routes.get('/ongs', OngController.index);
// routes.post('/ongs', celebrate({
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required(),
//         email: Joi.string().required().email(),
//         whatsapp: Joi.string(),
//         city: Joi.string().required(),
//         uf: Joi.string().required().length(2),
//     })
// }), OngController.create);

// routes.get('/profile', ProfileController.index);

// routes.get('/incidents', IncidentsController.index);
// routes.get('/incidents/:id', IncidentsController.getOne);
// routes.post('/incidents', IncidentsController.create);
// routes.delete('/incidents/:id', IncidentsController.delete);

routes.post('/login', UsersController.login);
routes.post('/user', UsersController.create);
routes.post('/emailvalidate/:code', UsersController.validateEmail);

routes.get('/products', ProductController.index);

module.exports = routes;