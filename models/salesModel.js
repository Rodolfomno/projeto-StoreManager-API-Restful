const connection = require('./connection');

const getAll = async () => {
    const query = `SELECT 
    sp.sale_id AS saleId,
    sp.product_id AS productId,
    sp.quantity,
    s.date
FROM
    StoreManager.sales_products AS sp
        LEFT JOIN
    StoreManager.sales AS s ON sp.sale_id = s.id
ORDER BY sp.sale_id , sp.product_id;`;
    const [result] = await connection.execute(query);

    return result;
};

const getAllSalesById = async (id) => {
    const query = `SELECT 
    sp.product_id AS productId,
    sp.quantity,
    s.date
FROM
    StoreManager.sales_products AS sp
        LEFT JOIN
    StoreManager.sales AS s ON sp.sale_id = s.id
WHERE
    sp.sale_id = ?
ORDER BY sp.sale_id , sp.product_id;`;
    const [result] = await connection.execute(query, [id]);
    return result;
};

const newSaleProduct = async (saleId, productId, quantity) => {
    const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
      VALUES (?, ?, ?)`;
  
    const [response] = await connection.execute(query, [saleId, productId, quantity]);

    return response;
};

const newSale = async () => {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
    const [response] = await connection.execute(query);

    return response;
};

module.exports = { getAll, getAllSalesById, newSale, newSaleProduct };