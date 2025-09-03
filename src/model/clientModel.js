//Array para simulação do banco de dados
let clients = [
    {
        id: 1, name: 'Laura', email: 'laura@gmail',
        telefone: '11 99999-9999', endereco: 'Av dos Bugres, 08, Jd. Bela Vista, Itapevi, SP, 06647-280',
        dataCadastro: '2025/03/06, 13:34', ativo: true
    },
    {
        id: 2, name: 'Luis', email: 'luis@gmail',
        telefone: '11 88888-8888', endereco: 'Rua dos Alfeneiros, 12, Jd. São Jorge, Carapicuíba, SP, 06532-870',
        dataCadastro: '2025/05/02, 15:08', ativo: false
    },
    {
        id: 3, name: 'Cleonice', email: 'cleo@gmail',
        telefone: '11 77777-7777', endereco: 'Serra dos Abreus, 27, Jd. Alvorada, Barueri, SP, 05690-432',
        dataCadastro: '2025/06/12, 10:25', ativo: true
    }
]

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

const create = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1;
    
    const clientWithId = {id: newId, ...newClient}
    clients.push(clientWithId);
    return clientWithId;
}

module.exports = {
    findAll,
    findById,
    findByName,
    create
}