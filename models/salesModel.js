const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM StoreManager.sales;';
    const [result] = await connection.execute(query);

    return result;
};

const getAllSalesById = async (id) => {
    const query = 'SELECT * FROM StoreManager.sales WHERE id = ?;';
    const [result] = await connection.execute(query, [id]);
    return result;
};

module.exports = { getAll, getAllSalesById };