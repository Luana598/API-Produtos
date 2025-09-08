
# API Loja Online

API para gerenciar o catálogo de produtos e o cadastro de clientes de uma loja de eletrônicos.

O projeto foi desenvolvido em Node.js com Express.js, utilizando JavaScript e JSON para manipulação dos dados, além do Postman para testes e documentação dos endpoints.

# Funcionalidades

* Produtos

Criar, listar, atualizar e excluir produtos.

Controlar estoque, preço, categoria e status de disponibilidade.

* Clientes

Cadastrar, listar, atualizar e excluir clientes.

Gerenciar dados básicos como nome, e-mail e endereço.

# Arquitetura do Projeto

O projeto segue o padrão MVC (Model-View-Controller), adaptado para APIs REST:

* Model

Responsável pela estrutura dos dados (ex.: Produto.js, Cliente.js).

Define atributos e regras de negócio (id, nome, descrição, preço, estoque, etc.).

* Controller

Contém a lógica da aplicação.

Manipula requisições HTTP (GET, POST, PUT, DELETE).

Exemplo: ProdutoController.js gerencia criação, atualização e remoção de produtos.

* Routes

Define os endpoints da API.

Exemplo:

POST /produtos → cria um produto.

GET /clientes → lista clientes.

PUT /produtos/:id → atualiza informações de um produto.

# Tecnologias Utilizadas

Node.js → ambiente de execução JavaScript no servidor.

Express.js → framework para criação de APIs REST.

JavaScript → linguagem de programação base.

JSON → formato de troca de dados.

Postman → ferramenta para testes e documentação de endpoints.


# Prints de teste do projeto
[Testando API-Clientes](./img_clients)
[Testando API-Produtos](./img_products)