//arquivo que recebe as requisições

const clientModel = require('../model/clientModel');

//Controlador para listar todos os clientes
const getAllClients = (req, res) => {
    const clients = clientModel.findAll();
    res.status(200).json(clients);
}

//Método do Controlador para obter um cliente por ID
const getClientById = (req, res) => {

    //Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id);

    //Chamando o metodo findById do userModel
    const client = clientModel.findById(id);

    if (client) {
        //Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuario em formato json
        res.status(200).json(client);
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' });
    }
};


//Método do Controlador para obter um cliente por nome
const getClientByName = (req, res) => {

    //Pegando o id que foi enviado na requisicao
    const name = req.params.name;

    //Chamando o metodo findByName do clientModel
    const client = clientModel.findByName(name);

    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({ mensagem: 'Cliente não encontrado no banco de dados!' });
    }
};


// Método do controlador para criar um novo usuário
const createClient = (req, res) => {

    //Pegando os dados que foram enviados pelo Body (Corpo) da Requisiçao
    const {nome, email, telefone, endereco,
        dataCadastro, ativo} = req.body;

    //Validar se foram enviados
    if (!nome || !email || !telefone || !endereco || !dataCadastro || !ativo) {
        return res.status(400).json({ mensagem: 'o preenchimento de todos os dados é obrigatório.'});
    } else {
        const newClient = clientModel.create({nome, email, telefone, endereco,
            dataCadastro, ativo});
        res.status(201).json(newClient);
    }



}


module.exports = {
    getAllClients,
    getClientById,
    getClientByName,
    createClient
}
