//Array para simulação do banco de dados
const clients = require("./clients.json")

//Função para buscar todos os clientes
const findAll = () => {
    return clients;
}

//Função para buscar o cliente por ID
const findById = (id) =>{
    return clients.find(client => client.id === id);
}

//Função para buscar o cliente por nome
const findByName = (name) =>{
    return clients.find(client => client.name.toLowerCase() === name.toLowerCase());
}

//Função para criar cliente
const create = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1;
    
    const clientWithId = {id: newId, ...newClient}
    clients.push(clientWithId);
    return clientWithId;
}

const update = (id, updatedData) => {
    const index = clients.findIndex(client => client.id === id);
    
    if (index === -1) {
        return null;
    }

    clients[index] = { ...clients[index], ...updatedData };
    return clients[index];
}

const remove = (id) => {
    const index = clients.findIndex(client => client.id === id);

    if (index === -1) {
        return null;
    }

    const removeClient = clients.splice(index, 1);
    return removeClient[0];
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove
}

