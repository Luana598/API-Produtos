
const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

//Criando as rotas da nossa API

//1º Rota para obter todos os produtos
router.get('/', productController.getAllProducts);

//2º Rota para obter dados de um cliente por ID
router.get('/:id', productController.getProductById);

//2º Rota para obter dados de um cliente por nome
router.get('/name/:name', productController.getProductByName);

//3º Rota para criar um novo usuário
router.post('/', productController.createProduct);

//4° Rota para atualizar dados do usuário
router.put('/:id',productController.updatedProduct);

//4° Rota para deletar o usuário
router.delete('/:id',productController.removedProduct);

module.exports = router;
