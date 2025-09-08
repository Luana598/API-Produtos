const productModel = require('../model/productModel');

//Controlador para listar todos os produtos
const getAllProducts = (req, res) => {
    const products = productModel.findAll();
    res.status(200).json(products);
}

//Método do Controlador para obter um produto por ID
const getProductById = (req, res) => {

    //Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id);

    //Chamando o metodo findById do productModel
    const product = productModel.findById(id);

    if (product) {
        //Responder com status code de 200 (Sucesso!)
        //e devolver os dados do produ em formato json
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
};


//Método do Controlador para obter um produto por nome
const getProductByName = (req, res) => {

    //Pegando o nome que foi enviado na requisicao
    const name = req.params.name;

    //Chamando o metodo findByName do productModel
    const product = productModel.findByName(name);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
};


// Método do controlador para criar um novo produto
const createProduct = (req, res) => {

    //Pegando os dados que foram enviados pelo Body (Corpo) da Requisiçao
    const {name, descricao, preco, categoria,
        estoque, ativo} = req.body;

    //Validar se foram enviados
    if (!name || !descricao || !preco || !categoria || !estoque || ativo === undefined) {
        return res.status(400).json({ mensagem: 'o preenchimento de todos os dados é obrigatório.'});
    } else {
        const newProduct = productModel.create({name, descricao, preco, categoria,
            estoque, ativo});
        res.status(201).json(newProduct);
    }

}


const updatedProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;

    const updatedProduct = productModel.update(id, updatedData);

    if (updatedProduct) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({ mensagem: 'Erro: Produto não encontrado no banco de dados!' });
    }
}

const removedProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const removedProduct = productModel.remove(id);

    if (removedProduct) {
        res.status(200).json(removedProduct);
    } else {
        res.status(404).json({ mensagem: 'Erro: Produto não encontrado no banco de dados!' });
    }
}


module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updatedProduct,
    removedProduct
}
