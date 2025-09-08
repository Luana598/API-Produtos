const products = require("./products.json")

const findAll = () => {
    return products;
}

//Função para buscar o produto por ID
const findById = (id) =>{
    return products.find(product => product.id === id);
}

//Função para buscar o produto por nome
const findByName = (name) =>{
    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

//Função para criar um produto
const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    
    const productWithId = {id: newId, ...newProduct}
    products.push(productWithId);
    return productWithId;
}

const update = (id, updatedData) => {
    const index = products.findIndex(product => product.id === id);
    
    if (index === -1) {
        return null;
    }

    products[index] = { ...products[index], ...updatedData };
    return products[index];
}

const remove = (id) => {
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return null;
    }

    const removeProduct = products.splice(index, 1);
    return removeProduct[0];
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove
}

