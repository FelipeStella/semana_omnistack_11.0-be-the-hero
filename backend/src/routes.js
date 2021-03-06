const express = require('express');//importar pacote

const sessionController = require('./controllers/sessionController');

const ongController = require('./controllers/ongController');

const incidentController = require('./controllers/incidentController');

const profileController = require('./controllers/profileController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes; //forma de exportar alguma variável de dentro de um arquivo.