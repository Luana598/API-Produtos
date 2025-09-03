//Importar o módulo do Express
const express = require('express');

//Importar as rotas de usuário
const clientRoutes = require('./src/routes/clientRoutes');

//Criar uma aplicação express
const app = express();

//Definir um Middleware para analisar json no corpo das requisições
app.use(express.json());

//Definir a porta em que o servidor irá escutar
const porta = 8000;

//Definir a rota de teste da API
app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando");
})

//Usando as rotas de usuário
app.use('/api/clients', clientRoutes);

//Inicia o servidor
app.listen(porta, () =>{
    console.log(`Servidor rodando em https://localhost:${porta}`);
})