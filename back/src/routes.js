const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const IncidentsController = require('./controllers/IncidentesController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.get('/incidents/:id', IncidentsController.getOne);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/login/:id', SessionController.create);

module.exports = routes;