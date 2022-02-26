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

module.exports = { getAll, getAllSalesById };