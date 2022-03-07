const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM StoreManager.products;';
    const [result] = await connection.execute(query);

    return result;
};

const getAllProductsById = async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
    const [result] = await connection.execute(query, [id]);
    return result;
};

const getName = async (productName) => {
    const query = 'SELECT * FROM StoreManager.products WHERE NAME = ?';
    const [response] = await connection.execute(query, [productName]);
    console.log(response);

    return response;
};

const createNewProduct = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES(?,?)';
    console.log(name, quantity);
    const [response] = connection.execute(query, [name, quantity]);
    console.log(response);  

    return response;
};

module.exports = { getAll, getAllProductsById, getName, createNewProduct };