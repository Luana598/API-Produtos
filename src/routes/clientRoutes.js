const express = require('express');

const router = express.Router();

const clientController = require('../controller/clientController');

//Criando as rotas da nossa API

//1º Rota para obter todos os clientes
router.get('/', clientController.getAllClients);

//2º Rota para obter dados de um cliente por ID
router.get('/:id', clientController.getClientById);

//2º Rota para obter dados de um cliente por nome
router.get('/name/:name', clientController.getClientByName);

//3º Rota para criar um novo usuário
router.post('/', clientController.createClient);

module.exports = router;