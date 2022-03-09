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

    return response;
};

const createNewProduct = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES(?,?)';
    const [response] = connection.execute(query, [name, quantity]);

    return response;
};

const updateProduct = async (id, name, quantity) => {
    const query = 'UPDATE StoreManager.products SET name = ? , quantity = ? WHERE id = ?';

    const [response] = await connection.execute(query, [name, quantity, id]);
    return response;
};

const deleteProduct = async (id) => {
    const query = 'DELETE FROM StoreManager.products WHERE id = ?';

    const [response] = await connection.execute(query, [id]);
    return response;
};

module.exports = { 
    getAll,
     getAllProductsById,
      getName,
       createNewProduct,
        updateProduct,
         deleteProduct,
         };